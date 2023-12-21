import Contents from "./Contents"

const Education = () => {
    return(
        <div>
            <div className="w-2/3 w-400 mx-auto">
                <Contents content="education" />
            </div>
            <div>
                <div>
                    <div className="flex justify-between w-2/3 w-400 mx-auto text-gray-500 flex-wrap">
                        <div>
                           <p className="upercase"><b>BACHELOR OF DESIGN</b></p> 
                           <p><i>Unisersity/Collage/Institute</i></p>
                            
                        </div>
                        <div className="">
                            <p>2012-2015</p>
                        </div>
                    </div>
                    
                    <div>
                    <div className="flex justify-between w-2/3 w-400 mx-auto text-gray-500 mt-5 flex-wrap">
                        <div>
                           <p className="upercase"><b>BACHELOR OF DESIGN</b></p> 
                           <p><i>Unisersity/Collage/Institute</i></p>
                            
                        </div>
                        <div className="">
                            <p>2012-2015</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Education