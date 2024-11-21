import React from 'react'
import { Button } from "../ui/button";
import SocialSection from '../Rankings/SocialSection';
import Partners from "../Partners/Partners";
import TourLogo from "../../../public/img/news/european-tour-new.png";
import SheduleImageComponent from '../SheduleImageComponent/SheduleImageComponent';


function Partner() {
  return (
    <>
      <div className='overflow-hidden md:ml-[54px] mx-[20px] 2xl:mx-[665px]  '>
       <div className="flex items-center justify-center md:mb-[200px] mb-[120px]">
         <div>
        <div className=' md:pt-[180px] pt-10 mb-5'>
          <span className='text-[#522367] font-brown-bold md:ml-0 text-[30px] mobile-md:ml-[20px] mobile-sm:ml-[50px] mobile-lg:ml-[10px] lg:text-[60px] md:text-[30px]'>
            Our Partners
          </span>

        </div>
        <div className='md:flex bg-gray-100'>
          <div className='xl:w-[560px] xl:h-[534px] lg:h-[530px] lg:w-[496px] md:mr-[20px] w-[355px] flex flex-col '>
            <div className='pt-[20px] mobile-lg:flex bg-white items-center justify-center'>
              <div>
              <img className='' src="https://www.legendstour.com/assets/images/partners/european-tour-new.png" />
              <h3 className="font-semibold text-black md:w-[464px]  text-lg md:text-xl md:mx-[48px] mx-[10px] md:mt-[-56px] font-brown-light xl:max-w-[450px]  lg:max-w-[380px] md:max-w-[280px] mobile-lg:max-w-[400px] mobile-md:max-w-[320px] mobile-md:ml-[20px] mobile-sm:max-w-[250px] mobile-sm:ml-[50px]">Legends Tour is a joint venture between the European Tour and Staysure Founder and Group CEO Ryan Howsam.</h3>
              <Button className=" font-brown-bold mr-[20px]  my-[25px] md:mx-0 h-[53px] md:w-[283px] w-full tracking-widest break-words text-lg leading-tight md:ml-[48px] ">
                MORE ABOUT THE TOUR
              </Button>
            </div>
            </div>
          </div>
          <div className='md:px-[20px]  grid grid-cols-2 md:gap-[30px] md:mr-0 '>
            <img className='xl:w-[260px] xl:h-[168px] lg:w-[222px] lg:h-[150px] mobile-lg:mt-[30px] mobile-md:mt-[30px] mobile-sm:mt-[30px] md:mt-0 h-[125px] ' src="https://www.legendstour.com/assets/images/partners/rolex.png" />
            <img className='xl:w-[260px] xl:h-[168px] lg:w-[222px] lg:h-[150px] mobile-lg:mt-[30px]  mobile-md:mt-[30px] mobile-sm:mt-[30px] md:mt-0  h-[125px] ' src="https://www.legendstour.com/assets/images/partners/staysure.png" />
            <img className='xl:w-[260px] xl:h-[168px] lg:w-[222px] lg:h-[150px] mobile-lg:mt-[30px]  mobile-md:mt-[30px] mobile-sm:mt-[30px] md:mt-0  h-[125px] ' src="https://www.legendstour.com/assets/images/partners/titleist_1ballingolf.png" />
            <img className='xl:w-[260px] xl:h-[168px] lg:w-[222px] lg:h-[150px] mobile-lg:mt-[30px] mobile-md:mt-[30px] mobile-sm:mt-[30px] md:mt-0  h-[125px] ' src="https://www.legendstour.com/assets/images/partners/sky-caddie.png" />
            <img className='xl:w-[260px] xl:h-[168px] lg:w-[222px] lg:h-[150px] mobile-lg:mt-[30px] mobile-md:mt-[30px] mobile-sm:mt-[30px] md:mt-0  h-[125px] ' src="https://www.legendstour.com/assets/images/partners/Glenmuir.png" />
            <img className='xl:w-[260px] xl:h-[168px] lg:w-[222px] lg:h-[150px] mobile-lg:mt-[30px] mobile-md:mt-[30px] mobile-sm:mt-[30px] md:mt-0  h-[125px] ' src="https://www.legendstour.com/assets/images/partners/Sunderland.png" />
          </div>
        </div>
        <div className='md:flex '>
          <div className='grid lg:gap-[40px] md:gap-[25px] grid-cols-2 md:grid-cols-3 mt-[30px] xl:mt-[40px]'>
            <img className='xl:w-[260px] xl:h-[168px] lg:w-[222px] lg:h-[156px] mb-5 h-[125px] ' src="https://www.legendstour.com/assets/images/partners/OFX.png" />
            <img className='xl:w-[260px] xl:h-[168px] lg:w-[222px] lg:h-[156px] mb-5 h-[125px] ' src="https://www.legendstour.com/assets/images/partners/luxe-scot.png" />
            {/*<img className='md:w-[260px] md:h-[168px] mb-5 h-[125px] ' src="https://www.legendstour.com/assets/images/partners/eagle-rare.png" />*/}
          </div>
        </div>
        </div>
       </div>
        <div className="xl:flex items-center justify-center">
        <div className=" mb-[180px] flex flex-col md:flex-row">

          <div className='flex flex-col-reverse lg:flex-row bg-white '>
            <div className='xl:max-w-[676px] lg:max-w-[516px] md:h-[470px]'>
              <p className='font-brown-bold lg:text-[40px] text-[24px] text-[#522367] font-semibold xl:mx-[80px] lg:mx-[40px] mx-[20px] mt-[80px] mb-[24px] '>
                Become a Legends Tour Sponsor
              </p>
              <p className='font-brown-light text-[15px] md:max-w-[600px] md:text-lg xl:mx-[80px] lg:mx-[40px] mx-[20px] mb-[96px]  font-200'>
                The Legends Tour partners with select businesses who share our passion for golf. We offer a range of bespoke sponsorship packages and have an array of creative ways in which you can activate your sponsorship whether as a tour partner or tournament partner. Contact our team to find out more.
              </p>
              <Button className=" w-full md:mx-0 h-[53px] md:ml-[25px] md:w-screen md:w-[283px] tracking-widest break-words text-lg leading-tight xl:mx-[80px] lg:mx-[40px] font-brown-bold">
                CONTACT OUR TEAM
              </Button>
            </div>

            <div className='md:w-[720px] md:h-[980px] lg:w-[483px] lg:h-[651px]'>
              <img className='w-full h-auto md:w-[720px] md:h-[980px] lg:w-[483px] lg:h-[651px]' src="https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2022/03/Untitled-design.png" alt="" />
            </div>
          </div>

        </div>
        </div>
        


      </div>

        <div className="relative w-full bg-white">
            <h1 className="block lg:hidden text-[24px] ml-[25px] font-brown-bold leading-none text-[#522367] pt-[20px] mb-[25px]">
                The greatest amateur experience in golf
            </h1>

            <img
                className="w-full md:h-full xl:w-screen xl:object-cover lg:h-[600px]"
                src="https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2022/01/Fourball.55jpg-e1641546791476.jpg"
                alt=""
            />


            <div className=" absolute hidden lg:block  top-0 left-0 md:w-1/2 md:h-full bg-black bg-opacity-40 flex items-center justify-center">
                <div className=" relative flex items-center justify-end md:w-full mr-[170px] xl:mt-[140px] lg:mt-[120px]">
                    <div className="relative lg:max-w-[500px] xl:max-w-[580px] px-8 "> {/* Ensure content is layered above */}
                        <h1 className="font-semibold lg:text-[40px] text-white font-brown-bold leading-none">
                            The greatest amateur experience in golf
                        </h1>
                        <p className="font-brown-light lg:text-[18px] text-white mt-[48px]">
                            Play in the Legends Experience, Celebrity Pro-Am or Championship Pro-Am alongside the Legends on some of the most iconic courses in the world with crowds lining the fairways and TV cameras in position.
                        </p>
                        <Button className="font-brown-light mt-[48px] lg:text-[18px] h-[53px] w-[283px] tracking-widest break-words text-lg leading-tight text-[#522367] bg-white z-30">
                            PLAYING EXPERIENCES
                        </Button>
                    </div>
                </div>
            </div>



            <div className="mx-[20px] block lg:hidden mt-4">
                <div className="font-brown-light text-lg md:ml-[10px] mt-4">
                    Play in the Legends Experience, Celebrity Pro-Am or Championship Pro-Am
                    alongside the Legends on some of the most iconic courses in the world with crowds
                    lining the fairways and TV cameras in position.
                </div>
                <Button className="mt-4 h-[53px] md:ml-[10px] md:w-[283px] w-full mb-[50px] tracking-widest break-words text-lg leading-tight bg-[#522367] font-brown-bold text-white">
                    PLAYING EXPERIENCES
                </Button>
            </div>
        </div>


        <Partners className='overflow-hidden' />

    </>
  )
}

export default Partner
