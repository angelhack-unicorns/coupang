import { useState, useEffect, useRef } from 'react';
import { Button } from '../components/ui';
import PauseIcon from '../components/ui/icons/PauseIcon';
import PlayIcon from '../components/ui/icons/PlayIcon';
import XMarkIcon from '../components/ui/icons/XMarkIcon';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';

interface BouncingDotsProps {
  audioData: Uint8Array;
}

const BouncingDots: React.FC<BouncingDotsProps> = ({ audioData }) => {
  return (
    <div className='flex items-center space-x-3'>
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className='w-3 h-3 bg-gray-400 rounded-full transition-all duration-75 ease-in-out'
          style={{
            opacity: 0.3 + audioData[i] / 256,
          }}
        />
      ))}
    </div>
  );
};

export default function VoicePage() {
  const [isListening, setIsListening] = useState(false);
  const [audioData, setAudioData] = useState<Uint8Array>(new Uint8Array(4));
  const analyzerRef = useRef<AnalyserNode | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (isListening) {
      listen()

    } else {
      stop()
    }
    // return () => stop(); //stoplistening
  }, [isListening]);


  const listen = async () => {
    
    await SpeechRecognition.requestPermissions();

    await SpeechRecognition.start({
      language: "en-US",
      maxResults: 2,
      prompt: "Say something",
      partialResults: true,
      popup: true,
    });
    
    SpeechRecognition.addListener('partialResults', (result: any) => { 
      const transcribedText = result.transcriptions[0];
      console.log('Transcribed text:', transcribedText);
    });

  }


  const stop = async () => {
    await SpeechRecognition.stop();
  }

  const updateAudioData = () => {
    if (analyzerRef.current) {
      const dataArray = new Uint8Array(analyzerRef.current.frequencyBinCount);
      analyzerRef.current.getByteFrequencyData(dataArray);
      setAudioData(dataArray.slice(0, 4));
      animationRef.current = requestAnimationFrame(updateAudioData);
    }
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
        <BouncingDots audioData={audioData} />
        <Button intent='danger' shape='circle' className='w-16 h-16'>
          <XMarkIcon />
        </Button>
      </div>
    </div>
  );
}
