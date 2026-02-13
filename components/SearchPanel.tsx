import React, { useState, useEffect } from 'react';
import { SearchResult } from '../types';
import { searchLocation } from '../services/weatherService';

interface SearchPanelProps {
  onLocationSelect: (lat: number, lon: number, name: string) => void;
  currentLocationName: string;
}

const SearchPanel: React.FC<SearchPanelProps> = ({ onLocationSelect, currentLocationName }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="absolute top-4 left-4 z-50 w-full max-w-sm">
      <div className="bg-black/60 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl p-4">
        <h1 className="text-xl font-bold text-white mb-1 tracking-tight">StormWatch 3D</h1>
        <p className="text-xs text-gray-400 mb-4 font-mono">LIVE TORNADO TRACKER</p>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input 
            type="text" 
            className="block w-full p-3 pl-10 text-sm text-white border border-gray-600 rounded-lg bg-gray-800/50 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 transition-colors" 
            placeholder="Search city, state, or coordinates..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {isSearching && (
            <div className="absolute right-3 top-3">
              <div className="animate-spin h-4 w-4 border-2 border-blue-500 rounded-full border-t-transparent"></div>
            </div>
          )}
        </div>

        {/* Results Dropdown */}
        {isOpen && results.length > 0 && (
          <ul className="absolute left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-xl max-h-60 overflow-y-auto">
            {results.map((result, idx) => (
              <li 
                key={idx}
                className="px-4 py-3 hover:bg-gray-800 cursor-pointer text-sm text-gray-200 border-b border-gray-800 last:border-0"
                onClick={() => handleSelect(result)}
              >
                {result.display_name}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-xs text-gray-300 font-medium tracking-wide">
                  {currentLocationName}
                </span>
            </div>
            <button 
              className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
              onClick={() => onLocationSelect(35.4676, -97.5164, 'Oklahoma City')}
            >
              Reset View
            </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
