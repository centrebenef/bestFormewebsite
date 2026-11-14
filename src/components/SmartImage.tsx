import { useState } from 'react';
import { Dumbbell } from 'lucide-react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fallbackTitle?: string;
}

export function SmartImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fallbackTitle = 'BEST FORME',
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#1C1C1C] via-[#151515] to-[#101010] text-[#BDBDBD] p-6 text-center ${className}`}
      >
        <Dumbbell className="w-8 h-8 text-[#FF5A1F] mb-2" aria-hidden="true" />
        <span className="font-display text-sm uppercase tracking-wider text-white/80">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
