'use client'
import { useState, Fragment } from "react"
import { useRouter } from "next/navigation"
import { Listbox, Transition } from '@headlessui/react'
import Image from "next/image"
import { updateSearchParams } from '@/utils'

export default function CustomFilter({ title, options }) {
    const router = useRouter()
    const [selected, setSelected] = useState(options[0])

    const handleUpdateSearchParams = ({ value }) => {
        const newPathName = updateSearchParams(title.toLowerCase(), value.toLowerCase());
        router.push(newPathName, { scroll: false })


    }
    return (
        <div className="w-fit">
            <Listbox
                value={selected}
                onChange={e => {
                    setSelected(e),
                        handleUpdateSearchParams(e)
                }}
            >
                <div className="relative z-10 w-fit">
                    <Listbox.Button className='custom-filter__btn'>
                        <span className="block truncate">{selected.title}</span>
                        <Image
                            src='/chevron-up-down.svg'
                            width={20}
                            height={20}
                            alt='chevron up an down'
                            className="object-contain ml-4"
                        />
                    </Listbox.Button>


                    <Transition
                        as={Fragment}
                        leave='ease in duration-100 transition'
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className='custom-filter__options'>
                            {options.map(option => (
                                <Listbox.Option
                                    className={({ active }) => `
                                relative cursor-default select-none py-2 px-4 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}
                                `}
                                    key={option.title}
                                    value={option}>
                                    {({ selected }) => (
                                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{option.title}</span>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}
