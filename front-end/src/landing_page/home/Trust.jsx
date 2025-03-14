
import Description from '../description';

function Trust() {
  return (
    <div className="container mt-3">
        <div className="row mt-5 offset-1 p-2">
            <div className="col-5">
                <h2 style={{color: "#424242"}} className='mb-5'>Trust with confidence</h2>
                <Description heading="Customer-first always"
                 desc="That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and 
                 contribute to 15% of daily retail exchange volumes in India." />
                <Description heading="No spam or gimmicks" desc="No gimmicks, spam, gamification, or annoying push notifications. High quality apps that 
                you use at your pace, the way you like." />
                <Description heading="The Zerodha universe" desc="Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups
                 offer you tailored services specific to your needs." />
                <Description heading="Do better with money" desc="With initiatives like Nudge and Kill Switch, we don't just facilitate transactions,
                 but actively help you do better with your money." />
            </div>
            <div className="col-7 p-3">
                <img src="images/Zerodhaecosystem.png" alt="eco-img" className='col-11'/>
                <p className='text-center mt-3'>
                <a href="" style={{color: "#387ed1", textDecoration: "none"}} className=' fw-medium'>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                <a href="" style={{color: "#387ed1", textDecoration: "none"}} className='ms-5 fw-medium'>Try kite demo<i class="fa-solid fa-arrow-right"></i></a>
                </p>
            </div>
            <img src="images/press-logos.png" alt="press-logos" className='col-8 offset-2 mt-3' />
        </div>
    </div>
  );
}

export default Trust;