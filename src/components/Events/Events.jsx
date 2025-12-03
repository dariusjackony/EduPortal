import "./Events.css";
import scienceFair from "../../assets/EventPreview/students.jpeg";
function Events(){
    const eventData = [
        {
          title: "Science Fair",
          date: "12 Feb 2026",
          description: "A day for the students to showcase creativity and scientific discoveries.",
          image: scienceFair
        },
        {
            title: "Sports Day",
            date: "20 April 2026",
            description: "An event promoting teamwork, discipline, and friendly competition.",
            image: scienceFair
        },
        {
            title: "Cultural Showcase",
            date: "8 March 2026",
            description: "A celebration of culture, music, art and traditions",
            image: scienceFair
        }
    ]
    return(
        <section className="main-event-container">
            <span className="main-event-title">
                Upcoming Events
            </span>
            <p className="event-subtitle">
                Stay updated with what's happening at EduPortal
            </p>
            <p className="description">
                At EduPortal School, we value activities that build 
                confidence, teamwork, and lifelong memories. Here's a quick look 
                async function some of the exciting events taking place this term. Join
                 us as we learn, grow, and celebrate together.
            </p>
            <div className="events-container">
                {eventData.map((event, index) =>(
                    <div className="eventsCard" key={index}>
                        <img src={event.image} className="event-image" alt={event.title} />
                        <div className="cardDetails">
                            <p className="event-title">
                                {event.title}
                            </p>
                            <p className="event-date">
                                {event.date}
                            </p>
                            <p className="event-description">
                                {event.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Events;