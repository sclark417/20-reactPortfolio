import React from 'react'
import "bootstrap/dist/css/bootstrap.css";





export default function Projects() {
    return (
<>
   
   <div className="card" style={{ width: '18rem' }}>
  <img src="/dayPlanner.png" className="card-img-top" alt="dayPlanner.png" />
  <div className="card-body">
    <p className="card-text">Have a busy day? Well have no fear, here is a day planner to keep your day right.</p>
 </div>
</div>
 <div className="card" style={{ width: '18rem' }}>
  <img src="/fitness tracker.png" className="card-img-top" alt="fitness tracker" />
  <div className="card-body">
    <p className="card-text">A fitness tracker to keep track of your workouts!!</p>
  </div>
</div>
 <div className="card" style={{ width: '18rem' }}>
  <img src="/Feederology.png" className="card-img-top" alt="Feederology.png" />
  <div className="card-body">
    <p className="card-text">Meal planning depending on the weather in your location.</p>
  </div>
</div>
 <div className="card" style={{ width: '18rem' }}>
  <img src="/IMSystem.png" className="card-img-top" alt="IMSystem.png" />
  <div className="card-body">
    <p className="card-text">Inventory control system to keep track of Assets .</p>
  </div>
</div>
    
   
           



        </>
    )
}