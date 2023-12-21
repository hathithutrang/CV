import Contents from "./Contents"

const About = () =>{
    return(
        <div className="">
            <div className="About w-2/3 w-400 mx-auto ">
                <Contents content="About Me" />
            </div>
            <div className="w-2/3 w-400 mx-auto text-gray-500">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iure reiciendis hic ipsa tempore cum porro sed animi architecto quod, veritatis reprehenderit obcaecati maiores quidem dolores nemo repellendus quam! Odit.</p>
            </div>
        </div>
    )
}
export default About