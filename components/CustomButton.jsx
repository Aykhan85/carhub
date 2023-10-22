'use client'

import Image from "next/image"

export default function CustomButton({ title, type, handleClick, containerStyles, rightIcon, disabled = false }) {
    return (
        <button
            disabled={disabled}
            type={type}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className="flex-1">
                {title}
            </span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image src={rightIcon} fill alt='right arrow' className="object-contain" />
                </div>
            )}
        </button>
    )
}
