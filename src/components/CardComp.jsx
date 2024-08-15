import { Card } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const CardComp = (data) => {
    return (
        <>
            <Link to={data.url} target='_blank' rel="noopener noreferrer">
                <Card className="max-w-sm cursor-pointer" imgSrc={data.imgUrl?data.imgUrl:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {data.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {data.description}
                    </p>
                </Card>
            </Link>
        </>
    )
}

export default CardComp