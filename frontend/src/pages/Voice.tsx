import { useState, useEffect } from 'react';
import { Button } from '../components/ui';
import PauseIcon from '../components/ui/icons/PauseIcon';
import PlayIcon from '../components/ui/icons/PlayIcon';
// import CameraComponent from '../components/CameraComponent';
import AudioPlaceholder from '../components/ui/audioPlaceholder';
import CartContainer from '../components/CartContainer';
import CoupangLogoImage from '../components/VoiceNav';
import { useSpeechRecognition } from '../api/useSpeechRecognition';
import CartContainerSkeleton from '../components/CartContainerSkeleton';

export default function VoicePage() {
  const [isListening, setIsListening] = useState(true);
  const [isCart, setIsCart] = useState(false);
  const { text, startListening, stopListening, isLoading, error } =
    useSpeechRecognition();

  useEffect(() => {
    if (isListening) {
      startListening();
    } else {
      stopListening();
    }
  }, [isListening, startListening, stopListening]);

  useEffect(() => {
    // Simple logic to toggle cart view based on recognized text
    if (text.toLowerCase().includes('show cart')) {
      setIsCart(true);
    } else if (text.toLowerCase().includes('hide cart')) {
      setIsCart(false);
    }
  }, [text]);

  const toggleListening = () => setIsListening(!isListening);

  return (
    <>
      <CoupangLogoImage />
      <div className='flex flex-col justify-between h-full bg-white'>
        {isListening ? (
          isCart ? (
            <CartContainer />
          ) : (
            <AudioPlaceholder />
          )
        ) : (
          <CartContainerSkeleton />
          // <CameraComponent />
        )}
        <div className='flex flex-col items-center justify-center w-full absolute bottom-32'>
          {isLoading ? (
            <p className='text-black mb-4 font-inter font-light'>
              Initializing...
            </p>
          ) : error ? (
            <p className='text-red-500 mb-4 font-inter font-light'>{error}</p>
          ) : (
            <p className='text-black mb-4 font-inter font-light'>{text}</p>
          )}
          <Button
            shape='circle'
            className='w-16 h-16 bg-[#3369FD]'
            onPress={toggleListening}
          >
            {isListening ? <PauseIcon /> : <PlayIcon />}
          </Button>
        </div>
      </div>
    </>
  );
}
