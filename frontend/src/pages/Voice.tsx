import { useState, useEffect } from 'react';
import { Button } from '../components/ui';
import PauseIcon from '../components/ui/icons/PauseIcon';
import PlayIcon from '../components/ui/icons/PlayIcon';
// import CameraComponent from '../components/CameraComponent';
import AudioPlaceholder from '../components/ui/audioPlaceholder';
import CartContainer from '../components/CartContainer';
import CartContainerSkeleton from '../components/CartContainerSkeleton';
import CoupangLogoImage from '../components/VoiceNav';
import { useSpeechRecognition } from '../api/useSpeechRecognition';
import { useSubmitUserMessage } from '../api/fetch-scraper-data';
import 'ldrs/mirage';
import XMarkIcon from '../components/ui/icons/XMarkIcon';

export default function VoicePage() {
  const [isListening, setIsListening] = useState(true);
  const [isCart, setIsCart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { text, startListening, stopListening, error } = useSpeechRecognition();
  const submitMessage = useSubmitUserMessage();

  useEffect(() => {
    if (isListening) {
      startListening();
    } else {
      stopListening();
    }
  }, [isListening, startListening, stopListening]);

  useEffect(() => {
    if (text.toLowerCase().includes('show cart')) {
      setIsCart(true);
    } else if (text.toLowerCase().includes('hide cart')) {
      setIsCart(false);
    }
  }, [text]);

  const toggleListening = async () => {
    if (isListening) {
      setIsLoading(true);
      try {
        await submitMessage.mutateAsync(text);
      } catch (error) {
        console.error('Error submitting message:', error);
      } finally {
        setIsLoading(false);
      }
    } else {
      startListening();
    }
    setIsListening(!isListening);
  };

  return (
    <>
      <div className='flex items-center justify-center'>
        <XMarkIcon className=''/>
        <CoupangLogoImage />
      </div>
      <div className='flex flex-col justify-between h-full bg-white'>
        {isListening ? (
          isCart ? (
            <CartContainer />
          ) : (
            <AudioPlaceholder />
          )
        ) : (
          <pre className='text-black p-4 overflow-auto max-h-[calc(100vh-200px)]'>
            {JSON.stringify(submitMessage.data, null, 2)}
          </pre>
        )}
        <div className='flex flex-col items-center justify-center w-full absolute bottom-32'>
          {error ? (
            <p className='text-red-500 mb-4 font-inter font-light'>{error}</p>
          ) : (
            <p className='text-black mb-4 font-inter font-light'>{text}</p>
          )}
          <Button
            shape='circle'
            className='w-16 h-16 bg-[#3369FD]'
            onPress={toggleListening}
          >
            {isLoading ? (
              // @ts-ignore
              <l-mirage size='60' speed='2.5' color='white'></l-mirage>
            ) : isListening ? (
              <PauseIcon />
            ) : (
              <PlayIcon />
            )}
          </Button>
        </div>
      </div>
    </>
  );
}
