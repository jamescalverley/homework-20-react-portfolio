import React from 'react';

function ProjectsPage(){
  
  return (
    <div className="container">
      <div id="mainProjects" className="col=md">

        <div className="wrapperMain">

          <div className="card" className="mainProCard">
            <div className="row">
              <div className="col-md-6" className="card-body">
                <h5 className="card-title">Project A</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <a href="#" className="btn btn-secondary">View Project</a>
              </div>
              <div className="col-md-6" className="img-holder">
                  <img className="card-img" src="https://via.placeholder.com/150x75" alt="Card image cap" />
              </div>
            </div>
          </div>

        
        </div>

      </div>

      
      </div>
  )
}

export default ProjectsPage;