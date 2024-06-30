import React from 'react'
import ClassRoomTraining from './ClassRoomTraining'
import OnlineTraining from './OnlineTraining'
import Internships from './Internships'
import RealTimeProjects from './RealTimeProjects'
import WeekendTraining from './WeekendTraining'
import Workshops from './Workshops'
import CorporateTraining from './CorporateTraining'
import { LeftSideBar } from '../common/LeftSideBar'

export const Services = () => {
    const services = [
        {
            name: "ClassRoom Training",
            component: <ClassRoomTraining />
        },
        {
            name: "Online Training",
            component: <OnlineTraining />
        }, {
            name: "Corporate Training",
            component: <CorporateTraining />
        }, {
            name: "Weekend Training",
            component: <WeekendTraining />
        },
        {
            name: "InternShips",
            component: <Internships />
        },
        {
            name: "Workshops",
            component: <Workshops />
        },
        {
            name: "Realtime Projects",
            component: <RealTimeProjects />
        }
    ]
    return <LeftSideBar data={services} />
}

