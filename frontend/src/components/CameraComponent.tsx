
import { useState, useRef } from 'react'
import Webcam from 'react-webcam'

export default function CameraComponent() {
  const webcamRef = useRef(null);
  const [camDirection, setCameraDirection] = useState("user")
  const [isRecording, setIsRecording] = useState(false)

  const videoConstraints = {
    facingMode: camDirection,
    width: 720,
    height: 1280,
  };


  return (
    <div className='flex flex-col'>
      <Webcam style={{ borderRadius: '0%' }} audio={false} ref={webcamRef} videoConstraints={videoConstraints}></Webcam>
      <button
        className='btn bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'
        onClick={() => {
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
        }}>
        take photo
      </button>

    </div>
  )
}
