import React from 'react';

const SocialMediaHeader = () => {
  return (
    <div className="flex w-full flex-col items-center py-8 px-4 sm:px-8 md:px-16 lg:px-32">
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4 text-center">Follow Legends Tour</h2>
      <div className="flex w-full flex-col sm:flex-row justify-center gap-8 sm:gap-16 md:gap-32 lg:gap-64 py-10 items-center">
        <div className="flex items-center">
          <img src="https://www.legendstour.com/assets/images/icons/instagram.png" alt="Instagram" className="w-6 h-6 sm:w-8 sm:h-8 m-2" />
          <a href="https://www.instagram.com/eulegendstour" className="text-xl sm:text-2xl md:text-3xl text-custom-600">@eulegendstour</a>
        </div>
        <div className="flex items-center">
          <img src="https://www.legendstour.com/assets/images/icons/twitter.png" alt="Twitter" className="w-6 h-6 sm:w-8 sm:h-8 m-2" />
          <a href="https://twitter.com/euLegendsTour" className="text-xl sm:text-2xl md:text-3xl text-custom-600">@euLegendsTour</a>
        </div>
        <div className="flex items-center">
          <img src="https://www.legendstour.com/assets/images/icons/facebook.png" alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8 m-2" />
          <a href="https://www.facebook.com/eulegendstour" className="text-xl sm:text-2xl md:text-3xl text-custom-600">euLegendsTour</a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaHeader;
