
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'


import logo from './garaypics/garay_logo.webp'
import logotype from './garaypics/garay_logotype.png'
import store_hero from './garaypics/store_hero.png'
import store_hero1 from './garaypics/store_hero1.png'
import store1 from './garaypics/store1.jpg'
import store2 from './garaypics/store2.jpg'
import store3 from './garaypics/store3.jpg'
import store4 from './garaypics/store4.jpg'
import store5 from './garaypics/store5.jpg'
import store6 from './garaypics/store6.jpg'
import store7 from './garaypics/store7.jpg'
import store8 from './garaypics/store8.jpg'
import brakedisc from './garaypics/brakedisc.png'
import carbattery from './garaypics/carbattery.png'
import airfilter from './garaypics/airfilter.png'
import conveyorbelt from './garaypics/conveyorbelt.png'
import engineoil from './garaypics/engineoil.png'
import gasket from './garaypics/gasket.png'
import oilfilter from './garaypics/oilfilter.png'
import sparkplug from './garaypics/sparkplug.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'


export const assets = {
    header_img,
    group_profiles,
    logo,
    logotype,
    store_hero,
    store_hero1,
    store1,
    store2,
    store3,
    store4,
    store5,
    brakedisc,
    carbattery,
    airfilter,
    conveyorbelt,
    engineoil,
    gasket,
    oilfilter,
    sparkplug,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const productData = [
    {
        product: 'Discos de Frenos',
        image: brakedisc
    },
    {
        product: 'Baterías de Auto',
        image: carbattery
    },
    {
        product: 'Filtros de Aire',
        image: airfilter
    },
    {
        product: 'Correas de Transmisión',
        image: conveyorbelt
    },
    {
        product: 'Aceite de Motor',
        image: engineoil
    },
    {
        product: 'Juntas',
        image: gasket
    },
    {
        product: 'Filtros de Aceite',
        image: oilfilter
    },
    {
        product: 'Bujías',
        image: sparkplug
    },
];

export const storeTourData = [
    {
      title: 'Mostrador Principal',
      image: store2
    },
    {
      title: 'Estantería de Aceites',
      image: store3
    },
    {
      title: 'Herramientas de Taller',
      image: store4
    },
    {
      title: 'Pared de Repuestos',
      image: store5
    },
    {
        title: 'Pared de Repuestos',
        image: store6
    },
    {
        title: 'Pared de Repuestos',
        image: store7
    },
    {
        title: 'Pared de Repuestos',
        image: store8
    },
    // Add more entries...
  ]

export const doctors = [
    {
        _id: 'store1',
        name: 'Richard James',
        image: store1,
        product: 'Creative Director',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'store1',
        name: 'Emily Larson',
        image: store1,
        product: 'Storyboard Artist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'store1',
        name: 'Sarah Patel',
        image: store1,
        product: 'Motion Designer',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'store1',
        name: 'Christopher Lee',
        image: store1,
        product: 'Motion Designer',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'store1',
        name: 'Jennifer Garcia',
        image: store1,
        product: 'Sound Designer',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'store1',
        name: 'Andrew Williams',
        image: store1,
        product: 'Producer',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'store1',
        name: 'Christopher Davis',
        image: store1,
        product: 'Animator',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'store1',
        name: 'Timothy White',
        image: store1,
        product: 'Visual Effects (VFX) Artist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'store1',
        name: 'Ava Mitchell',
        image: store1,
        product: 'Creative Director',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'store1',
        name: 'Jeffrey King',
        image: store1,
        product: 'Animator',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'store1',
        name: 'Zoe Kelly',
        image: store1,
        product: 'Motion Designer',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]