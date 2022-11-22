import styles from './Navbar.module.scss'
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
function Navbar(props) {

    return (
        <div className={clsx(styles.navbar)}>
            <ul className={clsx(styles.list)}>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <li className={clsx(styles.item)}>All</li>
                </Link>
                <Link to="/MobilePage" style={{ textDecoration: "none" }}>
                    <li className={clsx(styles.item)}>Mobile</li>
                </Link>
                <Link to="/TabletPage" style={{ textDecoration: "none" }}>
                    <li className={clsx(styles.item)}>Tablet</li>
                </Link>
                <Link to="/LaptopPage" style={{ textDecoration: "none" }}>
                    <li className={clsx(styles.item)}>Laptop</li>
                </Link>
                <Link to="/ClockPage" style={{ textDecoration: "none" }}>

                    <li className={clsx(styles.item)}>Clock</li>
                </Link>
            </ul>
            <div className={clsx(styles.cart)}>
                <Link to='/Cart'>
                    <div className={clsx(styles.circle)}>{props.numberCart}</div>
                    <FontAwesomeIcon icon={faCartShopping} className={clsx(styles.cart_icon)} />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;