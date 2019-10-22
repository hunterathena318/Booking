import React from 'react'
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Service from '../components/Service';

export default function Home() {
    return (
        <>
         <Hero>
             <Banner 
                title="Luxstay Room Vip "
                subtitle="This is room vip for everyone with $100 starting one day"
             >
                 <Link to="/rooms" className="btn-primary">
                     our rooms
                 </Link>
            </Banner>
        </Hero>
         <Service/>
         </>

    )
}
