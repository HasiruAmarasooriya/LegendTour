'use client'

import React, { useEffect } from 'react';
import SocialMediaHeader from './SocialMediaHeader';

const SocialSection = () => {
  useEffect(() => {
    // Load Instagram Embed Script
    const instagramScript = document.createElement('script');
    instagramScript.src = 'https://www.instagram.com/embed.js';
    instagramScript.async = true;
    document.body.appendChild(instagramScript);

    // Load Twitter Embed Script
    const twitterScript = document.createElement('script');
    twitterScript.src = 'https://platform.twitter.com/widgets.js';
    twitterScript.async = true;
    document.body.appendChild(twitterScript);

    // Load Facebook SDK
    

    const fbScript = document.createElement('script');
    fbScript.src = 'https://connect.facebook.net/en_US/sdk.js';
    fbScript.async = true;
    document.body.appendChild(fbScript);

    return () => {
      // Cleanup scripts if necessary
      document.body.removeChild(instagramScript);
      document.body.removeChild(twitterScript);
      document.body.removeChild(fbScript);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <SocialMediaHeader />
      <div className="flex lg:py-[50px] sm:py-[10px] justify-center lg:gap-20 sm:gap-10 w-full flex-wrap min-h-screen">
        <div className="flex justify-center w-[500px] h-[600px]  bg-white p-4">
          {/* Instagram Embed */}
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/C74XOmKNW2N/"
            data-instgrm-version="14"
            style={{ width: '100%', maxWidth: '540px', height: '100%' }}
          >
            <a href="https://www.instagram.com/p/C74XOmKNW2N/"></a>
          </blockquote>
        </div>
        <div className="flex justify-center w-[500px]  border bg-white p-4">
          {/* Twitter Embed */}
          <blockquote className="twitter-tweet" data-height="600">
            <p lang="en" dir="ltr">
              UPDATED MCB Road to Mauritius standings: Scott Hend extends his lead at the top, Angel Cabrera moves comfortably into the top ten and James Kingston rises to 4th place. 
              <a href="https://twitter.com/hashtag/euLegendsTour?src=hash&amp;ref_src=twsrc%5Etfw">#euLegendsTour</a> 
              <a href="https://twitter.com/hashtag/PLMP?src=hash&amp;ref_src=twsrc%5Etfw">#PLMP</a> 
              <a href="https://twitter.com/hashtag/MCB?src=hash&amp;ref_src=twsrc%5Etfw">#MCB</a> 
              <a href="https://twitter.com/hashtag/MCBRoadtoMauritius?src=hash&amp;ref_src=twsrc%5Etfw">#MCBRoadtoMauritius</a> 
              <a href="https://twitter.com/hashtag/OrderofMerit?src=hash&amp;ref_src=twsrc%5Etfw">#OrderofMerit</a> 
              <a href="https://twitter.com/hashtag/golf?src=hash&amp;ref_src=twsrc%5Etfw">#golf</a> 
              <a href="https://twitter.com/hashtag/points?src=hash&amp;ref_src=twsrc%5Etfw">#points</a> 
              <a href="https://t.co/i9z6w91Txe">pic.twitter.com/i9z6w91Txe</a>
            </p>
            &mdash; Legends Tour (@euLegendsTour) <a href="https://twitter.com/euLegendsTour/status/1802425316150751692?ref_src=twsrc%5Etfw">June 16, 2024</a>
          </blockquote>
          <script async src="https://platform.twitter.com/widgets.js" ></script>
        </div>
        {/* <div className="flex justify-center items-center w-[500px] h-[600px] border bg-white p-4">
          <div
            className="fb-post"
            data-href="https://www.facebook.com/facebook/posts/10157477664331729"
            data-width="500"
            style={{ height: '100%' }}
          ></div>
        </div> */}
      </div>
    </div>
  );
};

export default SocialSection;