import React from 'react'
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Stephen Clark</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/" className="nav-item nav-link">Home</Link> <span className="sr-only">(current)</span>
            <Link to="/projects" className="nav-item nav-link">Projects</Link>
            <a class="nav-item nav-link" href="/resume.docx" target="_blank">Resume</a>
          </div>
        </div>
      </nav>
      </>
    );
}
