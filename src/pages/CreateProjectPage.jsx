import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { BASE_URL } from "../config/api"


function CreateProjectPage() {

    const [title, setTitle] = useState("")
    const [decription, setDecription] = useState("")

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()

        const newProject = {
            title: title,
            description: decription
        }

        axios.post(`${BASE_URL}/projects`, newProject)
            .then(() => {
                navigate("/projects")
            })
            .catch(e => console.log("Error creating a new project...", e))
    }


    return (
        <div className="CreateProjectPage">
            <h3>Add Project</h3>

            <form onSubmit={handleSubmit}>

                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        placeholder="enter the title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </label>

                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        placeholder="enter the title"
                        value={decription}
                        onChange={(e) => { setDecription(e.target.value) }}
                    />
                </label>

                <button>Create</button>
            </form>
        </div>
    )
}

export default CreateProjectPage