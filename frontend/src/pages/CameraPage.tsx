
import { useState, useRef, useEffect } from 'react'
import Webcam from 'react-webcam'
import { Button } from '../components/ui';
import CameraIcon from '../components/ui/icons/CameraIcon';

export default function CameraPage() {
  const webcamRef = useRef(null);
  const [camDirection, setCameraDirection] = useState("user")

  const videoConstraints = {
    facingMode: camDirection,
    width: 720,
    height: 1280,
  };


  return (
    <>
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

                //   axios.post(`/api/food-images/`, formData, {
                //     method: 'POST',
                //     headers: {
                //       'Content-Type': 'multipart/form-data',
                //       Authorization: `Bearer ${token}`,
                //     },
                //   }).then((res)=>{
                //     console.log(res.data, res.data.is_safe)
                //     if (res.data.is_safe) {
                //       navigate("/positive")
                //     } else {
                //       navigate("/negative")
                //     }
                //   }).catch(()=>{
                //     navigate("/negative")
                //   })
              })
          }}
        >
          <CameraIcon />
        </Button>
      </div>
    </>
  )
}
