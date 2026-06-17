"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fallbackImage =
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2200&q=85";

export function HeroBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  const requestPlayback = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    void video.play().catch(() => {
      setVideoReady(false);
    });
  };

  useEffect(() => {
    requestPlayback();
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <motion.div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          videoReady && !videoFailed ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: `url('${fallbackImage}')` }}
      />
      {!videoFailed ? (
        <motion.video
          ref={videoRef}
          className="absolute inset-0 size-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: videoReady ? 1 : 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={fallbackImage}
          onCanPlay={requestPlayback}
          onPlaying={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </motion.video>
      ) : null}
    </div>
  );
}
