import Contents from "./Contents"

type TList ={
    item: string,
}
const List = ({item}:  TList ) =>{
    return <li>{[item]}</li>;

};
const Personal = () => {
  return (
    <div className="text-white w-2/3 w-400 mx-auto">
      <div className="">
        <Contents content="personal skill"/>
      </div>
      <div className="w-200 w-400 mx-auto">
        <ul className="skill list-disc ml-5">
            <List item='Public Speaking'/>
            <List item='Financial Management'/>
            <List item='Creative Idea'/>
            <List item='Project Manager'/>
            <List item='Directer'/>
         </ul>
      </div>
    </div>
  )
}

export default Personal