import React from 'react'
import MainSection from '../MainSection'
import KnowBetter from '../KnowBetter'
import WhyChoose from '../WhyChoose'
import ChooseEntity from '../ChooseEntity'
import Doubts from '../Doubts'
import Footer from "../common/footer"
export default function home() {
    return (
        <>
            <MainSection />
            <KnowBetter />
            <WhyChoose />
            <ChooseEntity />
            <Doubts/>
            <Footer/>
        </>
    )
}
