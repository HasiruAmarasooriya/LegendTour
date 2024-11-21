import React from 'react';
import Image from 'next/image';
import ParaImg1 from '../../../public/img/news/GettyImages-2180736975.jpg'
import ParaImg2 from '../../../public/img/news/GettyImages-2180743923.jpg'
import ParaImg3 from '../../../public/img/news/GettyImages-2180999077.jpg'


const NewsArticle = () => {
    return (
        <div className="flex items-center justify-center  xl:mr-[470px] lg:mr-[330px] p-4 ">
            <div className="max-w-full lg:max-w-[800px] bg-white p-4 md:p-8 items-center justify-center lg:mt-[100px] md:mt-[50px] mt-[30px]">
                {/*<h2 className="text-lg md:text-[30px] lg:text-[40px] text-[#522367] font-brown-bold leading-none mb-[16px] md:mb-[24px]">*/}
                {/*    The Farmfoods European Legends Links Championship came to an end following Chris Williams’ victory at Trevose Golf & Country Club*/}
                {/*</h2>*/}
                {/*<h2 className="text-base md:text-xl lg:text-2xl font-semibold text-black mb-4 font-brown-light">*/}
                {/*    Williams claims season-opening victory at Trevose*/}
                {/*</h2>*/}
                <div className="flex items-center justify-center">
                    <Image
                        src={ParaImg1}
                        alt=""
                        className="w-full h-[240px] md:w-[550px] md:h-[367px] object-cover  "
                    />
                </div>
                <p className="text-[15px] lg:text-[18px] text-black mb-[15px] md:mb-[26px] font-brown-bold mt-[50px]">
                    Peter Baker                </p>
                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] md:mb-[26px] font-brown-bold">
                    This week’s tournament host is also the reigning MCB Road to Mauritius number one having picked up four victories last season. He continued that form into this year with a win at the season-opening Barbados Legends hosted by Ian Woosnam, and he’s added a runner-up finish and a pair of 3rd places to sit fourth on the season-long Order of Merit with three events still to play. He needs a big result this week if he’s to close the gap on Adilson da Silva at the top of the rankings.                </p>

                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] md:mb-[26px] font-brown-bold">
                    “It’s going to be tough to beat him,” said the former Ryder Cup player. “He’s quite a way ahead and you need a great finish to catch him because he’s so consistent. He’s a great player, so it’s going to be difficult. It’s going to take something very special for me to get past him, but we’ll try our best, starting this week. It’s been a good battle. I’ve played nicely and obviously he’s played well. If I can take it to the last event, that’d be great.”
                </p>

                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] md:mb-[26px] font-brown-bold">
                    A high finish this week would go a long way achieving that, and Baker knows the five par-5s and handling the different grass on the South Course are going to be critical: “I think the par-5s will be a big key to winning this week, and the grass is slightly different here. It’s a bit fluffier, so you play a little bit more of like a bunker shot if it’s lying deep in the long grass. It can be quite tricky. If you hit the fairways this week, you can attack the flags and try and make your score there. But the par-5s are going to be key, I think.”
                </p>
                <div className="flex items-center justify-center">
                    <Image
                        src={ParaImg2}
                        alt=""
                        className="w-full h-[240px] md:w-[550px] md:h-[367px] object-cover  "
                    />
                </div>

                <p className="text-[15px] lg:text-[18px] text-black mb-[15px] md:mb-[26px] font-brown-bold mt-[50px]">
                    Patrik Sjöland               </p>

                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] mt-[15px] md:mb-[26px] font-brown-bold">
                    The Swede claimed his maiden Legends Tour title at this event last year on the way to finishing 5th on the MCB Road to Mauritius and being named the Barry Lane Rookie of the Year. He’s enjoying another good season after losing to Da Silva in a play-off at the OFX Irish Legends, finishing tied-4th in the Legends Open de France and tied-10th last time out at the Sergio Melpignano Senior Italian Open.                </p>


                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] md:mb-[26px] font-brown-bold">
                    “It’s very special, of course, and it’s always nice to come back as a defending champion,” said the man who’s also won twice on the DP World Tour. “I’ve really enjoyed it so far, and the weather is beautiful, so it’s nice to be back.                </p>
                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] md:mb-[26px] font-brown-bold">“It was strange really, because I only started playing again last year after seven years off, so the win came a lot faster than I expected. It boosted me up on the MCB Road to Mauritius, and then I had a good finish at the last tournament in Mauritius as well, so I was really happy.”</p>
                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] md:mb-[26px] font-brown-bold">Sjöland handled the conditions better than anyone else last year, but the challenge is setting up a bit differently 12 months later: “The course is playing really soft this year, a lot softer than last year. Plus, it’s the opposite wind than what we had last year. There’s going to be a lot about spin control on your second shots into the greens because they are soft. It’s a fun course to play.”</p>
                <div className="flex items-center justify-center">
                    <Image
                        src={ParaImg3}
                        alt=""
                        className="w-full h-[240px] md:w-[550px] md:h-[367px] object-cover  "
                    />
                </div>

                <p className="text-[15px] lg:text-[18px] text-black mb-[15px] md:mb-[26px] font-brown-bold mt-[50px]">
                    Andrew Marshall              </p>


                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] mt-[15px] md:mb-[26px] font-brown-bold">
                    Marshall has impressed on the Legends Tour since turning 50 in late August of last year, with seven top-10s in 16 starts. He’s knocking on the door of a breakthrough win and has come closer in recent events with a solo 2nd at the HSBC India Legends Championship and tied-3rd a couple of weeks ago in Italy. That’s taken him to 8th on the MCB Road to Mauritius, with the top 10 at the end of the season qualifying for three of next year’s majors – the Senior Open, US Senior Open and Senior PGA Championship.               </p>


                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] md:mb-[26px] font-brown-bold">
                    “I’m very happy with my season so far,” said the Englishman. “It’s the first time I get a full run of the season, having played four events at the end of last year. This year has been amazing. I’ve been to some wonderful places and played with some lovely people. I’ve played quite well as well, which is always nice. I think I’ve learned to stop worrying about scoring. You just go out, play and enjoy, and that’s all I’ve done.”                </p>

                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] md:mb-[26px] font-brown-bold">
                    So what does Marshall think it will take to emulate Patrik Sjöland and get his first trophy this week? “You’ve probably got to be under 68 a day – unless the wind blows. You need to be fairly long, and quite accurate too. The greens are fairly big, but very soft. There are some quite long holes out there and you can cut some corners. The scoring has come down a little bit the last few weeks. It’s been a bit of an eye opener. If it’s not windy here, it’ll get murdered.”                </p>

            </div>
        </div>
    );
};

export default NewsArticle;
