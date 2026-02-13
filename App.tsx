
import React, { useState, useEffect, useCallback, useRef } from 'react';
import MapScene from './components/MapScene';
import ControlPanel from './components/ControlPanel';
import PlaybackControls from './components/PlaybackControls';
import { fetchActiveTornadoes, fetchHistoricalTornadoes } from './services/weatherService';
import { TornadoData, MapConfig } from './types';

const App: React.FC = () => {
  const [tornadoes, setTornadoes] = useState<TornadoData[]>([]);
  const [config, setConfig] = useState<MapConfig>({
    centerLat: 39.8283,
    centerLon: -98.5795,
    zoom: 10,
    radius: 50 
  });
  const [locationName, setLocationName] = useState('US View');
  const [loading, setLoading] = useState(true);
  const [statusMessage, setStatusMessage] = useState('Initializing StormWatch...');
  const [appMode, setAppMode] = useState<'live' | 'historical'>('historical');
  
  // Playback State
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackProgress, setPlaybackProgress] = useState(1.0); // Start at end (1.0) for full view
  const lastTimeRef = useRef<number>(0);
  const requestRef = useRef<number>(0);

  // Function to load data
  const loadData = useCallback(async (mode: 'live' | 'historical', dateStr?: string) => {
    setLoading(true);
    try {
    // Do not clear tornadoes immediately to avoid flash, unless switching modes
    
    if (mode === 'live') {
        setStatusMessage('Scanning NOAA active alerts...');
        const data = await fetchActiveTornadoes();
        setTornadoes(data);
        
        if (data.length > 0) {
            setConfig(prev => ({
            ...prev,
            centerLat: data[0].lat,
            centerLon: data[0].lon,
            radius: 50 
            }));
            setLocationName('Active Tornado Zone');
            setStatusMessage('');
        } else {
            setConfig(prev => ({ ...prev, radius: 50 }));
            setStatusMessage('No active Tornado Warnings currently detected by NOAA.');
        }
        // Reset playback for live mode (static usually)
        setPlaybackProgress(1.0);
        setIsPlaying(false);
    } else {
        const d = dateStr || '2013-05-20';
        setStatusMessage(`Loading archive data for ${d}...`);
        const data = await fetchHistoricalTornadoes(d);
        setTornadoes(data);

        if (data.length > 0) {
            setConfig(prev => ({
                ...prev,
                centerLat: data[0].lat,
                centerLon: data[0].lon,
                radius: 50
            }));
            setLocationName(data[0].description || 'Historical Event');
            setStatusMessage('');
            // Auto-reset playback to start (0.0) so user sees start of path
            setPlaybackProgress(0.0);
            setIsPlaying(false);
        } else {
            setStatusMessage(`No records found for ${d}`);
        }
    }
    } catch (err) {
        console.error('Error loading data:', err);
        setStatusMessage('Error loading data. Please try again.');
    } finally {
        setLoading(false);
    }
  }, []);

  // Initial Data Fetch - default to historical so tornado data is always visible
  useEffect(() => {
    loadData('historical', '2013-05-20');
  }, [loadData]);

  // Polling Logic - Fixed to respect current mode
  useEffect(() => {
    if (appMode !== 'live') return; // Stop polling if not live

    const interval = setInterval(() => {
        loadData('live');
    }, 60000);
    
    return () => clearInterval(interval);
  }, [appMode, loadData]); // Re-create interval if mode changes

  // Playback Animation Loop
  const animatePlayback = useCallback((time: number) => {
    if (lastTimeRef.current !== undefined) {
      const delta = time - lastTimeRef.current;
      // Simulation speed: Full path in ~10 seconds
      const duration = 10000; 
      const step = delta / duration;
      
      setPlaybackProgress(prev => {
        const next = prev + step;
        if (next >= 1.0) {
            setIsPlaying(false);
            return 1.0;
        }
        return next;
      });
    }
    lastTimeRef.current = time;
    if (isPlaying) {
        requestRef.current = requestAnimationFrame(animatePlayback);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) {
        // If we hit play at the end, restart
        setPlaybackProgress(prev => prev >= 1.0 ? 0.0 : prev);
        lastTimeRef.current = performance.now();
        requestRef.current = requestAnimationFrame(animatePlayback);
    } else {
        cancelAnimationFrame(requestRef.current);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPlaying, animatePlayback]);


  // Handlers
  const handleLocationSelect = (lat: number, lon: number, name: string) => {
    setConfig(prev => ({ ...prev, centerLat: lat, centerLon: lon }));
    setLocationName(name);
  };

  const handleModeChange = (mode: 'live' | 'historical', date?: string) => {
      setAppMode(mode);
      loadData(mode, date);
  };

  const handleTogglePlay = () => {
      setIsPlaying(!isPlaying);
  };
  
  const handleProgressChange = (val: number) => {
      setPlaybackProgress(val);
      if (isPlaying) setIsPlaying(false); // Pause on drag
  };

  const handleReplay = () => {
      setPlaybackProgress(0.0);
      setIsPlaying(true);
  };

  return (
    <div className="w-full h-screen relative bg-[#f0f9ff] overflow-hidden">
      <ControlPanel 
        onLocationSelect={handleLocationSelect} 
        currentLocationName={locationName}
        onModeChange={handleModeChange}
        mode={appMode}
      />

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-40 text-white backdrop-blur-sm">
            <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mb-4"></div>
                <p className="font-mono text-sm font-semibold tracking-wide">{statusMessage}</p>
            </div>
        </div>
      )}

      {!loading && tornadoes.length === 0 && (
         <div className="absolute top-36 left-1/2 transform -translate-x-1/2 z-30 bg-black/50 border border-white/10 px-6 py-3 rounded-full pointer-events-none shadow-xl backdrop-blur-xl">
            <p className="text-gray-300 text-sm font-mono flex items-center">
                <span className={`w-2 h-2 rounded-full mr-2 ${appMode === 'live' ? 'bg-red-500' : 'bg-yellow-500'}`}></span>
                {appMode === 'live' ? 'NOAA: No Active Tornado Warnings' : 'Archive: No events in view'}
            </p>
         </div>
      )}
      
      <MapScene 
        config={config} 
        tornadoes={tornadoes} 
        locationName={locationName} 
        playbackProgress={playbackProgress}
      />
      
      <PlaybackControls 
        isPlaying={isPlaying}
        progress={playbackProgress}
        onTogglePlay={handleTogglePlay}
        onProgressChange={handleProgressChange}
        onReplay={handleReplay}
      />
      
      {/* HUD Overlay */}
      <div className="absolute bottom-6 left-6 z-10 pointer-events-none">
        <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl text-xs font-mono">
            <h3 className={`${appMode === 'live' ? 'text-red-400' : 'text-yellow-400'} font-bold mb-2 uppercase tracking-wider`}>
                {appMode === 'live' ? 'Active Tracking' : 'Archive Viewer'}
            </h3>
            <div className="space-y-1 text-gray-400">
                <p>Tornadoes Detected: <span className="text-white font-bold">{tornadoes.length}</span></p>
                <p>Data Source: <span className="text-yellow-400 font-medium">
                    {appMode === 'live' ? 'NOAA / NWS API' : 'Historical Archive'}
                </span></p>
                <p>Status: <span className={tornadoes.length > 0 ? (appMode === 'live' ? "text-red-400 animate-pulse font-bold" : "text-yellow-400 font-bold") : "text-emerald-400 font-bold"}>
                    {tornadoes.length > 0 ? (appMode === 'live' ? "WARNINGS ACTIVE" : "EVENT LOADED") : "ALL CLEAR"}
                </span></p>
            </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 text-right pointer-events-none">
        <p className="text-[10px] text-white/90 font-medium">SkyWeave Engine v2.0 &lt;Shahnab&gt;</p>
        <p className="text-[10px] text-white/60">Real-Time Volumetric Viz</p>
      </div>

    </div>
  );
};

export default App;
