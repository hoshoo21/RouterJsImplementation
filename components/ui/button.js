import Link from 'next/link';
import classes from './button.module.css';
function Button(props) {
    if (props.link) {
        return (
            <Link legacyBehavior href={props.link}>
                <a className={classes.btn} id="link" >
                    {props.children}
                </a>
            </Link>
        );
    }
    return (
        <button className={classes.btn} onClick={props.onClick}>
            {props.children}
        </button>
    );


}
export default Button;