import Contents from "./Contents"

const WorkEx = () =>{
    return(
        <div>
            <div className="w-2/3 w-400 mx-auto">
                <Contents content="Work Experience" />
            </div>
            <div>
                <div>
                    <div className="flex justify-between w-2/3 w-400 mx-auto text-gray-500">
                        <div>
                            <p><b>JOB TILLE</b></p>
                            <p><b>COMPANY NAME</b></p>
                        </div>
                        <div>
                            <p>2012-2015</p>
                        </div>
                    </div>
                </div>
                <div className="w-2/3 w-400 mx-auto text-gray-500 mt-2">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit magnam temporibus nemo sapiente id ipsa dicta nam necessitatibus, animi facilis, dolores optio quam corrupti obcaecati vero consectetur eius debitis dignissimos.</p>
                </div>
            </div>
            <div className="mt-4">
                <div>
                    <div className="flex justify-between w-2/3 w-400 mx-auto text-gray-500">
                        <div>
                            <p><b>JOB TILLE</b></p>
                            <p><b>COMPANY NAME</b></p>
                        </div>
                        <div>
                            <p>2012-2015</p>
                        </div>
                    </div>
                </div>
                <div className="w-2/3 w-400 mx-auto text-gray-500 mt-2">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit magnam temporibus nemo sapiente id ipsa dicta nam necessitatibus, animi facilis, dolores optio quam corrupti obcaecati vero consectetur eius debitis dignissimos.</p>
                </div>
            </div>
        </div>
    )
}
export default WorkEx