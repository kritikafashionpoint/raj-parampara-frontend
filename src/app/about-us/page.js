import { ArrowRight, Store } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import HeroSection_AU from './comps/HeroSection_AU'
import OurStory_AU from './comps/OurStory_AU'
import MissionVision_AU from './comps/MissionVission_AU'
import WhyChooseUs_AU from './comps/WhyChooseUs_AU'

export const metadata = {
    title: 'About Raj Parampara | Rajasthan Handicrafts & Traditional Store',
    description: 'Discover Raj Parampara, your trusted online marketplace for authentic Rajasthan handicrafts, Mojari, ethnic wear, jewellery, home décor, and traditional products delivered across India.'
}

export default function Page() {
    return (
        <>
            <HeroSection_AU />
            {/* <OurStory_AU /> */}
            {/* <MissionVision_AU /> */}
            {/* <WhyChooseUs_AU /> */}
        </>
    )
}
