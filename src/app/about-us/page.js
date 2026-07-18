import { ArrowRight, Store } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import HeroSection_AU from './comps/HeroSection_AU'
import MissionVission_AU from './comps/MissionVission_AU'
import FaqSection_AU from './comps/FaqSection_AU'
import WhyChooseUs_AU from './comps/WhyChooseUs_AU'
import {  about_us_meta } from '../seo/meta_content'

export const metadata = {
    title: about_us_meta.title,
    description: about_us_meta.description
}

export default function Page() {
    return (
        <>
            <HeroSection_AU />
            <WhyChooseUs_AU />
            <MissionVission_AU />
            <FaqSection_AU />
        </>
    )
}
