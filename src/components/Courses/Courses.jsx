import React from 'react'
import CertificationCourses from './CertificationCourses'
import FullStackCourses from './FullStackCourses'
import Internships from './Internships'
import JobAssistanceCourses from './JobAssistanceCourses'
import NasscomCourses from './NasscomCourses'
import { LeftSideBar } from '../common/LeftSideBar'

const courses = [
    {
        name: 'FullStack Courses',
        component: <FullStackCourses />
    },
    {
        name: 'Certification Courses',
        component: <CertificationCourses />
    },
    {
        name: 'Internships',
        component: <Internships />
    },
    {
        name: 'JobAssistance',
        component: <JobAssistanceCourses />
    },
    {
        name: 'Nasscom Courses',
        component: <NasscomCourses />
    }
]
export const Courses = () => {
    return <LeftSideBar data={courses} />

}

