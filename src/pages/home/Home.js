import React from 'react';
import "./Home.css";
import { advantages, projects, technologies, topCategories, topDevelopers } from '../../data';

const Home = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row top">
        <div className="col-lg-6 col-md-6 col-sm-12 left-col mt-5">
          <h1 className='white-color mt-3'>Not Just Another Digital Agency</h1>
          <p className='white-color mb-5'>We specilaize in providing innovative digital solutions to help your business grow and succeed in the ever-changing online landscape</p>
          <div className="home-btns">
          <button className='btn btn-primary me-3'>Explore</button>
          <button className='btn btn-primary'>Get a Quote</button>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 right-col">
          <h3 className='white-color text-center'>Top Categories</h3>
          <hr />

          <div className="row">
          {
            topCategories.map((category) => (
              <>
              <div className="col-6 col-lg-4 col-md-4 col-sm-6">
              <img src={category.img} className='category-img'/>
              <p className='white-color text-center'>{category.name}</p>
              </div>
              </>
            ))
          }
          </div>

        </div>
      </div>
      <div className="developer-role mt-5">
        <h1 className='white-color text-center'>Top Developers in our team</h1>
        <hr className='white-color mt-5' />
        <div className="dev-team">
          <div className="row">
            {
              topDevelopers.map((developers)=>(
                <>
                <div className="col-lg-2 col-md-2 col-sm-6 text-center">
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

      <div className="projects">
      <h1 className='white-color mt-5 text-center'>Projects we mostly work on</h1>
        <hr className='white-color mt-5' />
        <div className="top-projects">
          <div className="row">
            {projects.map((project) => (
                <>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center">
                  <img src= {project.img} alt="" className='project-img' />
                  <p className='white-color'> {project.name} </p>
                  <button className='btn btn-primary mb-3'  style={{width : '100px'}}> {project.button} </button>
                </div>
                </>
            ))
            }
          </div>
        </div>
      </div>

      <div className="technologies">
      <h1 className='white-color mt-5 text-center'>Technologies we work in</h1>
        <hr className='white-color mt-5' />
        <div className="top-technology">
          <div className="row text-center">
            {
              technologies.map((technology) => (
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <img src= {technology.img} className='technology' alt='' />
                </div>
              ))
            }
          </div>
        </div>
      </div>
      
      <div className="advantages">
         <h1 className='white-color mt-5 text-center'>Competetive Advantages</h1>
        <hr className='white-color mt-5' />
        <div className="competitive-adv">
          <div className="row text-center">
            {
              advantages.map((adv) => (
                <div className="col-lg-3 col-md-3 col-sm-12 text-center">
                <img src= {adv.icon} alt="" className='adv-icon' />
                <h3 className='white-color'> {adv.heading} </h3>
                <p className='white-color'> {adv.desc} </p>
                </div>
              ))
            }
          </div>
          <div className="row mt-5 mb-5">
          <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            <img src="/images/about.svg" className="img-about" alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
            <h3 className='white-color'>Create, Sell, Well and collect your best NFTs with us very fast</h3>
            <p className='white-color mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro qui id, facilis praesentium aperiam ducimus distinctio?</p>
            <button className='btn btn-primary mt-3'  style={{width : '100px'}}>Connect wallet</button>
          </div>
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Home