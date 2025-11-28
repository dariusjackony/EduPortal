import "./Highlights.css";
export default function Highlights(){
    const HighlightData = [
        {
          title: "Top Academic Performance",
          text: "Our students consistently achieve national and international recognition."
        },
        {
          title: "Experienced Teachers",
          text: "Learn from passionate educators with years of hands-on experience."
        },
        {
          title: "Modern Facilities",
          text: "State-of-the-art labs, libraries, and sports facilities for holistic growth."
        }
      ];

    return(
     <section className="highlights">
        <h2 className="highlight-title">What Makes Us Stand Out</h2>
        <div className="highlight-card">
           {HighlightData.map((item,index) =>(
            <div className="card" key={index}>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
            </div>
           ))}
        </div>
     </section>
    )
}