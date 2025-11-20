import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SearchModal } from './SearchModal';

export const SearchButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-32 right-6 z-40 w-12 h-12 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Search"
      >
        <Search className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform" />
      </button>
      <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
