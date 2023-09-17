import React from 'react'

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className='white-color mt-5 text-center'>About Us</h1>
      <div className="top-box text-center" style={{ background: "linear-gradient(90deg,#160042,#753a88)", borderRadius: "15px"}}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5 mb-5">
            <h3 className='white-color'>On a mission to environmental sustainability with NFT's</h3>
            <p className='white-color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam enim totam ut quae labore dolorem tempora amet ab aperiam.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5 mb-5">
            <img src="/images/metaverse5.jpg" alt="" style={{height : "150px"}}/>
          </div>
        </div>
      </div>

      <h1 className="text-center white-color mt-5 mb-5">NFT Gen Marketplace with everything for everyone</h1>
      <div className="text-center">
      <video className='background-video' type='video/mp4' style={{ width: '500px' }}>
          <source src='/images/about.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="last mb-5">
        <h1 className="text-center white-color mt-5 mb-5">NFT Gen Marketplace with everything for everyone</h1>
        <div className="top-box text-center" style={{ background: "linear-gradient(90deg,#160042,#753a88)", borderRadius: "15px"}}>
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 mt-5 mb-5">
            <img src="/images/metaverse2.jpg" alt="" style={{height : "250px"}}/>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5 mb-5">
            <h3 className='white-color mt-5'>On a mission to environmental sustainability with NFT's</h3>
            <p className='white-color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam enim totam ut quae labore dolorem tempora amet ab aperiam.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About