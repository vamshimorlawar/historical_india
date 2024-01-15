import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex justify-center items-center flex-col h-full'>
      <p>Could not find requested resource</p>
      <div>
      Click here to go <Link href="/" className='text-blue-400 underline'>Home</Link>
      </div>
      
    </div>
  )
}