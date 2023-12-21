import Contents from "./Contents"
type TList ={
    item: string,
}
const List = ({item}:  TList ) =>{
    return <li>{[item]}</li>;

};
const Contact = () => {
    return (
      <div className="text-white w-2/3 w-400 mx-auto mt-20">
        <div>
            <Contents content='contact'/>
        </div>
        <div className="w-5/6 w-400 mx-auto hidden md:block">
            <ul className="contact list-disc ml-3">
              <li className='font-bold '><List item= 'Phone'  /></li>
              <p>0972146317</p>
              <li className='font-bold mt-3'><List item= 'Email' /></li>
              <p>thutrangv28@gmail.com</p>
              <li className='font-bold mt-3'><List item= 'Adddress' /></li>
              <p>Đà Nẵng</p>
            </ul>
        </div>
  
      </div>
    )
  }
  
  export default Contact