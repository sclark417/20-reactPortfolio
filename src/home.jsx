import React from 'react'

export default function Home() {
    return (
        <>
        <div class="row mt-5"></div>
          <div class="row mt-5">
          	 <div class="col-3"></div>
          	 <div class="col-2">
          	 	<img class="Profilepic" src="/Profilepic.jpg" alt="Profilepic"/>
          	 </div>
             <div class="col-4 back">Hello all, My Name is Stephen Clark.  I live in Parker Colorado, and have been attending the coding program with the University of Denver for the past three months.
             I am very excited after the class ends to see what the future holds for my coding career.  Please feel free to contact me and checkout my links provided below to look at my work
             in the past three months.</div>
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