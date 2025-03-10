import EventItem from "./eventitem";
import classes from "./event-list.module.css"
function EventList(props) {
    const { items } = props;
    return (
        <ul className={classes.list}>
            {
                items.map((event) => {

                    return <EventItem
                        id={event.id}
                        title={event.title}
                        location={event.location}
                        date={event.date}
                        image={event.image}
                    />
                })
            }

        </ul>



    );

}

export default EventList;