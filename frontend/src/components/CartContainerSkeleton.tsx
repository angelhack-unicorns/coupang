export default function CartContainerSkeleton() {
  return (
    <>
      <p>Hello world, I'm loading...</p>
      <div className='flex mt-4 mb-2 w-full px-2 text-black justify-between'>
        <div className='animate-pulse mr-auto ml-2' />
        <div className='animate-pulse mr-2 ml-auto' />
      </div>
      <div className='h-96 overflow-auto space-y-2 animate-pulse'></div>
    </>
  );
}
