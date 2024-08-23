//@ts-nocheck

import { useState, useEffect, useRef } from 'react';
import { Button } from '../components/ui';
import PauseIcon from '../components/ui/icons/PauseIcon';
import PlayIcon from '../components/ui/icons/PlayIcon';
import XMarkIcon from '../components/ui/icons/XMarkIcon';

const OscillatingDots = ({ audioData }) => {
  return (
    <div className='flex space-x-3'>
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className='w-3 h-3 bg-gray-400 rounded-full transition-all duration-75 ease-in-out'
          style={{
            transform: `scale(${1 + audioData[i] / 128})`,
            opacity: 0.3 + audioData[i] / 256,
          }}
        />
      ))}
    </div>
  );
};

export default function VoicePage() {
  const [isListening, setIsListening] = useState(false);
  const [audioData, setAudioData] = useState(new Uint8Array(4));
  const analyzerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (isListening) {
      startListening();
    } else {
      stopListening();
    }
    return () => stopListening();
  }, [isListening]);

  const startListening = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      const source = audioContext.createMediaStreamSource(stream);
      const analyzer = audioContext.createAnalyser();
      analyzer.fftSize = 32;
      source.connect(analyzer);
      analyzerRef.current = analyzer;
      updateAudioData();
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopListening = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    if (analyzerRef.current) {
      analyzerRef.current.disconnect();
      analyzerRef.current = null;
    }
  };

  const updateAudioData = () => {
    const dataArray = new Uint8Array(analyzerRef.current.frequencyBinCount);
    analyzerRef.current.getByteFrequencyData(dataArray);
    setAudioData(dataArray.slice(0, 4));
    animationRef.current = requestAnimationFrame(updateAudioData);
  };

  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='flex justify-around w-full absolute bottom-32'>
        <Button
          intent='light/dark'
          shape='circle'
          className='w-16 h-16'
          onPress={() => setIsListening(!isListening)}
        >
          {isListening ? <PauseIcon /> : <PlayIcon />}
        </Button>
        <OscillatingDots audioData={audioData} />
        <Button intent='danger' shape='circle' className='w-16 h-16'>
          <XMarkIcon />
        </Button>
      </div>
    </div>
  );
}
