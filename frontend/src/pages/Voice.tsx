import { useState, useEffect } from 'react';
import { Button } from '../components/ui';
import PauseIcon from '../components/ui/icons/PauseIcon';
import PlayIcon from '../components/ui/icons/PlayIcon';
import XMarkIcon from '../components/ui/icons/XMarkIcon';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';
import VoiceNav from '../components/VoiceNav';
import CameraComponent from '../components/CameraComponent';
import AudioPlaceholder from '../components/ui/audioPlaceholder';


export default function VoicePage() {
  const [isListening, setIsListening] = useState(true);
  const [text, setText] = useState<string>()

  useEffect(() => {
    if (isListening) {
      console.log("is listening");
      listen();
    } else {
      stop();
    }
    // return () => stop(); //stoplistening
  }, [isListening]);

  const listen = async () => {
    await SpeechRecognition.requestPermissions();

    await SpeechRecognition.start({
      language: 'en-US',
      maxResults: 2,
      prompt: 'Say something',
      partialResults: true,
      popup: true,
    });

    SpeechRecognition.addListener('partialResults', (result: any) => {
      const transcribedText = result.transcriptions[0];
      setText(transcribedText)
      console.log('Transcribed text:', transcribedText);
    });
  };

  const stop = async () => {
    await SpeechRecognition.stop();
  };

 

  return (
    <>
      <VoiceNav />
      <div className='flex flex-col justify-between h-full bg-white'>
        {isListening ?
          <>
            <AudioPlaceholder />
            <div className='flex justify-around w-full items-center absolute bottom-32'>
              <Button
                shape='circle'
                className='w-16 h-16 bg-[#3369FD]'
                onPress={() => setIsListening(!isListening)}
              >
                {isListening ? <PauseIcon /> : <PlayIcon />}
              </Button>
              <div>
                <text className='text-black mt-18 font-inter font-light'>Listening..</text>
              </div>
              <Button intent='danger' shape='circle' className='w-16 h-16'>
                <XMarkIcon/>
              </Button>
            </div>
          </>
          :
          <CameraComponent />
        }
      </div>
    </>
  );
}




// const updateAudioData = () => {
//   if (analyzerRef.current) {
//     const dataArray = new Uint8Array(analyzerRef.current.frequencyBinCount);
//     analyzerRef.current.getByteFrequencyData(dataArray);
//     setAudioData(dataArray.slice(0, 4));
//     animationRef.current = requestAnimationFrame(updateAudioData);
//   }
// };


// const BouncingDots: React.FC<BouncingDotsProps> = ({ audioData }) => {
//   return (
//     <div className='flex items-center space-x-3'>
//       {[0, 1, 2, 3].map((i) => (
//         <div
//           key={i}
//           className='w-3 h-3 bg-gray-400 rounded-full transition-all duration-75 ease-in-out'
//           style={{
//             opacity: 0.3 + audioData[i] / 256,
//           }}
//         />
//       ))}
//     </div>
//   );
// };
