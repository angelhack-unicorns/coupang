
import { useState, useRef, useEffect } from 'react'
import Webcam from 'react-webcam'
import { Button } from '../components/ui';
import CameraIcon from '../components/ui/icons/CameraIcon';
import { useNavigate } from 'react-router-dom';
import XMarkIcon from '../components/ui/icons/XMarkIcon';
import CoupangLogoImage from '../components/VoiceNav';
import { useSubmitUserVideo } from '../api/fetch-scraper-data';
import AudioPlaceholder from '../components/ui/audioPlaceholder';
import AudioRecommendations from './AudioRecommendations';
import Spinner from '../components/ui/spinner';
import CartContainerSkeleton from '../components/CartContainerSkeleton';


export default function CameraPage() {
  const webcamRef = useRef(null);
  const [camDirection, setCameraDirection] = useState("environment")
  const navigate = useNavigate()
  const submitImage = useSubmitUserVideo();
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(true);

  const [data,setData] = useState()
  const [file, setFile] = useState()
  const videoConstraints = {
    facingMode: camDirection,
    width: 260,
    height: 260,
  };

  return (
    <>
      <div className='grid grid-cols-3'>

        <button onClick={() => navigate("/")} className="ml-5">
          <XMarkIcon className='' />
        </button>
        <CoupangLogoImage />
      </div>

      {isLoading ? 
      <CartContainerSkeleton/> :
      isRecording || !data ?
      <Webcam style={{ borderRadius: '0%', minHeight:"420px" }} audio={false} ref={webcamRef} videoConstraints={videoConstraints}></Webcam>
        :
        <AudioRecommendations items={data.items}/>
    }
      
      <div className='flex flex-col items-center justify-center w-full absolute bottom-32'>
        <Button
          shape='circle'
          className='w-16 h-16 bg-[#3369FD]'
          onPress={() => {
            if (isRecording) {
              const imageSrc = webcamRef.current.getScreenshot();
              setIsRecording(false)
              setIsLoading(true);
              fetch(imageSrc)
                .then(res => {
                  return res.blob()}
                )
                .then(async blob => {
                  const file = new File([blob], 'dot.png', blob)
                 
                  try {
                    await submitImage.mutateAsync(file).then((data)=> {
                      console.log(data)
                      setData(data)
                  });
                    console.log(submitImage, submitImage.data);
                  } catch (error) {
                    console.error('Error submitting message:', error);
                  } finally {
                    setIsLoading(false);
                  }
                  // const formData = new FormData();
                  // formData.append('imagefile', file);
                  //send the img to server
                })
            } else {
              setIsRecording(true)
            }
          }}
        >
            {isLoading ? (
              // @ts-ignore
              // <l-mirage size='60' speed='2.5' color='white'></l-mirage>
              <Spinner />
             ) : 
              <CameraIcon />
          }
        </Button>
      </div>
    </>
  )
}




// function base64ToBlob(base64Data, contentType) {
//   // Decoding base64 string
//   const byteCharacters = atob(base64Data);
//   const byteArrays = [];

//   for (let offset = 0; offset < byteCharacters.length; offset += 512) {
//     const slice = byteCharacters.slice(offset, offset + 512);
//     const byteNumbers = new Array(slice.length);

//     for (let i = 0; i < slice.length; i++) {
//       byteNumbers[i] = slice.charCodeAt(i);
//     }

//     const byteArray = new Uint8Array(byteNumbers);
//     byteArrays.push(byteArray);
//   }
//   console.log("byteArrays is", byteArrays);
  
//   // Creating a blob from the binary data
//   return new Blob(byteArrays, { type: contentType });
// }

// function base64ToFile(base64Data, filename, contentType) {
//   const blob = base64ToBlob(base64Data, contentType);
//   // Creating a file from the blob
//   const file = new File([blob], 'dot.png', blob)
//   console.log("102 file:",file);
  
//   return new File([blob], filename, { type: contentType });
// }