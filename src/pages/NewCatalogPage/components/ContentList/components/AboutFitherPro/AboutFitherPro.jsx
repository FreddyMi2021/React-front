import React, { useRef, useState } from 'react';
import Chevron from '../Chevron/Chevron';
export const AboutFitherPro = () => {
    const [active, setActive] = useState("")
    const [height, setHeight] = useState("0px")
    const [rotate, setRotate] = useState("accordion_icon")
    const content = useRef(null);

    function toggleAccordion(){
        setActive(active === "" ? "active" : "")
        setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`)
        setRotate(active === "active" ? "accordion_icon" : "accordion_icon rotate")
        // console.log(content.current.scrollHeight)
    }
    return(
        <>
            <div className=" flex-grow p-4">
                <div className="accordion_section bg-gray-50 rounded-sm shadow">
                    <div className="accordion  bg-gray-50 cursor-pointer"
                        onClick={toggleAccordion}
                    >
                        <div className="accordion_title text-center">
                            <div className="text-center font-bold text-md text-gray-600">
                                More informations about Fighter Program
                            </div>
                        </div>
                        <Chevron className={`${rotate}`} size={"1.5em"} color={"#7a7a7b"} position={"right"}/>
                    </div>
                    <div
                        ref={content}
                        style={{maxHeight:`${height}`}}
                        className="accordion_content">
                            
                        <div className='px-4 w-full justify-items-auto'>
                            <div className="py-4 border-t-2 border-gray-100">
                                <div className="w-full px-4 text-justify h-auto  rounded-r-lg text-gray-500 text-sm">
                                    <div className="pb-4">
                                        <p>
                                            Web development is one of the fastest-growing careers. With this self-paced program designed in Silicon Valley, students will learn the skills to become a Full Stack Web Developer. In as little as 12 months, students will be ready to create modern, robust web applications.
                                        </p>
                                    </div>
                                    <div className="pb-4">
                                        <p>
                                            The program has been designed to help busy individuals develop the skills they need to start their career as Full Stack Web Developer through a flexible online format.
                                        </p>
                                    </div>
                                    <div className="pb-4">
                                        <p>
                                            The curriculum is designed to teach people with little or no prior experience in web development, from those that want to switch careers to those looking for a more practical supplement to their education.
                                        </p>
                                    </div>
                                    <div className="pb-4">
                                        <p>
                                            Project-based, self-paced program.
                                        </p>
                                    </div>
                                    <div className="pb-4">
                                        <p>
                                            In this program, written in English, there are no lectures.
                                        </p>
                                    </div>
                                    <div className="pb-4">
                                        <p>
                                            Working on 80 different projects ranging from the fundamentals of C to building your own web App, the curriculum is extensive and in-depth.
                                            Projects come with a set of online resources to find the solution on how to complete tasks.
                                        </p>
                                    </div>
                                    <div className="pb-4">
                                        <p>
                                            Project-based learning is a proven alternative learning methodology to the traditional teacher-led lecture and memorization educational pedagogy. Benefits from project based learning include:
                                        </p>
                                        <div className="pl-8  pt-2">
                                            <ul className="list-disc">
                                                <li>Problem solving</li>
                                                <li>In-depth understanding</li>
                                                <li>Perseverance</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="pb-4">
                                        <p>
                                            Self-paced learning allows students to progress through the program on their terms.If students need to spend longer on a challenging concept, they have the freedom to do so without deadlines to meet.
                                            The majority of the projects are automatically reviewed on demand, so that students get granular feedback based on their code as frequently as requested.
                                        </p>
                                    </div>
                                    <div className="pb-4">
                                        <p>
                                            The pathway is designed to be done part-time and self-paced so students have the ability to continue working or continue their education while learning the skills needed to become a Full Stack Web Developer.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>                       
                    </div>
                </div>
            </div>

        </>
    )
}