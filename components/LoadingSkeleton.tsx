import React from 'react';

export const LoadingSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 animate-pulse">
      {/* Header Skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 bg-slate-200 rounded-lg"></div>
            <div className="h-6 w-32 bg-slate-200 rounded"></div>
          </div>
          <div className="hidden md:flex gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-4 w-20 bg-slate-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Skeleton */}
      <div className="min-h-screen flex items-center justify-center bg-slate-300">
        <div className="text-center px-4 w-full max-w-5xl mx-auto space-y-6">
          <div className="h-4 w-48 bg-slate-400 rounded mx-auto"></div>
          <div className="h-16 w-full max-w-2xl bg-slate-400 rounded mx-auto"></div>
          <div className="h-8 w-full max-w-xl bg-slate-400 rounded mx-auto"></div>
          <div className="flex gap-4 justify-center mt-8">
            <div className="h-12 w-48 bg-slate-400 rounded-full"></div>
            <div className="h-12 w-48 bg-slate-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="h-8 w-3/4 bg-slate-200 rounded"></div>
            <div className="h-4 w-full bg-slate-200 rounded"></div>
            <div className="h-4 w-full bg-slate-200 rounded"></div>
            <div className="h-4 w-2/3 bg-slate-200 rounded"></div>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-slate-200 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
