import { getFeaturedEvents } from "../data/dummy-data";
import EventList from "../components/events/eventlist";
function HomePage(props) {

    const featuredEvents = getFeaturedEvents();
    console.log(featuredEvents);
    return (
        <>

            <EventList items={featuredEvents} />
            <h1></h1>

        </>
    );

}

export default HomePage;