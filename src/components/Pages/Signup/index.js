import styles from './Signup.module.scss'
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
function Signup() {
    const [errEmail, setErrEmail] = useState('')
    const [errPhone, setErrPhone] = useState('')
    const [errUserName, setErrUserName] = useState('')
    const [errPassword, setErrPassword] = useState('')

    const email = useRef()
    const messageErrEmail = useRef()
    const phone = useRef()
    const messageErrPhone = useRef()
    const userName = useRef()
    const messageErrUserName = useRef()
    const password = useRef()
    const messageErrPassword = useRef()

    const handleAddMessageErrSubmit = () => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const numberPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        if (!errUserName && !errPassword && !errPhone && !errEmail) {
            email.current.className = clsx(`${styles.input} ${styles.active} `)
            messageErrEmail.current.innerText = 'This is your email!'
            phone.current.className = clsx(`${styles.input} ${styles.active} `)
            messageErrPhone.current.innerText = 'This is your phone (0-9)!'
            userName.current.className = clsx(`${styles.input} ${styles.active} `)
            messageErrUserName.current.innerText = 'This is your account name!'
            password.current.className = clsx(`${styles.input} ${styles.active} `)
            messageErrPassword.current.innerText = 'This is your password!'


        }
        else if (errUserName && errPassword && errPhone && errEmail) {
            if (regex.test(errEmail) === false) {

                email.current.className = clsx(`${styles.input} ${styles.active} `)
                messageErrEmail.current.innerText = 'This field must be email!'
            }
            else if (numberPhone.test(errPhone) === false) {
                phone.current.className = clsx(`${styles.input} ${styles.active} `)
                messageErrPhone.current.innerText = 'This field must be number!'
            }
        }


    }
    //email
    const handleAddMessageErrEmail = () => {

        if (!errEmail) {
            email.current.className = clsx(`${styles.input} ${styles.active} `)
            messageErrEmail.current.innerText = 'This is your email!'


        }
        else {
            email.current.className = clsx(`${styles.input}`)
            messageErrEmail.current.innerText = ''
        }

    }
    //phone
    const handleAddMessageErrPhone = () => {

        if (!errPhone) {
            phone.current.className = clsx(`${styles.input} ${styles.active} `)
            messageErrPhone.current.innerText = 'This is your phone (0-9)!'


        }
        else {
            phone.current.className = clsx(`${styles.input}`)
            messageErrPhone.current.innerText = ''
        }

    }
    //user name
    const handleAddMessageErrUserName = () => {

        if (!errUserName) {
            userName.current.className = clsx(`${styles.input} ${styles.active} `)
            messageErrUserName.current.innerText = 'This is your account name!'


        }
        else {
            userName.current.className = clsx(`${styles.input}`)
            messageErrUserName.current.innerText = ''
        }

    }
    //password
    const handleAddMessagePassword = () => {
        if (!errPassword) {
            password.current.className = clsx(`${styles.input} ${styles.active} `)
            messageErrPassword.current.innerText = 'This is your password!'

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
                    <div className={clsx(styles.sign_up)}> <Link to='/Signin'><button className={clsx(styles.btn)}>Sign in</button></Link> </div>
                </div>
                <div className={clsx(styles.form)}>
                    <form action="" >
                        <div className={clsx(styles.form_group)}>

                            <label className={clsx(styles.label)}>Email </label> <br />
                            <input ref={email} value={errEmail} onBlur={() => { handleAddMessageErrEmail() }} onChange={(e) => { setErrEmail(e.target.value) }} type="email" placeholder='your email' className={clsx(styles.input)} /> <br />
                            <p ref={messageErrEmail} className={clsx(styles.error)} ></p>
                        </div>
                        <div className={clsx(styles.form_group)}>
                            <label className={clsx(styles.label)}>Phone </label> <br />
                            <input ref={phone} value={errPhone} onBlur={() => { handleAddMessageErrPhone() }} onChange={(e) => { setErrPhone(e.target.value) }} type="tel" placeholder='phone number' className={clsx(styles.input)} /> <br />
                            <p ref={messageErrPhone} className={clsx(styles.error)} ></p>
                        </div>
                        <div className={clsx(styles.form_group)}>

                            <label className={clsx(styles.label)}>Username </label> <br />
                            <input ref={userName} value={errUserName} onBlur={() => { handleAddMessageErrUserName() }} onChange={(e) => { setErrUserName(e.target.value) }} type="text" placeholder='your username' className={clsx(styles.input)} /> <br />
                            <p ref={messageErrUserName} className={clsx(styles.error)} ></p>
                        </div>
                        <div className={clsx(styles.form_group)}>

                            <label className={clsx(styles.label)}>Password</label> <br />
                            <input ref={password} value={errPassword} onBlur={() => { handleAddMessagePassword() }} onChange={(e) => { setErrPassword(e.target.value) }} type="password" placeholder='your password' className={clsx(styles.input)} /> <br />
                            <p ref={messageErrPassword} className={clsx(styles.error)} ></p>
                        </div>

                    </form>
                    <button onClick={() => { handleAddMessageErrSubmit() }} className={clsx(styles.submit)} >Submit</button>
                </div>
            </div >
        </>);
}

export default Signup;