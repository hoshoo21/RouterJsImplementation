import { useRouter } from 'next/router';
import { getEventById } from '../../data/dummy-data';
import { Fragment } from 'react';
import EventSummary from '../../components/event-details/event-summary';
import EventLogistic from '../../components/event-details/event-logistics';
import EventContent from '../../components/event-details/event-content';
function EventsDetailPage(props) {
    const router = useRouter();
    console.log(router);
    const eventDetails = getEventById(router.query.eventid);
    console.log(eventDetails);

    if (!eventDetails) {
        return (
            <p> No Event Found</p>
        )


    }
    return (
        <Fragment>
            <EventSummary title={eventDetails.title} />
            <EventLogistic
                date={eventDetails.date}
                address={eventDetails.location}
                image={eventDetails.image}
                imageAlt={eventDetails.title}
            />
            <EventContent>
                {eventDetails.description}
            </EventContent>
        </Fragment>
    )


}

export default EventsDetailPage;