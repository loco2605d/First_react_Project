import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'
const Page1content = (props) => {
  return (
    <div className='pt4 pb-13 flex items-center gap-0 px-8 h-[88vh]'>
        <Leftcontent />
      <Rightcontent users={props.users}/>
      
    </div>
  )
}

export default Page1content
