import React from 'react'
import { DizajnData } from '../data/DizajnData'
import { InfoData } from '../data/InfoData'
import { SliderData } from '../data/SliderData'
import Dizajn from './Dizajn'
import Hero from './Hero'
import Technologia from './Technologia'

const HomePage = () => {
    return (
        <>
            <Hero slides={SliderData}/>
            <Technologia {...InfoData} />
            <Dizajn {...DizajnData}/>
        </>
    )
}

export default HomePage
