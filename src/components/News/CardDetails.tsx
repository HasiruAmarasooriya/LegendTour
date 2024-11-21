import React from 'react';
import Card from '../News/NewsPageCardView';
import L1IMG1 from '../../../public/img/news/JK-media-centre.jpg';
import L1IMG2 from '../../../public/img/news/hpimg2.jpg';
import L1IMG3 from '../../../public/img/news/newsimg1.jpg';


const NewsSection = () => {
    return (
        <div className="md:flex md:flex-row justify-center items-center p-[20px] md:space-x-[40px]">

            <Card
                imageSrc={L1IMG3}
                title="Sunningdale to host 2025 Senior Open"
                date="23 July 2024"
                link=""
                description=""
                buttonText=""
                buttonLink=""
            />


            <Card
                imageSrc={L1IMG1}
                title="BAKER - MAKE FLAGSHIP EVENT A MAJOR"
                date="23 July 2024"
                link="/sunningdale-page"
                description=""
                buttonText=""
                buttonLink=""
            />

            <Card
                imageSrc={L1IMG1}
                title="BAKER - MAKE FLAGSHIP EVENT A MAJOR"
                date=""
                link=""
                description="Sign up for the latest tournament and ticket news, offers and discounts"
                buttonText="SIGN UP"
                buttonLink="/testLink"
            />

        </div>
    );
};

export default NewsSection;
