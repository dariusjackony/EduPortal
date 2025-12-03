import "./Contact.css";
export default  function Contact(){
    return(
        <section className="contactCTA">
            <div className="cta-headings">
               <span className="cta-small">
                   Get In Touch
                </span>
                <p className="cta-description">
                    Have any questions, need support, or want to learn more about Eduport?
                    Reach out by filling the form or visiting us at school campus.
                </p>
            </div>
            <div className="cta-content">

                <div className="cta-map">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.418268042131!2d32.57238671527027!3d0.3475963990537342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbadf71e52fbb%3A0xa94cb71ad5ec2fc6!2sKampala%20City%20Council%2C%20Kampala%20Central%2C%20Uganda!5e0!3m2!1sen!2sus!4v1701640000000!5m2!1sen!2sus"  
                        title="School Location"
                        loading="lazy"
                        allowFullScreen=""
                    ></iframe>
                </div>
                <div className="cta-right">
                    <form className="cta-info">
                        <div className="cta-form">
                            <div className="form-row">
                                <input type="text" placeholder="First Name" required />
                                <input type="text" placeholder="Last Name"  required/>
                            </div>
                               <input type="email"  placeholder="Email Address" required/>
                               <textarea placeholder="Write your message..." required></textarea>
                               <button type="submit" className="cta-btn">
                                   Send Message
                               </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}