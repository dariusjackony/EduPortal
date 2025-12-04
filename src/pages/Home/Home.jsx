import Hero from "../../components/Hero/Hero";
import Highlights from "../../components/Highlights/Highlights";
import AboutPreview from "../../components/AboutPreview/AboutPreview";
import ShortPreview from "../../components/ShortPreview/ShortPreview";
import Events from "../../components/Events/Events";
import NewsPreview from "../../components/NewsPreview/NewsPreview";
import GalleryPreview from "../../components/GalleryPreview/GalleryPreview";
import Contact from "../../components/ContactCTA/Contact";
function Home(){
    return(
        <>
         <Hero />
         <Highlights />
         <AboutPreview />
         <ShortPreview />
         <Events />
         <NewsPreview />
         <GalleryPreview />
         <Contact />
        </>
    )
}
export default Home;