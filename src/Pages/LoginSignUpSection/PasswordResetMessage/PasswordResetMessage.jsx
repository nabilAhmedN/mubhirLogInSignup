import React, {useState}  from "react";
import mainLogo from "../../../assets/mainLogo.png"
import BG from "../../../assets/Vector.svg"
import Footer from "../../Shared/Footer/Footer"

const PasswordResetMessage = () => {
      const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dob: "",
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
  return (
        <div className="bg-white ">
        <div className="text-black m-4 rounded-2xl bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${BG})` }}>
            <div className="mx-auto px-4 max-w-[500px] w-full p-8">
                <div className="p-0 md:p-6 flex-1 flex flex-col">
                    <div className="text-center mb-[32px]">
                        <div className="flex items-center justify-center">
                            <img src={mainLogo} alt="Mubhir Logo" className="w-[100px] h-[100px]" />
                            <h1 className="text-[66px] md:text-[88px] font-semibold text-[#28235B] tracking-[-0.07em]">Mubhir</h1>
                        </div>
                        <p className="text-[28px] md:text-4xl font-semibold tracking-[-1.5px]">Forgot your Password?</p>
                        <p className="text-[16px] font-medium text-black tracking-[-0.5px] mt-[12px]">Please enter the phone number associated with your account</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Phone */}
                        <div className="flex gap-4 flex-col md:flex-row">
                            <div className="flex flex-col w-full">

                                <label htmlFor="phone" className=" font-medium text-black">
                                    Phone*
                                </label>
                                <div className="flex mt-1 bg-white border border-gray-300 rounded ">
                                    <span className="flex items-center justify-center px-3 gap-x-1 py-2 font-medium ">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_4127_29529)">
                                        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#6DA544"/>
                                        <path d="M5.6524 11.9564C5.6524 12.6768 6.23639 13.2608 6.95674 13.2608H10.8698C10.8698 13.8611 11.3564 14.3477 11.9567 14.3477H13.2611C13.8614 14.3477 14.348 13.8611 14.348 13.2608V11.9564H5.6524Z" fill="#F0F0F0"/>
                                        <path d="M14.4562 5.65259V8.69606C14.4562 9.17555 14.0661 9.56563 13.5866 9.56563V10.87C14.7853 10.87 15.7605 9.89473 15.7605 8.69606V5.65259H14.4562V5.65259Z" fill="#F0F0F0"/>
                                        <path d="M5.10864 8.69582C5.10864 9.17531 4.71857 9.56538 4.23907 9.56538V10.8697C5.43779 10.8697 6.41298 9.89449 6.41298 8.69582V5.65234H5.10864V8.69582Z" fill="#F0F0F0"/>
                                        <path d="M13.8046 5.65259H12.5002V8.69606H13.8046V5.65259Z" fill="#F0F0F0"/>
                                        <path d="M10.5434 7.39173C10.5434 7.51161 10.4459 7.60911 10.3261 7.60911C10.2062 7.60911 10.1087 7.51157 10.1087 7.39173V5.65259H8.80433V7.39173C8.80433 7.51161 8.70679 7.60911 8.58695 7.60911C8.4671 7.60911 8.36956 7.51157 8.36956 7.39173V5.65259H7.06519V7.39173C7.06519 8.23083 7.74784 8.91348 8.58695 8.91348C8.91011 8.91348 9.2098 8.81192 9.45652 8.63942C9.7032 8.81188 10.0029 8.91348 10.3261 8.91348C10.3912 8.91348 10.4552 8.90891 10.5181 8.90091C10.4257 9.28173 10.0827 9.56563 9.6739 9.56563V10.87C10.8726 10.87 11.8478 9.89473 11.8478 8.69606V7.39173V5.65259H10.5435V7.39173H10.5434Z" fill="#F0F0F0"/>
                                        <path d="M9.02171 9.56506H7.06519V10.8694H9.02171V9.56506Z" fill="#F0F0F0"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_4127_29529">
                                        <rect width="20" height="20" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    +966
                                    </span>
                                    <div className="w-px h-8 bg-gray-300 my-1 mx-1"></div>
                                    <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="011 234 5678"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-white rounded px-1 py-2 focus:outline-none focus:ring-2 focus:ring-[#7a2060]"
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#7A2060] text-white py-2 rounded-full font-semibold cursor-pointer"
                        >
                            Reset Password
                        </button>
                        {/* <Button variant="primary">Sign Up</Button> */}
                        <button
                            type="button"
                            className="w-full border border-[#7A2060] text-[#7A2060] py-2 rounded-full font-semibold cursor-pointer"
                        >
                            Log In Instead
                        </button>
                    </form>
            </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default PasswordResetMessage
