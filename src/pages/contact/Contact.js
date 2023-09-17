import React from 'react';

const Contact = () => {
    return(
        <div className="container">
           <h1 className="text-center white-color mt-5">Contact Us</h1>
           <div className="row mt-5">
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
            <i class="fa fa-phone" style={{fontSize : '24px', color : "white"}}></i>
            <p className="white-color">Phone</p>
            <p className="white-color">+92 123456</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
            <i class="fa fa-envelope" style={{fontSize : '24px', color : "white"}}></i>
            <p className="white-color">Email</p>
            <p className="white-color">abc@abc.com</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
            <i class="fa fa-map-marker" style={{fontSize : '24px', color : "white"}}></i>
            <p className="white-color">Location</p>
            <p className="white-color">Karachi, Pakistan</p>
            </div>
           </div>
           <form>
            <div class="form-group mt-5">
              <div className="row">
                <div className="col-6 ">
                  <label for="exampleInputEmail1" className='white-color mb-1'>Full Name</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="col-6">
                  <div class="form-group">
                    <label for="exampleInputPassword1" className='white-color mb-1'>Subjects</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                <label for="exampleInputEmail1" className='white-color mt-4 mb-1'>Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                <label for="exampleInputEmail1" className='white-color mt-4 mb-1'>Password</label>
                <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                <label for="exampleInputEmail1" className='white-color mt-4 mb-1'>Message</label>
                <input type="text" class="form-control" style={{height : "200px"}} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
              </div>
            </div>


            <div className="text-center">
            <button type="submit" class="btn btn-primary mt-3 mb-3" style={{width : "120px"}}>Submit</button>
            </div>
          </form>
        </div>
    )
}

export default Contact