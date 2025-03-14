import React from 'react'
import Description from '../description'

function Pricing() {
  return (
    <div className="container mt-5 mb-5 sec-container ">
        <div className="row mt-5 ms-2">
            <div className="col-5 price-desc">
                <Description heading="Unbeatable pricing" desc="We pioneered the concept of discount broking and price transparency in India.
                 Flat fees and no hidden charges."/>
            </div>
            <div className="col-7" >
                <div className="row pricing-box">
                    <div className="col price-box">
                        <img src="images/pricing-eq.svg" alt="price-img" style={{width: "120px"}} />
                        <p style={{fontSize : "10px"}}>Free account <br />
                        opening</p>
                    </div>
                    <div className="col price-box" >
                    <img src="images/pricing-eq.svg" alt="price-img" style={{width: "120px"}}/>
                    <p style={{fontSize : "10px"}}>Free equity delivery <br />
                    and direct mutual funds</p>
                    </div>
                    <div className="col price-box">
                    <img src="images/twenty.svg" alt="price-img" style={{width: "120px"}} />
                    <p style={{fontSize : "10px"}}>Intraday and
                    F&O</p>
                    </div>
                </div>
            </div>
            <a href="" style={{color: "#387ed1", textDecoration: "none"}} className=' fw-medium'>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
        </div>
    </div>
  )
}

export default Pricing