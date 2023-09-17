import React from 'react'
import { projects, topDevelopers } from '../../data';

const Projects = () => {
  return (
    <>
    <div className="container">
      <div className="top-box mt-5" style={{ background: "linear-gradient(180deg,#cc2b5e,#753a88)",
      height: "150px", width: "100%"}}>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12 text-center">
          <img src="/images/location.jpg" alt="" className='location-img mt-5'  style={{ height: "150px" , width: "150px"}}  />
          <h4 className='white-color'>Qlab</h4>
          <p className='white-color'>@qlab</p>
          <p className='white-color'>Followers 1M+</p>
          <div className="project-btns d-flex flex-column">
          <button className='btn btn-primary mt-4'>Ongoing Activities</button>
          <button className='btn btn-primary mt-4'>Testimonials</button>
          <button className='btn btn-primary mt-4'>Our Previous Projects</button>
          <button className='btn btn-primary mt-4'>Case Studies</button>
          </div>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-12 mt-5">
        <div className="row">
            {
            projects.map((project) => (
                <>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center">
                  <img src= {project.img} alt="" className='project-img' />
                  <p className='white-color'> {project.name} </p>
                  <button className='btn btn-primary mb-3' style={{width : '100px'}}> {project.button} </button>
                </div>
                </>
            ))
            }
          </div>
        </div>
      </div>
      <div className="top-box mt-5" style={{ background: "linear-gradient(180deg,#cc2b5e,#753a88)",
      height: "150px", width: "100%"}}>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12 text-center">
          <img src="/images/location.jpg" alt="" className='location-img mt-5' style={{ height: "150px" , width: "150px"}} />
          <h4 className='white-color'>Qlab</h4>
          <p className='white-color'>@qlab</p>
          <p className='white-color'>Followers 1M+</p>
          <div className="project-btns d-flex flex-column">
          <button className='btn btn-primary mt-4'>Ongoing Activities</button>
          <button className='btn btn-primary mt-4'>Testimonials</button>
          <button className='btn btn-primary mt-4'>Our Previous Projects</button>
          <button className='btn btn-primary mt-4 mb-4'>Case Studies</button>
          </div>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-12 mt-5">
        <div className="row">
            {
           topDevelopers.map((developers)=>(
            <>
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
            <img src= {developers.img} alt="" className='dev-img mb-2'/>
            <p className='white-color'> {developers.name} </p>
            <button className='btn btn-primary mb-2' style={{width : '100px'}}>LinkedIn</button>
            </div>
            </>
          ))
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Projects