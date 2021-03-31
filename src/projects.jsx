import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import dayPlanner from ''
import fitnesstracker from '/fitness tracker.png'
import weatherdashboard from '/weatherdashboard.png'
import Feederology from '/Feederology'
import IMSystem from '/IMSystem.png'
import Footer from './Footer'

export default function Projects() {
    return (
        <>
                <div className="row mt-5 ml-5">
                    <div className="col-4">
                    <div className="card" style={{ width: '18rem' }}>
                    <img src={project1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">dayPlanner for a busy day.</p>
                            <a href="https://github.com/sclark417/05-dayPlanner" class="btn btn-primary">Repo</a>
                            <a href=" https://sclark417.github.io/05-dayPlanner/" class="btn btn-primary">Demo</a>
                        </div>
                </div>
                
                    </div>
                    <div className="col-4">
                    <div className="card" style={{ width: '18rem' }}>
                    <img src={project2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">A good way to keep track of your workouts.</p>
                            <a href="https://github.com/sclark417/fittracking" class="btn btn-primary">Repo</a>
                            <a href=" https://obscure-meadow-88301.herokuapp.com/" class="btn btn-primary">Demo</a>
                        </div>
                </div>
                
                    </div>
                    <div className="col-4">
                    <div className="card" style={{ width: '18rem' }}>
                    <img src={project3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Keep track of the weather where your at.</p>
                            <a href="https://github.com/sclark417/06-weatherDashboard" class="btn btn-primary">Repo</a>
                            <a href="https://sclark417.github.io/06-weatherDashboard/" class="btn btn-primary">Demo</a>
                        </div>
                </div>
                    </div>
                </div>
                <div className="row mt-5 ml-5">
                    <div className="col-4">
                    <div className="card" style={{ width: '18rem' }}>
                    <img src={project4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Food options based on your weather.</p>
                            <a href="https://github.com/sclark417/Feederology" class="btn btn-primary">Repo</a>
                            <a href="https://sclark417.github.io/Feederology/" class="btn btn-primary">Demo</a>
                        </div>
                </div>
                
                    </div>
                    <div className="col-4">
                    <div className="card" style={{ width: '18rem' }}>
                    <img src={project5} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Inventory managment system.</p>
                            <a href="https://github.com/pwg26/Project_2_Inventory_Management" class="btn btn-primary">Repo</a>
                            <a href="https://nameless-sands-95928.herokuapp.com/" class="btn btn-primary">Demo</a>
                        </div>
                </div>
                
                    </div>
               
                </div>
        <Footer />
        </>
    )
}