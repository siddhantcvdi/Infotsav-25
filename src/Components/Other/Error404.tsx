
import { ArrowLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-screen relative flex items-center justify-center'>
      <button
        className='absolute top-6 left-6 px-4 py-2 cursor-pointer justify-center items-center text-white rounded shadow hover:bg-neutral-100/5 transition duration-200 z-10 flex gap-2'
        onClick={() => navigate('/')}
      >
        <ArrowLeftIcon size={20}/>
        <span>
            Back to Safe Zone
        </span>
      </button>
      <img src="/assets/Images/404.svg" alt="404 Not Found" className='w-full object-cover' />
    </div>
  )
}

export default Error404