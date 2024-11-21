import React from 'react';
import Image from 'next/image';
import ParaImg1 from '../../../public/img/news/newsParaImg1.jpg'
import ParaImg2 from '../../../public/img/news/Prize-presentation.jpg'


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
                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] md:mb-[26px] font-brown-bold">
                    Former Ryder Cup player Joakim Haeggman won by two shots, after compiling rounds of 65-70-72 for a -9 total, at Jaypee Greens, just outside New Delhi. <br/>
                    The Swede started with day with a one-shot lead over tournament host Jeev Milkha Singh, but the pair were locked on -8 after Haeggman dropped a shot at the opening hole. It looked like that would be the start of an almighty tussle, but the overnight leader responded brilliantly with three birdies in the next four holes, while Singh bogeyed the 3rd and 6th. That enabled Haeggman to open up a five-shot lead after six holes.
                </p>

                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] md:mb-[26px] font-brown-bold">
                    Haeggman, whose first Legends Tour win came at the 2022 MCB Tour Championship Seychelles, rattled off eight pars in a row from the 6th, but he gave the chasing pack hope with back-to-back bogeys on 14 and 15. That cut his advantage to just two shots over Singh, who birdied the 14th, and Andrew Marshall, who closed with a brilliant bogey-free 65 to post the clubhouse target of -7.
                </p>

                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] md:mb-[26px] font-brown-bold">
                    Haeggman and Singh reached the 18th tee on -9 and -7 respectively, meaning the tournament was still in the balance. Unfortunately for our tournament host, he found the water with his tee shot, and that left the stage clear for ‘Heggie’ to seal an emotional win with a closing par.
                </p>
                <div className="flex items-center justify-center">
                <Image
                    src={ParaImg1}
                    alt=""
                    className="w-full h-[240px] md:w-[550px] md:h-[367px] object-cover  "
                />
                </div>

                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] mt-[15px] md:mb-[26px] font-brown-bold">
                    “This means a lot,” said the champion, who climbs to 5th on the MCB Road to Mauritius. “You know, you come here every week, you try to win, and for me to get one more tournament under the belt means a lot. I’ve had a really good, solid season, but I haven’t had that peak result. So after three top-20s more or less in the majors this year, this was really nice to get done and feel like I can relax a bit more coming into the finish of the season now.
                </p>

                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] md:mb-[26px] font-brown-bold">
                    “Overall, I’ve been playing well. I’ve been driving the ball decent, I’ve been hitting the greens and haven’t got in that much trouble all week. I can remember one bad swing today on 15, which almost made the whole tournament slip out of my hands. But other than that, I’ve been consistent hitting greens. I felt like I’ve been in control.”
                </p>
                <div className="flex items-center justify-center">
                    <Image
                        src={ParaImg2}
                        alt=""
                        className="w-full h-[240px] md:w-[550px] md:h-[367px] object-cover  "
                    />
                </div>

                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] mt-[15px] md:mb-[26px] font-brown-bold">
                    Haeggman made a phone call immediately after he came off the final green, and it was an emotional response when he revealed who he was talking to: “That was my son. He’s 14 years old and he’s been up early every morning trying to see how I’ve played. Yesterday morning, it was 5am. I think it was 4.45am today. I’m so happy that we got the win for him.”                </p>

                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] md:mb-[26px] font-brown-bold">
                    Marshall surged through the field to finish alone in 2nd with his round of -7, which tied the best of the week with Haeggman’s opening round. The Englishman’s effort featured five birdies and an eagle at the par-5 12th. He’s now up to 10th on the MCB Road to Mauritius.                </p>

                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] md:mb-[26px] font-brown-bold">
                    Singh’s closing triple bogey for a 76 saw him fall into a tie for 3rd alongside Thomas Gögele on -4. The German had six birdies, including one at the 18th, in his 68.
                </p>

                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] md:mb-[26px] font-brown-bold">
                    Emanuele Canonica, Carl Suneson, Simon Griffiths and Greig Hutcheon finished in a tie for 5th on -3, with Mikael Lundberg, Clark Dennis, Adilson da Silva and Jyoti Randhawa a shot further back in tied-9th.
                </p>

            </div>
        </div>
    );
};

export default NewsArticle;
