import React from 'react'
import { BsShieldFillCheck } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { RiHeart2Fill } from 'react-icons/ri'

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex w-6/12 md:w-[20vmax] flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-2 text-white text-sm md:w-9/12 ">{subtitle}</p>
    </div>
  </div>
)

const Services = () => {
  return (
    <div className="flex w-full justify-center items-center flex-col md:flex-row gradient-bg-services">
      <div className="flex md:flex-row flex-col items-center w-full p-2">
        <div className="flex-1 flex flex-col justify-start items-start pl-10">
          <h1 className="text-white text-3xl py-2 text-gradient">
            Services that we <br />
            Continue To Improve
          </h1>
        </div>
        <div className="flex-1 w-full flex flex-col justify-start lg:flex-row lg:items-stretch items-center p-2 gap-2">
          <ServiceCard
            color="bg-[#2952e3]"
            title="Security Garaunteed"
            icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
            subtitle="Security is guranteed. We alwas Maintain Our Privacy and Maintain the Quality Of Our Product"
          />
          <ServiceCard
            color="bg-[#8945f8]"
            title="BEst Exchange Rates"
            icon={<BiSearchAlt fontSize={21} className="text-white" />}
            subtitle="Security is guranteed. We alwas Maintain Our Privacy and Maintain the Quality Of Our Product"
          />
          <ServiceCard
            color="bg-orange-500"
            title="Fasted Transations"
            icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
            subtitle="Security is guranteed. We alwas Maintain Our Privacy and Maintain the Quality Of Our Product"
          />
        </div>
      </div>
    </div>
  )
}

export default Services
