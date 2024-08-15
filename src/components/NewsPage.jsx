import React, { useEffect, useState } from 'react'
import Card from './CardComp'
import axios from 'axios'
import LoaderComp from './LoaderComp'

const NewsPage = (props) => {

    //eslint-disable-next-line
    const [data, setData] = useState([])
    //eslint-disable-next-line
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            // const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=0dd418eda768429cba391f6cab5450d9&page=${page}`)
            const res = await axios.get(`https://newsapi.org/v2/everything?q=${props.category}&apiKey=0dd418eda768429cba391f6cab5450d9&page=${page}&pagesize=20`)

            setData(res.data.articles)
            setLoading(false)
            console.log(res.data.articles)
        }
        fetchData()
    }, [page, props.category])


    const handleLoadMore = () => {
        window.scrollTo(0, 0)
        setPage(page + 1)
    }
    return (
        <>
            <h3 className='text-center text-3xl font-bold bg-gradient-to-r from-zinc-600 to-slate-600 capitalize'>{props.category}</h3>
            <div className='flex flex-wrap gap-5 px-9 pt-9 bg-gradient-to-r from-zinc-600 to-slate-600'>
                {
                    loading ? <LoaderComp /> :
                        data.map((item) => {
                            return (

                                <Card
                                    key={item.url}
                                    imgUrl={item.urlToImage}
                                    title={item.title}
                                    description={item.description}
                                    url={item.url}
                                />
                            )
                        })
                }

            </div>
            <div className='flex py-9 justify-center bg-gradient-to-r from-zinc-600 to-slate-600'>
                <button className='bg-blue-500 text-white px-3 py-2 rounded-md' onClick={handleLoadMore}>Load More</button>
            </div>
        </>
    )
}

export default NewsPage