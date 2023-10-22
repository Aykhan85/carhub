import Image from 'next/image'
import Link from 'next/link'
import { CustomButton } from '@/components'


export default function Navbar() {
    return (
        <header className='w-full absolute z-10'>
            <nav className='max-w-[1440px] mx-auto flex justify-between items-center px-6 sm:px-16 py-4'>
                <Link href='/' className='flex justify-center items-center'>
                    <Image
                        src='/logo.svg'
                        width={118}
                        height={18}
                        alt='Car hub logo'
                        className='object-contain'
                    />
                </Link>

                <CustomButton
                    type='button'
                    title='Sign in'
                    containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                />
            </nav>
        </header>
    )
}
