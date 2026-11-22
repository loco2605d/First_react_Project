import { ArrowRight } from 'lucide-react'

const Rightcardcontent = (props) => {
  return (
      <div className='absolute top-0 left-0 h-full  p-6 flex flex-col justify-between w-full'>
        <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-semibold '>{props.id+1}</h2>
        <div> 
            <p className='text-lg leading-normal font-medium text-white drop-shadow-md mb-4'>{props.intro}</p>
        
        <div className='flex justify-between'>
            <button style={{backgroundColor:props.color}} className='bg-blue-600 text-white font-medium px-7 py-3 rounded-full'>{props.tag}</button>

            <button className='bg-blue-600 text-white font-medium px-7 py-3 rounded-full '><ArrowRight size={25} strokeWidth={2.5} /></button>
        </div>
        </div>
    </div>
  )
}

export default Rightcardcontent
