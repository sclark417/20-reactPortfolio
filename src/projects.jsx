import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import project1 from './project1.png'
import project2 from './project2.png'
import project3 from './project3.png'
import project4 from './project4.png'
import project5 from './project5.png'
import project6 from './project6.png'
import Footer from './Footer'

export default function Projects() {
    return (
        <>
                <div className="row mt-5 ml-5">
                    <div className="col-4">
                    <div className="card" style={{ width: '18rem' }}>
                    <img src={project1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">project1: for a busy day.</p>
                            <a href="https://github.com/sclark417/05-dayPlanner" class="btn btn-primary">Repo</a>
                            <a href=" https://sclark417.github.io/05-dayPlanner/" class="btn btn-primary">Demo</a>
                        </div>
                </div>
                
                    </div>
                    <div className="col-4">
                    <div className="card" style={{ width: '18rem' }}>
                    <img src={project2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">project2: keep track of your workout</p>
                            <a href="https://github.com/sclark417/fittracking" class="btn btn-primary">Repo</a>
                            <a href=" https://obscure-meadow-88301.herokuapp.com/" class="btn btn-primary">Demo</a>
                        </div>
                </div>
                
                    </div>
                    <div className="col-4">
                    <div className="card" style={{ width: '18rem' }}>
                    <img src={project3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">project3: a look at the weather.</p>
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
                            <p className="card-text">project4: food options based on weather.</p>
                            <a href="https://github.com/sclark417/Feederology" class="btn btn-primary">Repo</a>
                            <a href="https://sclark417.github.io/Feederology/" class="btn btn-primary">Demo</a>
                        </div>
                </div>
                
                    </div>
                    <div className="col-4">
                    <div className="card" style={{ width: '18rem' }}>
                    <img src={project5} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">project5: Kepp track of assets.</p>
                            <a href="https://github.com/pwg26/Project_2_Inventory_Management" class="btn btn-primary">Repo</a>
                            <a href="https://nameless-sands-95928.herokuapp.com/" class="btn btn-primary">Demo</a>
                        </div>
                </div>
                
                    </div>
                    <div className="col-4">
                    <div className="card" style={{ width: '18rem' }}>
                    <img src={project6} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">project6:keep track of your money.</p>
                            <a href=" https://github.com/sclark417/18myMoney" class="btn btn-primary">Repo</a>
                            <a href=" https://fierce-stream-65240.herokuapp.com" class="btn btn-primary">Demo</a>
                        </div>
                </div>
                    </div>
                </div>
        <Footer />
        </>
    )
}