import { Button } from '../components/ui';
import PauseIcon from '../components/ui/icons/PauseIcon';
import XMarkIcon from '../components/ui/icons/XMarkIcon';

export default function VoicePage() {
  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='flex justify-around w-full absolute bottom-32'>
        <Button intent='light/dark' shape='circle' className='w-16 h-16'>
          <PauseIcon />
        </Button>
        <Button intent='danger' shape='circle' className='w-16 h-16'>
          <XMarkIcon />
        </Button>
      </div>
    </div>
  );
}
