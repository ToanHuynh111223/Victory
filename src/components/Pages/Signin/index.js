import styles from './Signin.module.scss'
import clsx from 'clsx';
function Signin() {
    return (
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.form)}>
                <form action="" >
                    <label className={clsx(styles.label)}>Username </label> <br />
                    <input type="text" placeholder='your username' className={clsx(styles.input)} /> <br />
                    <label className={clsx(styles.label)}>Password</label> <br />
                    <input type="password" placeholder='your password' className={clsx(styles.input)} /> <br />
                    <input type="submit" value="Submit" className={clsx(styles.submit)}></input>
                </form>
            </div>
        </div >
    );
}

export default Signin;