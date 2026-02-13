
import React, { useState, useEffect } from 'react';
import { SearchResult } from '../types';
import { searchLocation } from '../services/weatherService';

interface ControlPanelProps {
  onLocationSelect: (lat: number, lon: number, name: string) => void;
  currentLocationName: string;
  onModeChange: (mode: 'live' | 'historical', date?: string) => void;
  mode: 'live' | 'historical';
}

const ControlPanel: React.FC<ControlPanelProps> = ({ 
  onLocationSelect, 
  currentLocationName,
  onModeChange,
  mode
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [historyDate, setHistoryDate] = useState('2013-05-20');

  // Debounce search
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (query.length > 2) {
        setIsSearching(true);
        const data = await searchLocation(query);
        setResults(data);
        setIsSearching(false);
        setIsOpen(true);
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleSelect = (result: SearchResult) => {
    onLocationSelect(parseFloat(result.lat), parseFloat(result.lon), result.display_name.split(',')[0]);
    setQuery('');
    setIsOpen(false);
  };

  const handleModeSwitch = (newMode: 'live' | 'historical') => {
    onModeChange(newMode, newMode === 'historical' ? historyDate : undefined);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHistoryDate(e.target.value);
    onModeChange('historical', e.target.value);
  };

  return (
    <div className="absolute top-6 left-6 z-50 w-full max-w-sm font-sans">
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-5 transition-all duration-300">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-lg font-bold text-white tracking-tight leading-none">
              StormWatch
            </h1>
            <p className="text-[10px] text-gray-400 font-semibold tracking-widest mt-1 uppercase">
              Volumetric Weather Engine
            </p>
          </div>
          <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded-full border border-white/10">
             <div className={`w-1.5 h-1.5 rounded-full ${mode === 'live' ? 'bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]' : 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]'}`}></div>
             <span className="text-[10px] font-mono text-gray-300 uppercase font-medium">{mode}</span>
          </div>
        </div>

        {/* Mode Toggle */}
        <div className="grid grid-cols-2 gap-1 bg-black/40 p-1 rounded-lg mb-5 border border-white/5">
          <button 
            className={`py-2 text-[11px] font-semibold rounded-md transition-all duration-200 ${mode === 'live' ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            onClick={() => handleModeSwitch('live')}
          >
            LIVE DATA
          </button>
          <button 
            className={`py-2 text-[11px] font-semibold rounded-md transition-all duration-200 ${mode === 'historical' ? 'bg-yellow-600 text-white shadow-lg shadow-yellow-900/40' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            onClick={() => handleModeSwitch('historical')}
          >
            ARCHIVE
          </button>
        </div>

        {mode === 'historical' && (
          <div className="mb-5 animate-fadeIn">
            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Historical Date</label>
            <input 
              type="date" 
              value={historyDate}
              onChange={handleDateChange}
              style={{ colorScheme: 'dark' }}
              className="block w-full px-3 py-2.5 text-xs text-white bg-white/5 border border-white/10 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors appearance-none"
            />
            <div className="flex gap-2 mt-2 overflow-x-auto pb-1">
               <button onClick={() => {setHistoryDate('2013-05-20'); onModeChange('historical', '2013-05-20')}} className="text-[10px] whitespace-nowrap px-2 py-1 bg-white/5 border border-white/10 hover:bg-white/10 rounded text-gray-300 transition-colors">Moore 2013</button>
               <button onClick={() => {setHistoryDate('2011-05-22'); onModeChange('historical', '2011-05-22')}} className="text-[10px] whitespace-nowrap px-2 py-1 bg-white/5 border border-white/10 hover:bg-white/10 rounded text-gray-300 transition-colors">Joplin 2011</button>
            </div>
          </div>
        )}
        
        {/* Search */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-3.5 h-3.5 text-gray-500 group-focus-within:text-yellow-400 transition-colors" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input 
            type="text" 
            className="block w-full pl-9 pr-3 py-3 text-xs text-white bg-white/5 border border-white/10 rounded-xl focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 placeholder-gray-600 outline-none transition-all shadow-sm" 
            placeholder="Search location..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {isSearching && (
            <div className="absolute right-3 top-3">
              <div className="animate-spin h-3.5 w-3.5 border-2 border-yellow-500 rounded-full border-t-transparent"></div>
            </div>
          )}
        </div>

        {/* Results Dropdown */}
        {isOpen && results.length > 0 && (
          <ul className="absolute left-0 right-0 top-full mt-2 bg-black/70 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl max-h-60 overflow-y-auto z-50 divide-y divide-white/5">
            {results.map((result, idx) => (
              <li 
                key={idx}
                className="px-4 py-3 hover:bg-white/10 cursor-pointer text-xs text-gray-300 transition-colors first:rounded-t-xl last:rounded-b-xl"
                onClick={() => handleSelect(result)}
              >
                {result.display_name}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-end">
            <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Current Focus</p>
                <p className="text-xs text-white font-bold truncate max-w-[180px]">
                  {currentLocationName}
                </p>
            </div>
            <button 
              className="text-[10px] font-bold text-yellow-400 hover:text-yellow-300 transition-colors uppercase tracking-wide"
              onClick={() => onLocationSelect(35.4676, -97.5164, 'Oklahoma City')}
            >
              Recenter Map
            </button>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
