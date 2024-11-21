// app/players/page.js
import LegendsTourMembership from "@/components/Join/Join";
import Players from '@/components/Players/players';
export default function PlayersPage() {
    return (
      <div className='bg-[#f2f2f2] '>
        <LegendsTourMembership
        title="Meet the Legends from Sport, Media and Business"
        description="Experience an unforgettable day with the Championship Pro-Am, Luxe Scot Celebrity Pro-Am or the Legends Club Experience."
        imageUrl="/img/players/iamge3.jpg"
        additionalText="From Ryder Cup Captains, Major winners through to personalities from sports, business and media the Legends Tour provides the greatest amateur experience in golf giving you a unique chance to spend quality time alongside these Legends."
        useFixedBackground={false}
        useGradientOverlay={true} 
        useTallImage = {true}
      />
        <Players />
      </div>
    );
  }
  