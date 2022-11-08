import styles from './Signin.module.scss'
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
function Signin() {
    const [errUserName, setErrUserName] = useState('')
    const [errPassword, setErrPassword] = useState('')
    const userName = useRef()
    const messageErrUserName = useRef()
    const password = useRef()
    const messageErrPassword = useRef()

    const handleAddMessageErrSubmit = () => {
        if (!errUserName && !errPassword) {
            userName.current.className = clsx(`${styles.input} ${styles.active} `)
            messageErrUserName.current.innerText = 'You need to enter this field!'
            password.current.className = clsx(`${styles.input} ${styles.active} `)
            messageErrPassword.current.innerText = 'You need to enter this field!'
        }

    }
    const handleAddMessageErrUserName = () => {

        if (!errUserName) {
            userName.current.className = clsx(`${styles.input} ${styles.active} `)
            messageErrUserName.current.innerText = 'You need to enter this field!'


        }
        else {
            userName.current.className = clsx(`${styles.input}`)
            messageErrUserName.current.innerText = ''
        }

    }
    const handleAddMessagePassword = () => {
        if (!errPassword) {
            password.current.className = clsx(`${styles.input} ${styles.active} `)
            messageErrPassword.current.innerText = 'You need to enter this field!'

        }
        else {
            password.current.className = clsx(`${styles.input} `)
            messageErrPassword.current.innerText = ''
        }
    }



    return (
        <>
            <div className={clsx(styles.logo)}>Victory</div>
            <div className={clsx(styles.main)}>
                <div className={clsx(styles.wrapper_orientation)}>
                    <div className={clsx(styles.home)}> <Link to='/'><button className={clsx(styles.btn_home)}>Home</button></Link> </div>
                    <div className={clsx(styles.sign_up)}> <Link to='/Signup'><button className={clsx(styles.btn)}>Sign up</button></Link> </div>
                </div>
                <div className={clsx(styles.form)}>
                    <form action="">
                        <div className={clsx(styles.form_group)}>

                            <label className={clsx(styles.label)}>Username </label> <br />
                            <input ref={userName} value={errUserName} onBlur={() => { handleAddMessageErrUserName() }} onChange={(e) => { setErrUserName(e.target.value) }}
                                type="text" placeholder='your username' className={clsx(`${styles.input} `)} /> <br />
                            <p ref={messageErrUserName} className={clsx(styles.error)} ></p>
                        </div>
                        <div className={clsx(styles.form_group)}>

                            <label className={clsx(styles.label)}>Password</label> <br />
                            <input ref={password} value={errPassword} onBlur={() => { handleAddMessagePassword() }} onChange={(e) => { setErrPassword(e.target.value) }} type="password" placeholder='your password' className={clsx(`${styles.input}`)} /> <br />
                            <p ref={messageErrPassword} className={clsx(styles.error)} ></p>
                        </div>
                    </form>
                    <button onClick={() => { handleAddMessageErrSubmit() }} className={clsx(styles.submit)} >Submit</button>

                </div>
            </div >
        </>
    );
}

export default Signin;