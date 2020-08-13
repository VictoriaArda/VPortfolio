  
import React, { useState, useEffect } from 'react';
import {Tabs, Tab, Grid, Cell} from "react-mdl";
import {RepoCard} from "./Card"
import API from "../utils/API";

export const Projects = (props) => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.getRepo().then(res=>{
      console.log(res)
      setProjects(res.data.data)
    })
  },[])

    return(
      <div>
          <Grid>
            <Cell col={12}>
            {projects.length > 0 ? projects.map((project, index) => 
              <RepoCard key={index} title={project.name} description={project.description}/>
          ) : <h2>Loading</h2>}
            </Cell>
          </Grid>
      </div>
    )
  }


export default Projects;