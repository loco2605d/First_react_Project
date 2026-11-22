import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div
      id="right"
      className="flex flex-nowrap gap-5 overflow-x-auto p-2 h-full flex-1 min-w-0"
    >
      {props.users.map((elem, idx) => (
        <Rightcard
          key={idx}
          intro={elem.intro}
          color={elem.color}
          id={idx}
          img={elem.img}
          tag={elem.tag}
        />
      ))}
    </div>
  )
}

export default Rightcontent
