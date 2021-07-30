import React from 'react';
import {
    RiFacebookLine as FacebookIcon,
    RiInstagramLine as InstagramIcon,
    RiGithubLine as GithubIcon,
    RiYoutubeLine as YoutubeIcon,
    RiLinkedinLine as LinkedinIcon,
    RiPhoneLine as PhoneIcon,
    RiMailLine as MailIcon
} from "react-icons/ri";
    
export const list = {
    socials: [
        {
            href: 'https://www.facebook.com/Rados%C5%82aw-Adamczyk-Programowanie-101578908834337',
            title:'Facebook',
            icon:<FacebookIcon/>
        },
        {
            href: 'https://www.instagram.com/radoslawadamczyk2000/',
            title:'Instagram',
            icon:<InstagramIcon/>
        },
        {
            href: 'https://github.com/RadoslawAdamczyk2000',
            title:'Github',
            icon:<GithubIcon/>
        },
        {
            href: 'https://www.youtube.com/channel/UCOHB1fpEKwxhjCEDNgVLEog',
            title:'YouTube',
            icon:<YoutubeIcon/>
        },
        {
            href: 'https://www.linkedin.com/in/rados%C5%82aw-adamczyk-853948195/',
            title:'Linkedin',
            icon:<LinkedinIcon/>
        }  
    ],
    informations: [
        {
            value: '+48 794-100-413',
            icon:<PhoneIcon/>
        },
        {
            value: 'radoslawadamczyk2000@gmai.com',
            icon:<MailIcon/>
        }
    ]
}
