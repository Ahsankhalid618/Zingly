'use client';

interface LoaderProps {
  message?: string;
}

export default function Loader({ message = 'Loading...' }: LoaderProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <div className="relative">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-800"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="animate-pulse w-4 h-4 bg-slate-800 rounded-full"></div>
        </div>
      </div>
      <p className="text-slate-600 text-center font-medium">{message}</p>
      <div className="flex space-x-1">
        <div className="animate-pulse bg-slate-300 rounded h-2 w-16"></div>
        <div className="animate-pulse bg-slate-300 rounded h-2 w-12 delay-75"></div>
        <div className="animate-pulse bg-slate-300 rounded h-2 w-20 delay-150"></div>
      </div>
    </div>
  );
}