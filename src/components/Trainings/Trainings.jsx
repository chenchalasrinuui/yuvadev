import React from 'react'
import NewBatches from './NewBatches'
import PlacementRegistration from './PlacementRegistration'
import Jobassistance from './Jobassistance'
import { LeftSideBar } from '../common/LeftSideBar'

const trainings = [
    {
        name: "New Batches",
        component: <NewBatches />
    },
    {
        name: "Placement Registration",
        component: <PlacementRegistration />
    },
    {
        name: "Job Assistance",
        component: <Jobassistance />
    }
]
export const Trainings = () => {
    return <LeftSideBar data={trainings} />
}

