import clsx from 'clsx';
import styles from './Header.module.scss'
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.logo)}><i>Victory</i></div>

                <div className={clsx(styles.user)}>
                    <div className={clsx(styles.sign_in)}>
                        <Link to='/Signin' >Sign in</Link>
                    </div>
                    <div className={clsx(styles.sign_up)}>
                        <Link to='/Signup'>Sign up</Link>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Header;