import "./NewsPreview.css";
import scienceFair from "../../assets/EventPreview/students.jpeg";
export default function NewsPreview(){
    const newsData = [
        {
            image: scienceFair,
            title: 'Mid-Term Exams Scheduled',
            description: 'Mid term Exams will begin next week.Students are encouraged to revise and seek guidance from teachers.',
            date: 'March 15 2025'
        },
        {
            image: scienceFair,
            title: 'New ICT club Launched',
            description: 'EduPortal has introduced a new ICT club where learners explore coding, robotics, and didgital skills.',
            date: 'Feb 18 2025'
        },
        {
            image:scienceFair,
            title: 'Parents Meeting Reminder',
            description: 'Parents are reminded that the school meeting will take place this Friday at 2:00 PM in the main Hall.',
            date: 'Feb 25 2025'
        },
    ]
    return(
        <div className="news-main-container">
            <span className="news-title">
                News & Announcements
            </span>
            <p className="news-subtitle">
              Stay informed with the most recent school updates, programs, and important notices.
            </p>
            <div className="news-main">
              {newsData.map((item, index) =>(
                <div className="news-card" key={index}>
                    <img src={item.image} className="news-image" alt={item.title} />
                    <div className="news-details">
                        <p className="news-head">{item.title}</p>
                        <p className="news-description">{item.description}</p>
                        <p className="news-date">{item.date}</p>
                    </div>
                </div>
              ))}
            </div>
        </div>
    )
    
}