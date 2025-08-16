import React, {useState}  from "react";
import mainLogo from "../../../assets/mainLogo.png"
import BG from "../../../assets/Vector.svg"
import Footer from "../../Shared/Footer/Footer"

const LoginV1 = () => {
          const [formData, setFormData] = useState({
            email: "",
            password: ""
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
            <div className="mx-auto px-4 max-w-[525px] w-full p-8">
                <div className="p-0 md:p-6 flex-1 flex flex-col">
                    <div className="text-center mb-[40px]">
                        <div className="flex items-center justify-center">
                            <img src={mainLogo} alt="Mubhir Logo" className="w-[100px] h-[100px]" />
                            <h1 className="text-[66px] md:text-[88px] font-semibold text-[#28235B] tracking-[-0.07em]">Mubhir</h1>
                        </div>
                        <h1 className="text-[28px] md:text-4xl font-semibold tracking-[-1.5px]">Log In to our Testing Platform</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email */}
                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-1 font-medium text-black">
                            Email*
                            </label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                            className="w-full bg-white border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7a2060]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-1 font-medium text-black">
                            Password*
                            </label>
                            <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter Your Password"
                            required
                            className="w-full bg-white border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7a2060]"
                            />
                        </div>

                        <a href="" className="text-base font-medium text-[#7a2060] underline">
                            I forgot my password
                        </a>

                        <button
                            type="submit"
                            className="w-full bg-[#7A2060] text-white py-2 rounded-full font-semibold cursor-pointer mt-4"
                        >
                            Sign Up
                        </button>
                        {/* <Button variant="primary">Sign Up</Button> */}
                        <button
                            type="button"
                            className="w-full border border-[#7A2060] text-[#7A2060] py-2 rounded-full font-semibold cursor-pointer"
                        >
                            Log In
                        </button>
                    </form>
            </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default LoginV1
