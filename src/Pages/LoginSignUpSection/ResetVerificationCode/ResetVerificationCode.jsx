import React, {useState}  from "react";
import mainLogo from "../../../assets/mainLogo.png"
import BG from "../../../assets/Vector.svg"
import Footer from "../../Shared/Footer/Footer"

const ResetVerificationCode = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);

        const handleChange = (value, index) => {
            if (/^[0-9]*$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (value && index < 3) {
                document.getElementById(`otp-${index + 1}`).focus();
            }
            }
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(otp)
        }
  return (
    <div className="bg-white ">
        <div className="text-black m-4 rounded-2xl bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${BG})` }}>
            <div className="mx-auto px-4 max-w-[500px] w-full p-8">
                <div className="p-0 md:p-6 flex-1 flex flex-col">
                    <div className="text-center mb-[40px]">
                        <div className="flex items-center justify-center">
                            <img src={mainLogo} alt="Mubhir Logo" className="w-[100px] h-[100px]" />
                            <h1 className="text-[66px] md:text-[88px] font-semibold text-[#28235B] tracking-[-0.07em]">Mubhir</h1>
                        </div>
                        <p className="text-[28px] md:text-4xl font-semibold tracking-[-1.5px]">Enter the Security Code</p>
                        <p className="text-[16px] font-medium text-black tracking-[-0.5px] mt-[12px]">We have sent an OTP to the following phone number:</p>
                        <p className="text-[18px] font-medium text-black tracking-[-0.5px] mt-[12px]">+966 011 *** **78</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">

                        <div className="flex gap-4 flex-col md:flex-row pb-[16px]">
                            <div className="flex flex-col w-full">
                                <label htmlFor="firstName" className="mb-1 tex-lg font-medium text-black">
                                    Enter OTP
                                </label>

                                <div className="flex justify-center gap-2 mt-2">
                                    {otp.map((digit, index) => (
                                        <input
                                        key={index}
                                        id={`otp-${index}`}
                                        type="text"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleChange(e.target.value, index)}
                                        className="w-[100px] h-[48px] bg-white border border-gray-100 rounded-md text-center text-lg font-bold focus:outline-none focus:ring-2 focus:ring-[#7a2060]"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#7A2060] text-white py-2 rounded-full font-semibold cursor-pointer"
                        >
                            Confirm Account and Set Password
                        </button>
                        {/* <Button variant="primary">Sign Up</Button> */}
                        <button
                            type="button"
                            className="w-full border border-[#7A2060] text-[#7A2060] py-2 rounded-full font-semibold cursor-pointer"
                        >
                            Resend OTP
                        </button>
                    </form>
            </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ResetVerificationCode
