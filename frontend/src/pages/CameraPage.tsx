
import { useState, useRef, useEffect } from 'react'
import Webcam from 'react-webcam'
import { Button } from '../components/ui';
import CameraIcon from '../components/ui/icons/CameraIcon';
import { useNavigate } from 'react-router-dom';
import XMarkIcon from '../components/ui/icons/XMarkIcon';
import CoupangLogoImage from '../components/VoiceNav';


export default function CameraPage() {
  const webcamRef = useRef(null);
  const [camDirection, setCameraDirection] = useState("user")
  const navigate = useNavigate()

  const videoConstraints = {
    facingMode: camDirection,
    width: 720,
    height: 1280,
  };


  return (
    <>
      <div className='grid grid-cols-3'>

        <button onClick={() => navigate("/")} className="ml-5">
          <XMarkIcon className='' />
        </button>
        <CoupangLogoImage />
      </div>
      <Webcam style={{ borderRadius: '0%' }} audio={false} ref={webcamRef} videoConstraints={videoConstraints}></Webcam>
      <div className='flex flex-col items-center justify-center w-full absolute bottom-32'>
        <Button
          shape='circle'
          className='w-16 h-16 bg-[#3369FD]'
          onPress={() => {
            const imageSrc = webcamRef.current.getScreenshot();
            fetch(imageSrc)
              .then(res => res.blob())
              .then(async blob => {
                const file = new File([blob], 'dot.png', blob)
                console.log(file);

                const formData = new FormData();
                formData.append('imagefile', file);
                //send the img to server
              })
          }}
        >
          <CameraIcon />
        </Button>
      </div>
    </>
  )
}
