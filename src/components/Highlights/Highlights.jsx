import "./Highlights.css";
export default function Highlights(){
    const HighlightData = [
     {
       title: "Top Academic Performance",
       text: "Our students consistently excel in national exams."
     },
     {
       title: "Top Academic Performance",
       text: "Our students consistently excel in national exams."
     },
     {
       title: "Top Academic Performance",
       text: "Our students consistently excel in national exams."
     },
     {
       title: "Top Academic Performance",
       text: "Our students consistently excel in national exams."
     },
     {
       title: "Top Academic Performance",
       text: "Our students consistently excel in national exams."
     },
     {
       title: "Top Academic Performance",
       text: "Our students consistently excel in national exams."
     }
    ];
    return(
     <section className="highlights">
        <h2 className="title">What Makes Us Stand Out</h2>
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