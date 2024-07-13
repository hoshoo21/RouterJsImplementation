import { useRouter } from 'next/router';
import { getFilteredEvents } from "../../data/dummy-data";
import { Fragment } from 'react';
import EventList from '../../components/events/eventlist'
import Button from "../../components/ui/button";
import ErrorAlert from '../../components/ui/error-alert';
import ResultsTitle from '../../components/events/results-title';

function FilteredEventDetails(props) {
    const router = useRouter();
    const filteredParams = router.query.slug;
    if (!filteredParams) {
        return (
            <div className='centerdiv'>
                <p > loading.....</p>


            </div>
        );

    }
    const selectedYear = filteredParams[0];
    const selectedMonth = filteredParams[1];
    const numYear = +selectedYear;
    const numMonth = +selectedMonth;

    console.log('searching for events');
    if (isNaN(numYear) || isNaN(numMonth) || numYear < 2020 || numMonth < 0 || numMonth > 12) {

        return (
            <Fragment>

                <ErrorAlert>
                    <p> Invalid parameter, please enter valid parameters</p>
                </ErrorAlert>
                <div className='centerdiv'>
                    <Button link="/events" >Show All Events</Button>
                </div>
            </Fragment>
        );
    }

    const date = new Date(numYear, numMonth - 1);
    const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

    if (!filteredEvents || filteredEvents.length == 0) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p > No events found for these paremets</p>
                </ErrorAlert>
                <div className='centerdiv' >
                    <Button link="/events" >Show All Events</Button>
                </div>
            </Fragment>
        );

    }
    return (
        <Fragment>
            <ResultsTitle date={date} ></ResultsTitle>
            <EventList items={filteredEvents} />

        </Fragment>

    );
}

export default FilteredEventDetails;