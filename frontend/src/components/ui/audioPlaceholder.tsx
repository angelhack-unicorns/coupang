
function AudioPlaceholder() {
  return (
    <div className='bg-gradient-to-b from-[#45D9FA] to-[#88CC2E] w-full h-96 flex flex-col items-center justify-center rounded-lg'>
        {/* <BackButton className='mr-auto ml-2' /> */}
        {/* <CameraIcon className='mr-2 ml-auto' stroke="white" /> */}
        {/* <CameraIcon className='mr-2 ml-auto' stroke='black' /> */}

      <div className='relative w-[400px] h-[300px]'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-[280px] h-[280px] rounded-full border border-white border-[1px] bg-transparent'></div>
        </div>

        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-[184px] h-[184px] rounded-full border border-white border-[1px] bg-transparent'></div>
        </div>

        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-[130px] h-[130px] rounded-full border border-white border-[1px] bg-white'></div>
        </div>
      </div>
    </div>
  );
}

export default AudioPlaceholder;
