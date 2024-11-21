"use client";

import LegendsTourMembership from "@/components/Join/Join";
import Partners from "@/components/Partners/Partners";
import SocialSection from "@/components/Rankings/SocialSection";
import OverlayBanner from "@/components/OverlayBanner/OverlayBanner";
import PlayLegends from "@/components/PlayLegends/PlayLegends";
import Tournaments from "@/components/Tournaments/Tournaments";
import OverlayBannerCarousel from "@/components/OverlayBannerCarousel/OverlayBannerCarousel";

export default function Players() {
  return (
    <div className="bg-[#f2f2f2]">
      <LegendsTourMembership
        title="Play alongside Legends"
        description="The greatest amateur experience in golf"
        imageUrl="/img/experience/GettyImages-1403475817-e1714122004183.jpg"
        additionalText="An unrivalled and unique experience awaits amateur golfers playing alongside their golfing heroes in tournament conditions. Choose from one of three unique playing experiences – the one day Championship Pro-Am and Celebrity Pro-Am and the multi-day Legends Experience where you’ll play alongside Legends of golf, sport, media and entertainment at some of the best golf destinations in the world."
        useFixedBackground={false}
        useGradientOverlay={true} 
        useTallImage = {true}
      />
      <OverlayBanner
        title="Legends Experience"
        description="Play multiple competitive rounds during a Legends Tour event alongside the players, in front of the crowds and the media. You'll live the life of a tour player off-course too with hospitality in the Clubhouse, accommodation and your own caddy."
        imageUrl="/img/experience/GettyImages-1403475817-e1714122004183.jpg"
        button="Play Legends Experience"
        overlayPosition="left"
      />

      <OverlayBanner
        title="Celebrity Pro-Am"
        description="Play with personalities from the world of sport, business and media in the Celebrity Pro-Am. Play on your own or invite your golfing buddy to pair up with a celebrity and a golf Legends."
        imageUrl="/img/experience/SF1_0066_261472aa-8ff1-43c4-bb7d-f976d323d864.jpg"
        button="Play Celebrity Pro-Am"
        overlayPosition="right"
      />

      <OverlayBanner
        title="Championship Pro-Am"
        description="Play alongside the professionals at the Championship Pro-Am and experience an intimate day behind closed doors, complete with post-round hospitality and prize-giving. Play on your own or come as a team."
        imageUrl="/img/experience/LT-Webpage-Header-Image-2-5.png"
        button="Play Championship Pro-Am"
        overlayPosition="left"
      />

    

      <PlayLegends
        // title="Play with Legends in 2024"
        // description="Create lifelong golfing memories with exclusive playing experiences in the Legends Experience, Celebrity Pro-Am and Championship Pro-Am."
      />
      <LegendsTourMembership
        title="Experience More"
        description=""
        imageUrl="/img/experience/trump_international21.jpg"
        additionalText="With packages available from £1,000 per person you can experience a round alongside golfing legends at a world-class destination, inside the rope access to all facilities and first class hospitality.

Speak to our concierge team today to find out more and secure a once-in-a-lifetime golfing experience in 2024!"
        useFixedBackground={false}
        useGradientOverlay={false} 
      />
      <Tournaments />
      {/*  <div className="overflow-hidden">
      <SocialSection />
        </div>*/}
      <Partners />
    </div>
  );
}
