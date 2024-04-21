import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEye as Visible, FaEyeSlash as InVisible } from "react-icons/fa";

import image from './../../Assets/Images/Account/signin_signup_vector.svg'

import google from './../../Assets/Images/Account/google.svg'
import facebook from './../../Assets/Images/Account/facebook.svg'
import apple from './../../Assets/Images/Account/apple.svg'

import styles from './SignIn.module.scss'

const SignIn = () => {


    const [changePassword, setChangePassword] = useState(true);
    const changeIcon = changePassword === true ? false : true;


    const dataSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <section className={styles.main}>
            <div className={styles.image}>
                <img src={image} alt="" />
            </div>
            <div className={styles.content}>
                <div className={styles.container}>
                    <h1 className={styles.title}>
                        Մուտք Գործել
                    </h1>
                    <form className={styles.form} action="" method="POST" onSubmit={dataSubmit}>
                        <h3 className={styles.formText}>Չունե՞ք պրոֆիլ <Link to={'/signup'}>Գրանցվել</Link></h3>
                        <input className={styles.input} type="email" name="email" placeholder="Էլ․ Հասցե" required />
                        <div className={styles.password}>
                            <input className={styles.input} type={changePassword ? "password" : "text"} name="password" placeholder="Գաղտնաբառ" required />
                            <span className={styles.vision}
                                onClick={() => {
                                    setChangePassword(changeIcon);
                                }}
                            >
                                {changeIcon ? <Visible /> : <InVisible />}
                            </span>
                        </div>
                        <button className={styles.submit} type="submit">Մուտք Գործել</button>
                    </form>
                    <div className={styles.or}>Կամ</div>
                    <div className={styles.options}>
                        <a className={styles.icon} href="#"><img src={google} alt="" /> Շարունակել Google - ով</a>
                        <a className={styles.icon} href="#"><img src={facebook} alt="" /> Շարունակել Facebook - ով</a>
                        <a className={styles.icon} href="#"><img src={apple} alt="" /> Շարունակել Apple - ով</a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SignIn
