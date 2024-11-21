import HeadSection from '@/components/Common/headSection';
import MiddleSection from '@/components/Common/middleSection';
import CardContainer from '@/components/Common/cardContainer';
import CardCarousel from '@/components/Common/cardCarousel';
import ButtomSection from '@/components/Common/buttomSection';
import Partners from '@/components/Partners/Partners';
import Header from '@/components/Carousel/Header';
import Cards from '@/components/cards/page';
import HomeImageSection from '@/components/Common/homeImageSection';
import NewsSection from '@/components/News/HomePageCardDetails';
// import SocialSection from '@/components/Rankings/SocialSection';
import Club from '@/components/Common/homePageComponent';
import SeniorOpen from '@/components/SeniorOpen/SeniorOpen';
import PlayLegendsHomeSection from "../components/Common/PlayLegendsHomeSection";
export default function Home() {
  return (
    <div className='overflow-hidden'> 
      <main className="bg-[#f2f2f2]">
        <Header />
        <SeniorOpen />
        <HomeImageSection/>
        <Cards />
        <NewsSection />
        <PlayLegendsHomeSection/>

        <HeadSection />
        <MiddleSection />
        <CardContainer />
        <CardCarousel />
        <ButtomSection />
        {/*<SocialSection/>*/}
        <Club/>
        <Partners />
      </main>
    </div>
  );
}
