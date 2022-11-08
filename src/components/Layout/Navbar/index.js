import styles from './Navbar.module.scss'
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
function Navbar() {

    return (
        <div className={clsx(styles.navbar)}>
            <ul className={clsx(styles.list)}>
                <Link to="/" style={{ textDecoration: "none" }}>

                    <li className={clsx(styles.item, styles.active)}>All</li>
                </Link>
                <li className={clsx(styles.item)}>Mobile</li>
                <li className={clsx(styles.item)}>Tablet</li>
                <li className={clsx(styles.item)}>Laptop</li>
                <li className={clsx(styles.item)}>Clock</li>
            </ul>
            <div className={clsx(styles.cart)}>
                <Link to='/Cart'>

                    <div className={clsx(styles.circle)}>10</div>
                    <FontAwesomeIcon icon={faCartShopping} className={clsx(styles.cart_icon)} />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;