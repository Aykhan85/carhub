'use client'

import { updateSearchParams } from "@/utils"
import { useRouter } from "next/navigation"
import { CustomButton } from "."

export default function ShowMore({ pageNumber, isNext }) {
    const router = useRouter()
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10

        const newPathName = updateSearchParams('limit', newLimit.toString());

        router.push(newPathName, { scroll: false })
    }
    return (
        <div className="w-full gap-5 mt-10 flex-center">
            {!isNext && (
                <CustomButton
                    title='Show More'
                    type='button'
                    containerStyles='bg-primary-blue rounded-full text-white'
                    handleClick={handleNavigation}
                />
            )}
        </div>
    )
}
