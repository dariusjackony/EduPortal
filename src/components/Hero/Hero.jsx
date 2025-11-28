import "./Hero.css";
import backg from "../../assets/backg.jpeg";
function Hero(){
    return(
        <section className="hero" 
         style={{ backgroundImage: `url(${backg})` }}
        >
          <div className="hero-content">
            <h2 className="hero-title">
                Shaping Tomorrow's Leaders Today
            </h2>
            <p className="hero-subtitle">
                We provide quality education and supportive environment<br></br> where every 
                student can grow and succeed.
            </p>
          </div>
          <div className="hero-buttons">
            <button className="btn-primary">
                Admissions
            </button>
            <button className="btn-secondary">
                Learn More
            </button>
          </div>
        </section>
    )
}
export default Hero;