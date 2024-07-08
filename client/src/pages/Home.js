import React from "react"
import { useNavigate } from "react-router-dom"
import style from "../App.css"



export default function Home () {

    const navigate = useNavigate();

    return (
        <>
            <h2>CAD</h2>

            <div className="leftContainer">
                <button className="ArchiveBotton" onClick={() => navigate("/scheduale")}>Scheduale</button>
                <button className="ArchiveBotton" >Team Members Clock</button>
                <button className="ArchiveBotton" onClick={() => navigate("/projects")}>Projects</button>
                <button className="ArchiveBotton" onClick={() => navigate("/archive")}>Archive</button>
            </div>

        </>

    )
}