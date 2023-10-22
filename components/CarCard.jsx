'use client'
import { CarDetails, CustomButton } from "."
import { calculateCarRent, generateCarImage } from "@/utils"
import Image from "next/image";
import { useState } from "react";

export default function CarCard({ car }) {
    const { city_mpg, year, make, model, transmission, drive } = car
    const carRent = calculateCarRent(city_mpg, year);
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>

            <p className="flex mt-6 text-[32px] font-extrabold">
                <span className="self-start text-[14px] font-semibold">
                    $
                </span>
                {carRent}
                <span className="self-end text-[14px] font-medium">
                    /day
                </span>
            </p>

            <div className="relative w-full h-40 my-3 ">
                <Image src={generateCarImage(car)} fill className="object-contain" priority alt="car" />
            </div>

            <div className="relative flex w-full mt-2">
                <div className="flex justify-between w-full group-hover:invisible text-gray">
                    <div className="flex flex-col items-center justify-center gap-2 ">
                        <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
                        <p className="text-[14px]">
                            {transmission === 'a' ? 'Automatic' : 'Manual'}
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 ">
                        <Image src='/tire.svg' width={20} height={20} alt='tire' />
                        <p className="text-[14px]">
                            {drive.toUpperCase()}
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 ">
                        <Image src='/gas.svg' width={20} height={20} alt='gas' />
                        <p className="text-[14px]">
                            {city_mpg} MPG
                        </p>
                    </div>
                </div>

                <div className="car-card__btn-container ">
                    <CustomButton
                        type='button'
                        title='View More'
                        containerStyles='w-full py-[16px] rounded-full bg-primary-blue text-white text-[14px] font-bold'
                        rightIcon='/right-arrow.svg'
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>

            <CarDetails isOpen={isOpen} close={() => setIsOpen(false)} car={car} />
        </div>
    )
}
