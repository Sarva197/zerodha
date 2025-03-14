import React from 'react'

function Education() {
  return (
    <div className='container mb-3'>
        <div className="row edu-box">
            <div className="col-5">
                <img src="images/index-education.svg" alt="" style={{width : "80%"}}/>
            </div>
            <div className="col-5">
                <h2 className='mb-3'>Free and open market education</h2>
                <p>Varsity, the largest online stock market education book in the world covering 
                    everything from the basics to advanced trading.</p>
                    <a href="" style={{color: "#387ed1", textDecoration: "none"}} className=' fw-medium mb-5'>Versity<i class="fa-solid fa-arrow-right"></i></a>
                <p className='mt-5' >TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="" style={{color: "#387ed1", textDecoration: "none"}} className=' fw-medium'>Trading Q&A<i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Education