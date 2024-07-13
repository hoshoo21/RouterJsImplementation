import Link from 'next/link';
import classes from './button.module.css';
function Button(props) {
    return (
        <Link legacyBehavior href={props.link}>
            <a className={classes.btn} id="link" >
                {props.children}
            </a>
        </Link>
    );

}
export default Button;