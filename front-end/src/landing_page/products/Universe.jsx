import React from 'react'
import SubImages from './SubImages'

function Universe() {
  return (
    <div className="container mt-3 p-5">
        <div className="row text-center">
            <h2>The Zerodha Universe</h2>
            <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
        </div>
        <div className="row mt-2 pt-5 pb-1 p-5  d-flex align-items-center justify-content-center">
            <a href="https://www.zerodhafundhouse.com/" style={{textDecoration:'none'}} className="col text-center p-3">
                <img src="/images/zerodhaFundhouse.png" alt=""  className='mb-2' style={{height:'3.5rem',width:'11rem'}}/><br />
                <span className='text-muted' style={{fontSize:'0.8rem'}}>Our asset management venture  <br /> that is creating simple and transparent index  <br /> funds to help you save for your goals. </span>
            </a>
            <a className="col text-center p-3" style={{textDecoration:'none'}} >
            <img src="/images/smallcaseLogo.png" alt=""  className='mb-2'/><br />
            <span className='text-muted' style={{fontSize:'0.8rem'}}>Options trading platform that lets you <br /> create strategies, analyze positions, and examine  <br /> data points like open interest, FII/DII, and more. </span>
            </a>
            <a className="col text-center p-3" style={{textDecoration:'none'}}>
            <img src="/images/smallcaseLogo.png" alt=""  className='mb-2'/><br />
            <span className='text-muted' style={{fontSize:'0.8rem'}}>Our asset management venture  <br /> that is creating simple and transparent index  <br /> funds to help you save for your goals. </span>
            </a>
        </div>
        <div className="row d-flex align-items-center justify-content-center pt-2 p-5">
        <a href="https://www.zerodhafundhouse.com/" style={{textDecoration:'none'}} className="col-4 text-center p-3">
                <img src="/images/smallcaseLogo.png" alt=""  className='mb-2'/><br />
                <span className='text-muted' style={{fontSize:'0.8rem'}}>Our asset management venture  <br /> that is creating simple and transparent index  <br /> funds to help you save for your goals. </span>
            </a>
            <a className="col-4 text-center p-3" style={{textDecoration:'none'}}>
            <img src="/images/smallcaseLogo.png" alt=""  className='mb-2'/><br />
            <span className='text-muted' style={{fontSize:'0.8rem'}}>Options trading platform that lets you <br /> create strategies, analyze positions, and examine  <br /> data points like open interest, FII/DII, and more. </span>
            </a>
            <a className="col-4 text-center p-3" style={{textDecoration:'none'}}>
            <img src="/images/smallcaseLogo.png" alt=""  className='mb-2'/><br />
            <span className='text-muted' style={{fontSize:'0.8rem'}}>Our asset management venture  <br /> that is creating simple and transparent index  <br /> funds to help you save for your goals. </span>
            </a>
        </div>
        <div className="row">
        <button className="btn btn-primary mt-4 mb-2 col-2 offset-5 p-2 fw-bold fs-5">
          Sign up for free
        </button>
        </div>
    </div>
  )
}

export default Universe