import React from 'react'
import Careers from './Careers'
import NewsAndEvents from './NewsAndEvents'
import OurTheme from './OurTheme'
import Testimonials from './Testimonials'
import TrainersProfile from './TrainersProfile'
import AboutYuva from './AboutYuva'
import { LeftSideBar } from '../common/LeftSideBar'
const aboutus = [
    {
        name: "About Yuvadev I Tech",
        component: <AboutYuva />
    },
    {
        name: "Trainers Profile",
        component: <TrainersProfile />
    },
    {
        name: "Our Theme",
        component: <OurTheme />
    },
    {
        name: "Careers",
        component: <Careers />
    },
    {
        name: "News And Events",
        component: <NewsAndEvents />
    },
    {
        name: "Testimonials",
        component: <Testimonials />
    },
]

export const About = () => {
    return <LeftSideBar data={aboutus} />
}

