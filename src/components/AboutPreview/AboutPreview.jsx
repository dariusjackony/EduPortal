import "./AboutPreview.css";
import image1 from "../../assets/chemistry.jpeg";
import image2 from "../../assets/focused.jpeg";
import image3 from "../../assets/happystudents.jpeg";
import image4 from "../../assets/tech.jpeg";
import image5 from "../../assets/students.jpeg";

export default function AboutPreview(){
    const imageData = [
        image1,image2,image3,image4,image5
    ]
   return(
        <div className="about-main">
            <div className="text">
                <p className="about-title">Excellence in Learning, Leadership, and Life</p>
                <span className="about-subtitle">Experience That Guides, Education That Inspires</span>
                <p className="about-paragraph">Our school combines proven leadership with passionate teaching to create an environment where students thrive. We focus on academics,
                     character, and holistic development to prepare 
                     learners for future success.
                </p>
            </div>
            <section className="about-images">
                <div className="images-part">
                    {imageData.map((img,index) =>(
                        <img key={index} src={img} className="about-img" />
                    ))}
               </div>
            </section>
            
        </div>
   )
}
