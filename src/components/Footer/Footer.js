import React from 'react'

function Footer() {
  return (
    <>
    <div className="footer " style={{backgroundColor: '#0b032e'}}>
        <div className="container">
    <div className="row text-center">
        <div className="col-lg-3 col-md 3 col sm-6 mt-4">
            <h5 className='white-color'>Development</h5>
            <p className='white-color'>Mern Stack</p>
            <p className='white-color'>React Js</p>
            <p className='white-color'>Node Js</p>
            <p className='white-color'>Express Js</p>
            <p className='white-color'>Apollo Client</p>
            <p className='white-color'>Mongodb</p>
        </div>
        <div className="col-lg-3 col-md 3 col sm-6 mt-4">
            <h5 className='white-color'>Design</h5>
            <p className='white-color'>Figma</p>
            <p className='white-color'>Adobe Xd</p>
            <p className='white-color'>Wordpress</p>
            <p className='white-color'>Canva</p>
        </div>
        <div className="col-lg-3 col-md 3 col sm-6 mt-4">
            <h5 className='white-color'>Stem Wizard Academia</h5>
            <p className='white-color'>Stem Education</p>
            <p className='white-color'>Air Academics</p>
            <p className='white-color'>Stem Wizard</p>
            <p className='white-color'>Online Education</p>
        </div>
        <div className="col-lg-3 col-md 3 col sm-6 mt-4">
            <h5 className='white-color'>Subscribe to our Newsletter</h5>
            <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Enter your email" />
            <button className='btn btn-primary'>Send</button>
            </div>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Footer