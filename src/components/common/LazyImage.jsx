import { useState } from "react";

export default function LazyImage({ src, alt, className = "", placeholder = "..." }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder / Skeleton */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-surface/60 animate-pulse flex items-center justify-center text-text-secondary text-sm">
          {placeholder}
        </div>
      )}

      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 bg-surface/60 flex items-center justify-center text-text-secondary text-xs">
          Image unavailable
        </div>
      )}

      {/* Actual image */}
      {src && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}