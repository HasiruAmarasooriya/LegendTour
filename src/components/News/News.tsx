import React from 'react'
import Header from '../../../public/img/news/LT-Webpage-Header-Image-15.png'
import NewsHead from "../News/NewsHead"
import FirstCardLine from "../News/FirstCardLine"
import CardDetails from "../News/CardDetails"
import Partners from '@/components/Partners/Partners';



import Image from 'next/image';


function News() {
    return (
        <div className='font-brown-regular overflow-hidden bg-[#f2f2f2]'>
            <NewsHead/>
            <CardDetails/>
            <Partners/>

        </div>
    )
}

export default News
