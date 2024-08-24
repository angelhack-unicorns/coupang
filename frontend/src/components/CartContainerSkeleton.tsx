export default function CartContainerSkeleton() {
  return (
    <>
      <div className='flex flex-col gap-0.5 max-h-[300px] overflow-hidden'>
        <div className='w-full h-[13em] flex p-5'>
          <div className="w-[15em] bg-slate-300 animate-pulse"></div>
          <div className='flex flex-col px-5 w-full gap-4'>
            <div className='max-w-[100%] h-[3em] bg-slate-200 animate-pulse'></div>
            <div className='max-w-[100%] h-[3em] bg-slate-200 animate-pulse'></div>
            <div className='max-w-[100%] h-[3em] bg-slate-200 animate-pulse'></div>
          </div>
        </div>
        <div className='w-full h-[13em] flex p-5'>
          <div className="w-[15em] bg-slate-300 animate-pulse"></div>
          <div className='flex flex-col px-5 w-full gap-4'>
            <div className='max-w-[100%] h-[3em] bg-slate-200 animate-pulse'></div>
            <div className='max-w-[100%] h-[3em] bg-slate-200 animate-pulse'></div>
            <div className='max-w-[100%] h-[3em] bg-slate-200 animate-pulse'></div>
          </div>
        </div>
      </div>
    </>
  );
}
