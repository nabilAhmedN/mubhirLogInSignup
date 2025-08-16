import React, {useState}  from "react";
import mainLogo from "../../../assets/mainLogo.png"
import BG from "../../../assets/Vector.svg"
import Footer from "../../Shared/Footer/Footer"

const SelectPackage = () => {
      const plans = [
    {
      title: "Monthly Plan",
      subtitle: "Explore at your own pace",
      price: "99",
      tag: null,
      button: "Start Monthly Plan",
      features: [
        "Access SAT 1 practice questions.",
        "Weekly progress reports to track improvement.",
        "Take Drill Exams based on any combination of Verbal/Writing and Quantitative",
        "24/7 support to answer your questions."
      ]
    },
    {
      title: "3 Months Plan",
      subtitle: "Perfect for exam seasons",
      price: "199",
      tag: "Save 33%",
      button: "Start 3 months Plan",
      features: [
        "Access SAT 1 practice questions.",
        "Weekly progress reports to track improvement.",
        "Take Drill Exams based on any combination of Verbal/Writing and Quantitative",
        "24/7 support to answer your questions."
      ]
    },
    {
      title: "6 Months Plan",
      subtitle: "Compete at the highest levels",
      price: "299",
      tag: "Save 50%",
      button: "Start 6 Months Plan",
      features: [
        "Access SAT 1 practice questions.",
        "Weekly progress reports to track improvement.",
        "Take Drill Exams based on any combination of Verbal/Writing and Quantitative",
        "24/7 support to answer your questions."
      ]
    },
    {
      title: "Yearly Plan",
      subtitle: "Master the pace of SAT 1",
      price: "399",
      tag: "Save 66%",
      button: "Start Yearly Plan",
      features: [
        "Access SAT 1 practice questions.",
        "Weekly progress reports to track improvement.",
        "Take Drill Exams based on any combination of Verbal/Writing and Quantitative",
        "24/7 support to answer your questions."
      ]
    }
  ];
  return (
    <div className="bg-white ">
        <div className="text-black m-4 rounded-2xl bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${BG})` }}>
            <div className="mx-auto px-4 w-full p-8">
                <div className="p-0 md:p-6 flex-1 flex flex-col">
                    <div className="text-center mb-[40px]">
                        <div className="flex items-center justify-center">
                            <img src={mainLogo} alt="Mubhir Logo" className="w-[100px] h-[100px]" />
                            <h1 className="text-[66px] md:text-[88px] font-semibold text-[#28235B] tracking-[-0.07em]">Mubhir</h1>
                        </div>
                        <h2 className="text-[28px] md:text-4xl font-semibold tracking-[-1.5px]">Choose your SAT 1 Package</h2>
                    </div>

                    <div className="max-w-6xl mx-auto flex flex-col px-0 md:px-4">

                        <div className="flex flex-col md:flex-row justify-center gap-6">
                            {plans.map((plan, idx) => (
                            <div
                                key={idx}
                                className="bg-white shadow-md rounded-2xl p-6 w-full md:w-72 relative"
                            >
                                {plan.tag && (
                                <span className="absolute top-4 right-4 bg-[#C445A6] text-white text-xs font-semibold px-3 py-1 rounded-full">
                                    {plan.tag}
                                </span>
                                )}
                                <h3 className="text-lg font-bold">{plan.title}</h3>
                                <p className="text-sm text-gray-500 mb-4">{plan.subtitle}</p>
                                <div className="text-3xl font-bold text-[#671E5A]">
                                {plan.price}{" "}
                                <span className="text-base font-medium text-gray-500">SAR</span>
                                </div>
                                <p className="text-xs text-gray-500 mb-6">Per user per month</p>
                                <ul className="space-y-3 mb-6">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex justify-center items-start space-x-2">
                                        <span class="w-4 h-4  bg-[#671E5A] rounded-full flex items-center justify-center shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M2.5 5.99994L5 8.49994L10 3.49994" stroke="white" stroke-width="1.125" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        <span className="text-sm text-gray-700">{feature}</span>
                                    </li>
                                ))}
                                </ul>
                                <button className="w-full border border-[#671E5A] text-[#671E5A] hover:bg-[#671E5A] hover:text-white transition rounded-full py-2 font-semibold">
                                {plan.button}
                                </button>
                            </div>
                            ))}
                        </div>

                        {/* Centered button */}
                        <div className="flex justify-center mt-6">
                            <button
                            type="button"
                            className="w-full md:w-140 border border-[#671E5A] text-[#671E5A] hover:bg-[#671E5A] hover:text-white transition py-2 rounded-full font-semibold cursor-pointer"
                            >
                            Start 3 Day Free Trial
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>

    // <div className="bg-gray-50 min-h-screen py-12">
    //   {/* Header */}
    //   <div className="text-center mb-12">
    //     <div className="flex justify-center items-center space-x-3 mb-2">
    //       <img src="your-logo.png" alt="Mubhir Logo" className="h-12" />
    //       <h1 className="text-4xl font-bold text-purple-800">Mubhir</h1>
    //     </div>
    //     <h2 className="text-xl font-semibold text-gray-800">
    //       Choose your SAT 1 Package
    //     </h2>
    //   </div>

    //   {/* Pricing Plans */}
    //   <div className="flex justify-center gap-6 max-w-6xl mx-auto">
    //     {plans.map((plan, idx) => (
    //       <div
    //         key={idx}
    //         className="bg-white shadow-md rounded-2xl p-6 w-72 relative"
    //       >
    //         {plan.tag && (
    //           <span className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
    //             {plan.tag}
    //           </span>
    //         )}
    //         <h3 className="text-lg font-bold">{plan.title}</h3>
    //         <p className="text-sm text-gray-500 mb-4">{plan.subtitle}</p>
    //         <div className="text-3xl font-bold text-gray-900">
    //           {plan.price}{" "}
    //           <span className="text-base font-medium text-gray-500">SAR</span>
    //         </div>
    //         <p className="text-xs text-gray-500 mb-6">Per user per month</p>
    //         <ul className="space-y-3 mb-6">
    //           {plan.features.map((feature, i) => (
    //             <li key={i} className="flex items-start space-x-2">
    //               <span className="text-purple-700 font-bold">✔</span>
    //               <span className="text-sm text-gray-700">{feature}</span>
    //             </li>
    //           ))}
    //         </ul>
    //         <button className="w-full border border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white transition rounded-full py-2 font-semibold">
    //           {plan.button}
    //         </button>
    //       </div>
    //     ))}
    //   </div>

    //   {/* Free Trial Button */}
    //   <div className="mt-10 text-center">
    //     <button className="px-8 py-3 border border-purple-700 text-purple-700 rounded-full hover:bg-purple-700 hover:text-white font-semibold transition">
    //       Start 3 Day Free Trial
    //     </button>
    //   </div>
    // </div>
  )
}

export default SelectPackage
