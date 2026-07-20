"use client";

import { useRef, useState, useCallback, useEffect } from "react";

interface VideoThumbnailProps {
  poster?: string;
  video?: string;
  alt: string;
  className?: string;
  fallbackGradient?: string;
  fallbackText?: string;
  playing?: boolean;
}

export const VideoThumbnail = ({
  poster,
  video,
  alt,
  className = "",
  fallbackGradient = "from-stone-800 to-stone-900",
  fallbackText,
  playing: externalPlaying,
}: VideoThumbnailProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [internalHover, setInternalHover] = useState(false);
  const [posterError, setPosterError] = useState(false);

  const isControlledExternally = externalPlaying !== undefined;
  const isActive = isControlledExternally ? externalPlaying : internalHover;

  useEffect(() => {
    if (!videoRef.current) return;
    if (isActive) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isActive]);

  const handleMouseEnter = useCallback(() => {
    if (!isControlledExternally) setInternalHover(true);
  }, [isControlledExternally]);

  const handleMouseLeave = useCallback(() => {
    if (!isControlledExternally) setInternalHover(false);
  }, [isControlledExternally]);

  const hasPoster = poster && !posterError;
  const hasVideo = !!video;

  return (
    <div
      role="img"
      aria-label={alt}
      className={`overflow-hidden ${className.includes('absolute') ? '' : 'relative'} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient}`} />

      {fallbackText && !hasPoster && (
        <div className="absolute inset-0 flex items-center justify-center text-white/5 font-display font-black text-4xl select-none uppercase tracking-tight">
          {fallbackText}
        </div>
      )}

      {poster && (
        <img
          src={poster}
          alt={alt}
          onError={() => setPosterError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hasPoster ? "opacity-100" : "opacity-0"
          } ${hasVideo && isActive ? "opacity-0" : ""}`}
        />
      )}

      {hasVideo && (
        <video
          ref={videoRef}
          src={video}
          muted
          playsInline
          loop
          preload="none"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
};
