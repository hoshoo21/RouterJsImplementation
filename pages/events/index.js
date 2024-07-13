import { useRouter } from 'next/router';
import { getAllEvents } from '../../data/dummy-data';
import EventList from '../../components/events/eventlist';
import EventSearch from '../../components/events/events.-search';
import { Fragment } from 'react';
function EventsMainPage(props) {

    const allEvents = getAllEvents();
    const router = useRouter();
    function handleSearch(month, year) {
        const fullPath = `/events/${month}/${year}`;
        router.push(fullPath);

    }


    return (
        <Fragment>
            <EventSearch onSearch={handleSearch} />
            <EventList items={allEvents} />
        </Fragment>

    )

}

export default EventsMainPage;