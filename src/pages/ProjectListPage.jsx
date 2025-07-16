import axios from "axios";
import { useEffect, useState } from "react";

import Loader from "../components/Loader";


const BASE_URL = "https://project-management-api-4641927fee65.herokuapp.com"

function ProjectListPage() {

    const [projects, setProjects] = useState(null)

    useEffect(() => {
        axios.get(BASE_URL + "/projects")
            .then(response => {
                setProjects(response.data)
            })
            .catch(e => console.log("Error getting projects from the API...", e));
    }, [])

    if (projects === null) {
        return <Loader />
    }

    return (
        <div>
            <h1>Number of projects: {projects.length} </h1>

            {projects.map((projectObj) => {
                return (
                    <div className="card" key={projectObj.id}>
                        <h3>{projectObj.title}</h3>
                        <p>{projectObj.description}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default ProjectListPage;