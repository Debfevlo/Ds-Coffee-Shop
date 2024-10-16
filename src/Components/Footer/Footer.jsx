import React from 'react';
import footerImg from '../../assets/images/coffee-footer.jpg';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';


const FooterLinks =[
    {
        title:'Home',
        link:'/#'
    },

    {
        title:'About',
        link:'/#about'
    },

    {
        title:'Contact',
        link:'/#Contact'
    },

    {
        title:'Blog',
        link:'/#blog'
    },
]

const PrivacyLink =[
    {
        title:'Privacy Policy',
        link:'/#privacy'
    },

    {
        title:'Terms of Service',
        link:'/#terms'
    },

    {
        title:'Cookie Policy',
        link:'/#cookie'
    },

    {
        title:'Data Protection',
        link:'/#data'
    },
]

const InformationLink =[
    {
        title:'Site Map',
        link:'/#site'
    },

    {
        title:'Affiliate Program',
        link:'/#affiliate'
    },

    {
        title:'Job Openings',
        link:'/#job'
    },

    {
        title:'Community Involvement',
        link:'/#community'
    },
]

const ServiceLink =[
    {
        title:'Product Sales',
        link:'/#product'
    },

    {
        title:'consultation',
        link:'/#consult'
    },

    {
        title:'Training and Services',
        link:'/#training'
    },

    {
        title:'Subscription Plan',
        link:'/#subscription'
    },
]


const FooterImg = {
    backgroundImage: `url(${footerImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat:'no-repeat',
    height:'100%',
    width:'100%',
}

const Footer = () => {

  return (
    <>
    <span id='contact'></span>
    <div style={FooterImg} className='text-white min-h-[400px]'>
        <div className="container pt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
            
            <div>
                <h1 className='text-2xl font-semibold text-primary'>
                    COFFEE
                </h1>
            </div>

            <div className='flex flex-col items-start space-y-2'>
                <h1 className='text-xl font-medium p-2 text-black/90'>PRIVACY</h1>
                <ul>
                    {
                        PrivacyLink.map((data, index)=>(
                            <li key={index}>
                                <a href={data.link} className='p-2 hover:scale-105 inline-block duration-200'>{data.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className='flex flex-col items-start space-y-2'>
                <h1 className='text-xl font-medium p-2 text-black/90'>QUICK LINKS</h1>
                <ul>
                    {
                        FooterLinks.map((data, index)=>(
                            <li key={index}>
                                <a href={data.link} className='p-2 hover:scale-105 inline-block duration-200'>{data.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className='flex flex-col items-start space-y-2'>
                <h1 className='text-xl font-medium p-2 text-black/90'>SERVICES</h1>
                <ul>
                    {
                        ServiceLink.map((data, index)=>(
                            <li key={index}>
                                <a href={data.link} className='p-2 hover:scale-105 inline-block duration-200'>{data.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className='flex flex-col items-start space-y-2'>
                <h1 className='text-xl font-medium p-2 md:text-black/90 sm:text-black/90 '>INFORMATION</h1>
                <ul>
                    {
                        InformationLink.map((data, index)=>(
                            <li key={index}>
                                <a href={data.link} className='p-2 hover:scale-105 inline-block duration-200'>{data.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className='flex flex-col items-start space-y-2'>
                <h1 className='text-xl font-medium p-2 md:text-black/90 sm:text-black/90'>SOCIAL MEDIA</h1>
                <div className='flex gap-6'>
                    <a href="#">
                    <FaFacebook className='text-3xl inline-block hover:scale-105 duration-200'/>
                </a>

                <a href="#">
                    <FaInstagram className='text-3xl inline-block hover:scale-105 duration-200'/>
                </a>

                <a href="#">
                    <FaLinkedin className='text-3xl inline-block hover:scale-105 duration-200'/>
                </a>

                </div>
            </div>

            

        </div>
    </div>
    </>
  )
}

export default Footer