'use client'
import Image from "next/image"
import { useState } from "react"
import { SearchManifacturer } from "."
import { useRouter } from "next/navigation"

const SearchButton = ({ otherClasses }) => (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
        <Image src='/magnifying-glass.svg' width={40} height={40} alt='search icon' className="object-contain" />
    </button>
)
export default function SearchBar() {
    const [manufacturer, setManufacturer] = useState('')
    const [model, setModel] = useState('')

    const router = useRouter()


    const updateSearchParams = (manufacturer, model) => {
        const searchParams = new URLSearchParams(window.location.search)

        if (model) {
            searchParams.set('model', model)
        } else {
            searchParams.delete('model')
        }

        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer)
        } else {
            searchParams.delete('manufacturer')
        }

        const newPathName = `${window.location.pathname}?${searchParams.toString()}`
        router.push(newPathName, { scroll: false })

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (manufacturer === '' || model === '') alert('Fill in the search bar!')

        updateSearchParams(manufacturer.toLowerCase(), model.toLowerCase())
    }



    return (
        <form onSubmit={handleSubmit} className='searchbar'>
            <div className="searchbar__item">
                <SearchManifacturer setManufacturer={setManufacturer} manufacturer={manufacturer} />
                <SearchButton otherClasses='sm:hidden' />
            </div>

            <div className="searchbar__item">
                <Image src='/model-icon.png'
                    width={20}
                    height={20}
                    className='absolute ml-4'
                    alt='car model icon'
                />
                <input type="text"
                    name="model"
                    value={model}
                    onChange={e => setModel(e.target.value)}
                    placeholder='Tiguan'
                    className="searchbar__input"
                />

                <SearchButton otherClasses='sm:hidden' />
            </div>
            <SearchButton otherClasses='max-sm:hidden' />
        </form>
    )
}
