import scienceFair from "../../assets/EventPreview/students.jpeg";
import "./GalleryPreview.css";
export default function GalleryPreview(){
    const Images = [
        {
          image: scienceFair
        },
        {
          image: scienceFair
        },
        {
          image: scienceFair
        },
        {
          image: scienceFair
        },
        {
          image: scienceFair
        },
        {
          image: scienceFair
        }
    ]
    return(
        <div className="gallery-main-container">
           <div className="gallery-">
              <p className="gallery-title">
                 Gallery Preview
              </p>
              <p className="gallery-paragraph">Explore the moments that define our Community.</p>
              <div className="gallery-pics">
                 {Images.map((image,index) =>(
                    <div className="gallery" key={index}>
                        <img src={scienceFair} className="gallery-img" />
                    </div>
                 ))}
              </div>
              <div className="gallery-btn">
                <button className="view-btn">View Full Gallery</button>
              </div>
           </div>
        </div>
    )
}