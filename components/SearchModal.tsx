import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const searchableContent = [
    { title: 'Về Chúng Tôi', href: '#about', keywords: 'giới thiệu công ty tam bảo phật pháp tăng' },
    { title: 'Tầm Nhìn & Sứ Mệnh', href: '#vision', keywords: 'tầm nhìn sứ mệnh mục tiêu' },
    { title: 'Hệ Sinh Thái', href: '#ecosystem', keywords: 'đầu tư giáo dục thiện nguyện investments academy charity' },
    { title: 'Giá Trị Cốt Lõi', href: '#values', keywords: 'đạo đức chính trực công nghệ yêu thương' },
    { title: 'Liên Hệ', href: '#contact', keywords: 'liên hệ địa chỉ email phone zalo' },
  ];

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchableContent.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.keywords.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered.map((item) => item.title));
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleResultClick = (title: string) => {
    const item = searchableContent.find((i) => i.title === title);
    if (item) {
      window.location.hash = item.href;
      onClose();
      setQuery('');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-[fadeInUp_0.3s_ease-out]">
        {/* Search Input */}
        <div className="flex items-center gap-3 p-4 border-b border-slate-200 dark:border-slate-700">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm..."
            className="flex-1 bg-transparent outline-none text-slate-900 dark:text-white placeholder-slate-400"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto">
          {query.trim() && results.length === 0 && (
            <div className="p-8 text-center text-slate-500">
              Không tìm thấy kết quả cho "{query}"
            </div>
          )}
          {results.length > 0 && (
            <div className="p-2">
              {results.map((result, idx) => (
                <button
                  key={idx}
                  onClick={() => handleResultClick(result)}
                  className="w-full text-left p-4 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Search className="w-4 h-4 text-tambao-green" />
                    <span className="text-slate-900 dark:text-white">{result}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
          {!query.trim() && (
            <div className="p-8 text-center text-slate-500">
              Nhập từ khóa để tìm kiếm...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
