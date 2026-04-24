import React from 'react'
import style from "./Footer.module.css"

const Footer = () => {
    return (
        <main className={style.footer}>
            <section  className={style.section1}>
                <p className={style.p}>Sobre Nosotros</p>
                <p className={style.p}>Política de Cookies</p>
                <p className={style.p}>Términos y condiciones</p>
                <p className={style.p}>Contacto</p>
            </section>
            <section className={style.section2}>
                <p className={style.p}>
                    ©2023 Fundación Verisure, c/Priégola nº 2, 28224 Pozuelo de Alarcón (Madrid)
                </p>
                
            </section>
        </main>
    )
}

export default Footer