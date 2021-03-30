import React from 'react'
import './style.css';



export default function About() {
    return (
        <>
        <div class="row mt-5"></div>
          <div class="row mt-5">
          	 <div class="col-3"></div>
          	 <div class="col-2">
          	 	<img class="Profilepic" src="/Profilepic.jpg" alt="Profilepic"/>
          	 </div>
             <div class="col-4 back"></div>
          </div>
          <div class="row mt-3">
            <div class="col-3"></div>
            <div class="col-6 back">
              <p class="lead">Social Media</p>
                     <a href="https://www.linkedin.com/in/stephen-clark-5568b1206/"><img src="/linkedin.png"
               class="social social1" /></a>
               <a href="https://github.com/sclark417"><img src="/GitHub-Mark.png" class="social" /></a>
            </div>
          </div>
        </>
    )
}
