import { Button } from '../components/ui';
import PauseIcon from '../components/ui/icons/PauseIcon';
import PlayIcon from '../components/ui/icons/PlayIcon';
import XMarkIcon from '../components/ui/icons/XMarkIcon';
import { useState } from 'react';

export default function VoicePage() {
  const [isListening, setIsListening] = useState(true);

  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='flex justify-around w-full absolute bottom-32'>
        <Button
          intent='light/dark'
          shape='circle'
          className='w-16 h-16'
          onPress={() => {
            setIsListening(!isListening);
          }}
        >
          {isListening ? <PauseIcon /> : <PlayIcon />}
        </Button>
        <Button intent='danger' shape='circle' className='w-16 h-16'>
          <XMarkIcon />
        </Button>
      </div>
    </div>
  );
}
