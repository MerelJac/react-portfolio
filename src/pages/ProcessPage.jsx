import React from "react";
import { ProcessCard } from "../components/ProcessCard";
import saas from '../images/all-images/comp.png'
import phone from '../images/all-images/phone.png'
import ScrollAnimation from "react-animate-on-scroll";

export const ProcessPage = () => {
    return (
        <>
        <section className="text-creme">
        <ScrollAnimation animateIn="fadeIn"> 
        <h1 className="font-primary text-lg flex justify-center text-center p-[20px]">Design, Develop, Deploy</h1>
        <section className="p-4 justify-around flex flex-col contents-center items-center sm:flex-row">
            <ProcessCard title="SaaS" text="Builing user-centric Software as a Service." alt="SAAS" src={saas}/>
            <ProcessCard title="Web & Mobile Apps" text="Dynamic and scalable applications." alt="Apps" src={phone} />
        </section>
        </ScrollAnimation>
        </section>
        </>
    ) 
}