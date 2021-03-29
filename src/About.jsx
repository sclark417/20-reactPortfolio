import React from 'react'
import './style.css';



export default function About() {
    return (
        <>
        <div class="row mt-5"></div>
          <div class="row mt-5">
          	 <div class="col-3"></div>
          	 <div class="col-2">
          	 	<img class="headshot" src="" alt="headshot"/>
          	 </div>
             <div class="col-4 back"></div>
          </div>
          <div class="row mt-3">
            <div class="col-3"></div>
            <div class="col-6 back">
              <p class="lead">Social Media</p>
                     <a href="https://www.linkedin.com/in/stephen-clark-5568b1206/"><img src=""
               class="social social1" /></a>
               <a href="https://github.com/sclark417"><img src="" class="social" /></a>
            </div>
          </div>
        </>
    )
}
