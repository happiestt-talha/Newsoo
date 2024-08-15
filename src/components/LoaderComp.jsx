import { Spinner } from 'flowbite-react'
import React from 'react'

const LoaderComp = () => {
    return (
        <>
        <div className='flex min-h-screen min-w-full items-center justify-center  bg-opacity-50'>
            <Spinner color="purple" aria-label="Purple spinner " size={"xl"} />
        </div>

        </>
    )
}

export default LoaderComp