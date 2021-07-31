import React from 'react';
import styles from './Footer.module.scss';
import { Social } from './Social/Social';
import { list } from './FooterLinks';

const time = new Date();
const year = time.getUTCFullYear();

export const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.socials__wrapper}>
            {list.socials.map((item) => <Social
                link={item.href}
                title={item.title}

            >
                {item.icon}
            </Social>
            )}
        </div>
        <div className={styles.informations__wrapper}>
            {list.informations.map((item) => <div className={styles.informations__wrapper__item}>
                {item.icon}
                <p className={styles.informations__wrapper__item__name}>
                    {item.value}
                </p>
            </div>

            )}
        </div>
        <p className={styles.credits}>
            Radosław Adamczyk &copy; {year}
        </p>
    </footer>
)