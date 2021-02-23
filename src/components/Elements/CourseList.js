import React from 'react';
import Course from "./Course";
function CourseList(props) {
    const courses = [
        {desc: 'Build Your First Application' , name: 'Codeigniter'},
        {desc: 'Build Your First Application' , name: 'Codeigniter'},
        {desc: 'Build Your First Application' , name: 'Codeigniter'},
        {desc: 'Build Your First Application' , name: 'Codeigniter'},
    ]
    return (
        <div className={'fadeInRight mt-3  animated '}>
            <p className="h4 mb-3 mt-md-5 mt-0 font-weight-bold">
                Course In Progress
            </p>
            <div className="w-100 mb-5">
                {courses.map((c,i)=>(
                    <Course key={i} desc={c.desc} name={c.name} />
                ))}
            </div>
        </div>
    );
}


export default CourseList;
