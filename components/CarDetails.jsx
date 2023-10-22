'use client'

import { generateCarImage } from '@/utils'
import { Transition, Dialog } from '@headlessui/react'
import Image from 'next/image'
import { Fragment } from 'react'

export default function CarDetails({ car, isOpen, close }) {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className='relative z-10' onClose={close}>
                    <Transition.Child
                        as={Fragment}
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        enter='ease-out duration-300'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </Transition.Child>

                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <Transition.Child
                                as={Fragment}
                                enterFrom='opacity-0'
                                enterTo='opacity-100'
                                enter='ease-out duration-300'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100'
                                leaveTo='opacity-0'
                            >
                                <Dialog.Panel className='max-h-[90vh] relative p-6 w-full overflow-y-auto max-w-lg transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5'>
                                    <button
                                        type='button'
                                        onClick={close}
                                        className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                                    >
                                        <Image src='/close.svg' width={20} height={20} className='object-contain' alt='close icon' />
                                    </button>

                                    <div className='flex flex-1 flex-col'>
                                        <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                                            <Image src={generateCarImage(car)} fill className="object-contain" priority alt='car photo' />
                                        </div>

                                        <div className='flex gap-3'>
                                            <div className='relative flex-1 w-full h-24 bg-primary-blue-100 rounded-lg'>
                                                <Image src={generateCarImage(car, 29)} fill className="object-contain" priority alt='car photo' />
                                            </div>
                                            <div className='relative flex-1 w-full h-24 bg-primary-blue-100 rounded-lg'>
                                                <Image src={generateCarImage(car, 33)} fill className="object-contain" priority alt='car photo' />
                                            </div>
                                            <div className='relative flex-1 w-full h-24 bg-primary-blue-100 rounded-lg'>
                                                <Image src={generateCarImage(car, 13)} fill className="object-contain" priority alt='car photo' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-1 flex-col gap-2'>
                                        <h2 className='font-semibold capitalize text-xl'>
                                            {car.make} {car.model}
                                        </h2>

                                        <div className='mt-3 flex flex-wrap gap-4'>
                                            {Object.entries(car).map(([key, value]) => (
                                                <div className='flex justify-between gap-5 w-full text-right' key={key}>
                                                    <h4 className='capitalize text-gray'>{key.split('_').join(' ')}</h4>
                                                    <p className='font-semibold text-black-100 capitalize'>{value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
