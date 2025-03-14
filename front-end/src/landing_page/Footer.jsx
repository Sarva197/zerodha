import React from "react";

function Footer() {
  return (
    <div className="container-fluid mb-5 border-top bg-body-tertiary d-flex align-items-center justify-content-center flex-column">
      <div className="row mt-5 ms-5" style={{width:'80%'}}>
        <div className="col">
          <img src="images/logo.svg" alt="logo-img" style={{ width: "50%" }} />
          <p>&copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
        </div>
        <div className="col" style={{lineHeight:'1.8'}}>
          <p className="fw-medium ">Company</p>
          <a href="#" style={{textDecoration :'none', color:'#666666'}} className="fs-6 fw-semibold ">About</a>
          <br />
          <a href="#" style={{textDecoration :'none', color:'#666666'}} className="fs-6 fw-semibold">Products </a>
          <br />
          <a href="#" style={{textDecoration :'none', color:'#666666'}} className="fs-6 fw-semibold">Pricing</a>
          <br />
          <a href="#" style={{textDecoration :'none', color:'#666666'}} className="fs-6 fw-semibold">Referral programme</a>
          <br />
          <a href="#" style={{textDecoration :'none', color:'#666666'}} className="fs-6 fw-semibold">Careers</a>
          <br />
          <a href="#" style={{textDecoration :'none', color:'#666666'}} className="fs-6 fw-semibold">Zerodha.tech</a>
          <br />
          <a href="#" style={{textDecoration :'none', color:'#666666'}} className="fs-6 fw-semibold">Open source</a>
          <br />
          <a href="#" style={{textDecoration :'none', color:'#666666'}} className="fs-6 fw-semibold">Press & media</a>
          <br />
          <a href="#"style={{textDecoration :'none', color:'#666666'}} className="fs-6 fw-semibold">Zerodha Cares (CSR)</a>
          <br />
        </div>
        <div className="col" style={{lineHeight:'1.8'}}>
          <p className="fw-medium">Support</p>
          <a href="" style={{textDecoration :'none', color:'#666666'}} className="fs-6 fw-semibold ">Contact</a>
          <br />
          <a href="" style={{textDecoration :'none', color:'#666666'}} className="fs-6 fw-semibold ">Support portal</a>
          <br />
          <a href="" style={{textDecoration :'none', color:'#666666'}} className="fs-6 fw-semibold ">Z-Connect blog</a>
          <br />
          <a href=""style={{textDecoration :'none', color:'#666666'}} className="fs-6 fw-semibold ">List of charges</a>
          <br />
          <a href=""style={{textDecoration :'none', color:'#666666'}} className="fs-6 fw-semibold ">Downloads & resources</a>
          <br />
          <a href=""style={{textDecoration :'none', color:'#666666'}} className="fs-6 fw-semibold ">Videos</a>
          <br />
          <a href="" style={{textDecoration :'none', color:'#666666'}} className="fs-6 fw-semibold ">Market overview</a>
          <br />
          <a href=""style={{textDecoration :'none', color:'#666666'}} className="fs-6 fw-semibold ">How to file a complaint?</a>
          <br />
          <a href="" style={{textDecoration :'none', color:'#666666'}} className="fs-6 fw-semibold ">Status of your complaints</a>
          <br />
        </div>
        <div className="col" style={{lineHeight:'1.8'}}>
          <p className="fw-medium">Account</p>
          <a href="" style={{textDecoration :'none', color:'#666666'}} className="fs-6 fw-semibold ">Open an account</a>
          <br />
          <a href="" style={{textDecoration :'none', color:'#666666'}} className="fs-6 fw-semibold ">Fund transfer</a>
          <br />
        </div>
      </div>
      <div style={{width:'80%', fontSize:'1rem'}} className="offset-1 mt-5">
      <p style={{ fontSize:'0.75rem',color:'#9B9B9B',lineHeight:'2'}}>
        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
        no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking
        Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through
        Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration
        no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154,
        4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
        Phase, Bengaluru - 560078, Karnataka, India. For any complaints
        pertaining to securities broking please write to <span style={{color:'#387BD1'}}> complaints@zerodha.com</span>,
        for DP related to <span style={{color:'#387BD1'}}> dp@zerodha.com. </span> Please ensure you carefully read the
        Risk Disclosure Document as prescribed by SEBI | ICFA
      </p>
      <p style={{ fontSize:'0.75rem',color:'#9B9B9B',lineHeight:'2'}}>
        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
        Mandatory details for filing complaints on SCORES: Name, PAN, Address,
        Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
        redressal of the grievances
      </p>
      <p>
          <a href="" style={{color:'#387BD1',textDecoration:'none'}}>Smart Online Dispute Resolution</a> | <a href="" style={{color:'#387BD1',textDecoration:'none'}}>Grievances Redressal Mechanism</a>
      </p>
      <p style={{ fontSize:'0.75rem',color:'#9B9B9B',lineHeight:'2'}}>
        Investments in securities market are subject to market risks; read all
        the related documents carefully before investing.
      </p>
      <p style={{ fontSize:'0.75rem',color:'#9B9B9B',lineHeight:'2'}}>
        Attention investors: 1) Stock brokers can accept securities as margins
        from clients only by way of pledge in the depository system w.e.f
        September 01, 2020. 2) Update your e-mail and phone number with your
        stock broker / depository participant and receive OTP directly from
        depository on your e-mail and/or mobile number to create pledge. 3)
        Check your securities / MF / bonds in the consolidated account statement
        issued by NSDL/CDSL every month.
      </p>
      <p style={{ fontSize:'0.75rem',color:'#9B9B9B',lineHeight:'2'}}>
        "Prevent unauthorised transactions in your account. Update your mobile
        numbers/email IDs with your stock brokers. Receive information of your
        transactions directly from Exchange on your mobile/email at the end of
        the day. Issued in the interest of investors. KYC is one time exercise
        while dealing in securities markets - once KYC is done through a SEBI
        registered intermediary (broker, DP, Mutual Fund etc.), you need not
        undergo the same process again when you approach another intermediary."
        Dear Investor, if you are subscribing to an IPO, there is no need to
        issue a cheque. Please write the Bank account number and sign the IPO
        application form to authorize your bank to make payment in case of
        allotment. In case of non allotment the funds will remain in your bank
        account. As a business we don't give stock tips, and have not authorized
        anyone to trade on behalf of others. If you find anyone claiming to be
        part of Zerodha and offering such services, please create a ticket here.
      </p>
      </div>
    </div>
  );
}

export default Footer;
