
import React from 'react';

interface PlaybackControlsProps {
  isPlaying: boolean;
  progress: number;
  onTogglePlay: () => void;
  onProgressChange: (val: number) => void;
  onReplay: () => void;
}

const PlaybackControls: React.FC<PlaybackControlsProps> = ({
  isPlaying,
  progress,
  onTogglePlay,
  onProgressChange,
  onReplay
}) => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-md">
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-3 flex items-center space-x-4">
        
        {/* Play/Pause Button */}
        <button 
          onClick={onTogglePlay}
          className="flex items-center justify-center w-10 h-10 bg-yellow-600 hover:bg-yellow-500 text-white rounded-full transition-colors shadow-[0_0_15px_rgba(202,138,4,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 border border-yellow-400/30"
        >
          {progress >= 1 && !isPlaying ? (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
               <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a1 1 0 01-1.5 1.322l-2-1.5a1 1 0 010-1.644l2-1.5A1 1 0 014 2zm10 10a1 1 0 011 1v2.101a1 1 0 01-1.5 1.322l-2-1.5a1 1 0 010-1.644l2-1.5a1 1 0 011.5 1.322V14a1 1 0 01-1 1z" clipRule="evenodd" />
               <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" /> 
               {/* Replay Icon Placeholder - just using refresh style logic */}
               <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a1 1 0 01-1.5 1.322l-2-1.5a1 1 0 010-1.644l2-1.5A1 1 0 014 2z" clipRule="evenodd" />
               <path d="M12.5 6a.5.5 0 01.5.5v3a.5.5 0 01-1 0v-3a.5.5 0 01.5-.5zM12.5 10.5a.5.5 0 01.5.5v3a.5.5 0 01-1 0v-3a.5.5 0 01.5-.5z" />
             </svg> 
          ) : isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>

        {/* Progress Bar */}
        <div className="flex-1">
          <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">
            <span>Start</span>
            <span>Archive Time</span>
            <span>End</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.001"
            value={progress}
            onChange={(e) => onProgressChange(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-yellow-500"
          />
        </div>
        
        {/* Reset / Replay specific button if needed, but handled in play logic */}
        <button onClick={onReplay} className="p-2 text-gray-500 hover:text-yellow-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        </button>

      </div>
    </div>
  );
};

export default PlaybackControls;
