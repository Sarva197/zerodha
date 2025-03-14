import React from 'react'

function Hero() {
  return (
    <div className="container-fluid mb-5 p-4" style={{backgroundColor:'#387fd1', color:'white'}}>
        <div className="row p-5">
            <div className="col-6 p-5">
                <h4>Support Portal</h4>
                <p className='fs-4 mt-5'>Search for an answer or browse help topics to create a ticket</p>
                <input type="text" placeholder='Eg' style={{width:'22rem',height:'3rem', borderRadius:'5px', border:'none'}}  className='mb-4 p-3'/>
                <br />
                <a href="" style={{color:'white'}}>Track account opening</a>
                <a href="" style={{color:'white', marginLeft:'2rem'}}> Track segment activation</a>
                <a href="" style={{color:'white', marginLeft:'2rem'}}> Intraday margins</a> <br />
                <a href="" style={{color:'white'}}>Kite user manual</a>
            </div>
            <div className="col-6 p-5" style={{lineHeight:'1.5'}}>
              <h4 className='text-end'><a href="" style={{color:'white'}}>Track tickets</a></h4>
              <p className='fs-4 mt-5'>Featured</p>
              <a href="" style={{color:'white'}}>1.Latest Intraday leverages and Square-off timings</a><br />
              <a href="" style={{color:'white'}}>2.Surveillance measure on scrips - March 2025</a>
            </div>
        </div>
    </div>
  )
}

export default Hero