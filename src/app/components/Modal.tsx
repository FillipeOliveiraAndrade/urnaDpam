'use client'

import React, { useEffect, useRef } from "react";

export default function Modal() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };


  return (
    <div style={{
        position: 'absolute',
        top: '200px',
        left: '35%',
        padding: '50px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1 style={{ color: 'green' }}>Voto Confirmado</h1>
      <audio ref={audioRef} src="audioUrna.mp3" autoPlay />
    </div>
  );
}
