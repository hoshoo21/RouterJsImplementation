import { Fragment } from "react";
import Link from 'next/link';
import classes from './main-header.module.css';
import MainHeader from './main-header';
function Layout(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes.logo}>
                    <Link href="/"> NextEvents</Link>
                </div>
                <nav className={classes.navigation}>
                    <ul>
                        <li>
                            <Link href="/events"> All Events</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                {props.children}
            </main>
        </Fragment>

    );

}

export default Layout;