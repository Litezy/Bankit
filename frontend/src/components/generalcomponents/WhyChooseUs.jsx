import React from 'react';
import img1 from '../../assets/images/chooseus1.png'
import img2 from '../../assets/images/chooseus2.png'
import img3 from '../../assets/images/chooseus3.png'
import img4 from '../../assets/images/chooseus4.png'
import RoundOutlineButton from './RoundOutlineButton';

const WhyChooseUs = () => {

    const ChooseUsOptions = [
        {
            img: img1,
            title: `Faster Time to Market`,
            content1: 'No-Code & Low-Code solutions to launch in weeks, not months.',
            content2: 'Pre-built SDKs, APIs, and white-label UIs for a seamless experience.'
        },
        {
            img: img2,
            title: `Compliance Simplified`,
            content1: 'We handle licensing, KYC, fraud prevention, and regulatory compliance, so you don’t have to.',
            content2: 'Secure, bank-grade infrastructure built for trust and scale.'
        },
        {
            img: img3,
            title: `Flexible & Customizable`,
            content1: 'Design financial products your way with full control over fees, terms, and user experience.',
            content2: 'Seamlessly integrates into your platform, keeping your brand at the forefront.'
        },
        {
            img: img4,
            title: `Built for Scale`,
            content1: 'Powering startups, fintech innovators, and enterprises alike.',
            content2: 'A high-performance, secure, and compliant platform that grows with you.'
        },
    ]

    return (
        <div className='w-full lg:pb-20 pb-10 lg:pt-40 pt-10 flex items-center text-[var(--color-dark)] justify-center'>
            <div className="flex items-center flex-col gap-5">
                <RoundOutlineButton text={`Seamless Solution`}/>
                <div className="text-center text-[39px] leading-[1.2] font-semibold">Why Choose Us</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {ChooseUsOptions.map((item, i) => {
                        const isEven = i % 2 === 0
                        return (
                            <div key={i} className="w-full bg-white cursor-pointer group relative flex items-center flex-col gap-3 py-5 px-3 rounded-md overflow-hidden">
                                
                                <div className="relative z-10 ">
                                    <img src={item.img} alt="" className="mb-3" />
                                </div>
                                <div className="relative z-10 flex items-center flex-col gap-3  ">
                                    <div className="text-[16px] md:text-[19px] leading-[1.2] font-semibold">{item.title}</div>
                                    <div className="text-center text-[13px] md:text-[16px] leading-[1.2]">{item.content1}</div>
                                    <div className="text-center text-[13px] md:text-[16px] leading-[1.2]">{item.content2}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;