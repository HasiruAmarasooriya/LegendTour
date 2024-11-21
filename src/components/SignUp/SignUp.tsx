import React from "react";

function SignUp() {
  return (
    <div>
      <div className="flex items-center justify-center  text-center mx-auto md:mx-0 md:text-left bg-[#4c1e61]  pt-[27px] pb-[22px] mb-2">
        <span className="font-brown-regular  xl:mr-[860px] lg:mr-[500px] md:mr-[320px] mobile-sm:ml-[25px] mobile-lg:ml-[35px] text-left mx-auto lg:mx-4 text-white md:text-[30px] text-[24px]">
          Sign up to My Legends Tour
        </span>
      </div>

      <div className="container" id="newsletter-sign-up ">
        <div className="text-btn-combo  pt-4 pb-5 flex items-center justify-center">
          <div className="row md:flex md:flex-row">
            <div className="md:w-1/2">
              <div className=" flex items-center justify-center mb-[57px]  mt-8">
                <span className="font-brown-light xl:max-w-[615px] lg:max-w-[360px] md:max-w-[230px] mx-auto lg:text-[27px] text-[#4c1e61] ">
                  Sign up today for FREE to receive priority access to Legends
                  Tour tickets, plus all the latest news, discounts & offers
                  from the Legends Tour.
                </span>
              </div>
            </div>
            <div className="mr-1 text-btn-wrap col-sm-12 col-md-6 d-flex mt-6 mb-[64px] ml-[20px] lg:mr-[9px]">
              <div className="align-self-center w-full" id="newsletterSubscribeSection">
                <form id="">
                  <div className="flex flex-wrap  grid grid-cols-2 md:gap-[30px] gap-[20px] ">
                    <div className="w-1/2 py-2  " >
                      <div>
                        <input
                          type="text"
                          className="xl:w-[280px] lg:w-[220px] md:w-[180px] mobile-lg:w-[160px] mobile-sm:w-[110px] mobile-md:w-[140px]  p-3 border-2 border-black bg-[#f2f2f2]"
                          placeholder="First Name"
                          name="first_name"
                          required
                        />
                        <div className="alert alert-danger" id="nls_er_first_name"></div>
                      </div>
                    </div>
                    <div className="w-1/2 py-2 ">
                      <div className="form-group">
                        <input
                          type="text"
                          className="xl:w-[280px] lg:w-[220px] md:w-[180px] mobile-lg:w-[160px] mobile-sm:w-[110px] mobile-md:w-[140px]  p-3 border-2 border-black bg-[#f2f2f2]"
                          placeholder="Last Name"
                          name="last_name"
                          required
                        />
                        <div className="alert alert-danger" id="nls_er_last_name"></div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group my-6 w-full lg:w-[465px] md:w-[380px] xl:w-full">
                    <input
                      type="email"
                      className="form-control form-control-lg border-2 border-black p-3 md:w-[380px] lg:w-[465px] xl:w-full w-full bg-[#f2f2f2]"
                      placeholder="Email address"
                      name="email"
                      required
                    />
                    <div className="alert alert-danger" id="nls_er_email"></div>
                  </div>
                  <input
                    type="hidden"
                    className="form-control"
                    value="nlsTickets"
                    name="tickets_page"
                  />
                  <input
                    type="hidden"
                    name="_token"
                    value="oubMeVUv7kfAD5KkHXMqoWdoS68GAhwQCNp7TWeL"
                  />
                  <div className="form-group text-center">
                    <button
                      className="btn bg-[#522367] hover:bg-[#3b194a] font-[545] font-brown text-[18px] text-white h-[53px] w-[131px]"
                      id="newsletterSubscribeBtn"
                    >
                      SIGN UP
                    </button>
                  </div>
                </form>
              </div>
              <div
                className="text-center"
                style={{ display: "none" }}
                id="newsletterSubscribeSuccessMsg"
              >
                <p className="my-3 icn-success">
                  <i className="fal fa-check-circle text-primary"></i>
                </p>
                <h3 className="text-center">
                  Thanks for signing up, we’ll be in touch soon.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
