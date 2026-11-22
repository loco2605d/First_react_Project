import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className='h-full w-80 shrink-0 relative overflow-hidden rounded-4xl'>
    <img className='h-full object-cover w-full' src={props.img} alt='This is a image'/>
    <div aria-hidden='true' className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent' />
    <Rightcardcontent id={props.id} intro={props.intro} color={props.color}tag={props.tag}/>
      
    </div>
  )
}

export default Rightcard
