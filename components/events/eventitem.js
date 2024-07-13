import Link from 'next/link'
import classes from './event-item.module.css';
import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
function EventItem(props) {
    const { title, image, date, location, id } = props;
    const humanreadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const humanreadableAddress = location.replace(',', '\n');
    const eploreLink = `/events/${id}`;
    return (
        <li key={id} className={classes.item}  >
            <img src={'/' + image} alt={title}></img>
            <div className={classes.content}>
                <div className={classes.summary}>
                    <div >
                        <h2> {title} </h2>
                    </div>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{humanreadableDate} </time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{humanreadableAddress} </address>
                    </div>
                </div>
                <div className={classes.actions}>

                    <Button link={eploreLink}>
                        <span>
                            Explore Link
                        </span>
                        <span className={classes.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>

    )

}

export default EventItem;