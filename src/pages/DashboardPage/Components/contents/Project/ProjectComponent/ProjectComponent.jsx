import React, {useState, useEffect} from 'react';
import Axios from "axios";
import ProjectCard from '../ProjectCard/ProjectCard';

const ProjectComponent = (props) => {
  const [project, setProject] = useState(null)
  const getStudentProject = () => {
    if(props.studentId !== null && props.studentId !== undefined && project === null){
      Axios.get(
        'https://school-api.sayna.io/hex/students/' +
          props.studentId +
          '/projects',
        {
          headers: {
            uid: props.uid,
            client: props.client,
            'access-token': props.access_token,
          },
        }
      ).then((res) => {
          if(res.data.errors === undefined && project === null){
              setProject(res.data.items)
          }
      })
    }
  }

  useEffect(() => {
    getStudentProject();
  })
  if(project !== null) props.count(project.length)

  return (
    <>
      <div className='w-full py-4  border-gray-500'>
        
            {
              project !== null ? (
                <div className='w-full px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                  project.map( projects => (
                    <ProjectCard key={ projects.id } completion={projects.completion} name={projects.name}/>
                  ) )
                }
                </div>
              ) : (
                <div className="w-full text-center">
                  <span className="pl-5 uppercase text-gray-500 font-bold">No projects</span>
                </div>
              )
            }
      </div>
      
    </>
  );
}

export default ProjectComponent;
