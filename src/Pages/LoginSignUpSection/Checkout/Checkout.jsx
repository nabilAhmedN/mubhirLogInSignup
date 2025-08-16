import React, {useState}  from "react";
import mainLogo from "../../../assets/mainLogo.png"
import BG from "../../../assets/Vector.svg"
import Footer from "../../Shared/Footer/Footer"
import Cleave from "cleave.js/react";


const Checkout = () => {

    const packages = [
        { value: "monthly", label: "Monthly - SAR 99.00", price: 99 },
        { value: "3months", label: "3 Months - SAR 199.00", price: 199 },
        { value: "6months", label: "6 Months - SAR 299.00", price: 299 },
        { value: "yearly", label: "Yearly - SAR 399.00", price: 399 },
    ];

    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postCode: "",
        billingPhone: "",
        cardName: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
        package: "monthly",
    });

    const [cardType, setCardType] = useState("");

    const handleCardNumberChange = (e) => {
        const value = e.target.rawValue; // unformatted value
        setFormData((prev) => ({ ...prev, cardNumber: value }));
    };

    const handleCardTypeChange = (type) => {
        setCardType(type);
        // Reset CVV if length invalid for new card type
        setFormData((prev) => ({
        ...prev,
        cvv: prev.cvv.slice(0, type === "amex" ? 4 : 3),
        }));
    };

    const handleExpiryChange = (e) => {
        setFormData((prev) => ({ ...prev, expiry: e.target.value }));
    };

    const handleCVVChange = (e) => {
        let maxLen = cardType === "amex" ? 4 : 3;
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > maxLen) value = value.slice(0, maxLen);
        setFormData((prev) => ({ ...prev, cvv: value }));
    };

    const [autoCharge, setAutoCharge] = useState(true);
    const selectedPkg = packages.find((p) => p.value === formData.package) ?? packages[0];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePackageChange = (value) => {
        setFormData((prev) => ({ ...prev, package: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { ...formData, autoCharge };
        console.log("Form Submitted:", payload);
        alert("Purchase completed! Check console for payload.");
    };
  return (
        <div className="bg-white ">
        <div className="text-black m-4 rounded-2xl bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${BG})` }}>
            <div className="mx-auto px-4 max-w-6xl w-full p-8">
                <div className="p-0 md:p-6 flex-1 flex flex-col">
                    <div className="text-center mb-[40px]">
                        <div className="flex items-center justify-center">
                            <img src={mainLogo} alt="Mubhir Logo" className="w-[100px] h-[100px]" />
                            <h1 className="text-[66px] md:text-[88px] font-semibold text-[#28235B] tracking-[-0.07em]">Mubhir</h1>
                        </div>
                        <h2 className="text-[28px] md:text-4xl font-semibold tracking-[-1.5px]">Start Your 3 Day Free Trial</h2>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="w-full flex flex-col md:flex-row gap-5"
                    >
                        {/* Left Side - Form */}
                        <div className="flex-1 space-y-6">
                        {/* Contact Information */}
                        <div>
                            <h2 className="font-semibold text-2xl mb-4">Contact Information</h2>
                            <div className="space-y-4">
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

                        {/* Billing Address */}
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Billing Address</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div className="flex flex-col w-full">
                                <label htmlFor="firstName" className="mb-1 font-medium text-black">
                                    First Name*
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    required
                                    className="w-full bg-white border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7a2060]"
                                />
                                </div>

                                <div className="flex flex-col w-full">
                                <label htmlFor="lastName" className="mb-1 font-medium text-black">
                                    Last Name*
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    required
                                    className="w-full bg-white border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7a2060]"
                                />
                                </div>
                            </div>

                            <label htmlFor="address" className="mb-4 font-medium text-black">
                            Address*
                            </label>
                            <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Address"
                            required
                            className="w-full bg-white border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7a2060]"
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                                <div className="flex flex-col w-full">
                                <label htmlFor="city" className="mb-1 font-medium text-black">
                                    City*
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="City"
                                    required
                                    className="w-full bg-white border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7a2060]"
                                />
                                </div>

                                <div className="flex flex-col w-full">
                                <label htmlFor="postCode" className="mb-1 font-medium text-black">
                                    Post Code*
                                </label>
                                <input
                                    type="text"
                                    id="postCode"
                                    name="postCode"
                                    value={formData.postCode}
                                    onChange={handleChange}
                                    placeholder="POst Code"
                                    required
                                    className="w-full bg-white border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7a2060]"
                                />
                                </div>
                            </div>

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

                        {/* Payment Information */}
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Payment Information</h2>

                            {/* Name on Card */}
                            <div className="mb-4">
                                <label htmlFor="cardName" className="block font-medium text-gray-700 mb-1 bg-white">
                                Name on Card*
                                </label>
                                <input
                                id="cardName"
                                type="text"
                                name="cardName"
                                placeholder="Name on card"
                                value={formData.cardName}
                                onChange={handleChange}
                                className="w-full border rounded-md px-4 py-2"
                                />
                            </div>

                            {/* Card Details */}

                            {/* --------normal------ */}
                            {/* <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4">
                                <div>
                                <label htmlFor="cardNumber" className="block font-medium text-gray-700 mb-1">
                                    Card Number*
                                </label>
                                <input
                                    id="cardNumber"
                                    type="text"
                                    name="cardNumber"
                                    placeholder="Card Number"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    className="border rounded-md px-4 py-2 w-full"
                                />
                                </div>

                                <div>
                                <label htmlFor="expiry" className="block font-medium text-gray-700 mb-1">
                                    Expiry Date*
                                </label>
                                <input
                                    id="expiry"
                                    type="text"
                                    name="expiry"
                                    placeholder="MM/YY"
                                    value={formData.expiry}
                                    onChange={handleChange}
                                    className="border rounded-md px-4 py-2 w-full"
                                />
                                </div>

                                <div>
                                <label htmlFor="cvv" className="block font-medium text-gray-700 mb-1">
                                    CVV*
                                </label>
                                <input
                                    id="cvv"
                                    type="password"
                                    name="cvv"
                                    placeholder="CVV"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    className="border rounded-md px-4 py-2 w-full"
                                />
                                </div>
                            </div> */}


                            {/* --------pkg------ */}
                            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4">

                                <div className="relative">
                                    <label htmlFor="cardNumber" className="block font-medium text-gray-700 mb-1">
                                    Card Number*
                                    </label>
                                    <div className="flex items-center border rounded-md px-2">

                                    <img
                                        src={
                                        cardType && cardType !== "unknown"
                                            ? `/card-icons/${cardType}.png`
                                            : `/card-icons/default.png`
                                        }
                                        alt={cardType || "default"}
                                        className="w-8 h-5 mr-2"
                                    />


                                    <Cleave
                                        id="cardNumber"
                                        placeholder="Card Number"
                                        value={formData.cardNumber}
                                        options={{
                                        creditCard: true,
                                        onCreditCardTypeChanged: (type) => {
                                            handleCardTypeChange(type);
                                        },
                                        }}
                                        onChange={handleCardNumberChange}
                                        className="w-full py-2 focus:outline-none bg-white"
                                    />
                                    </div>
                                </div>


                                <div className="flex gap-4 md:contents">

                                    <div className="flex-1">
                                    <label htmlFor="expiry" className="block font-medium text-gray-700 mb-1">
                                        Expiry Date*
                                    </label>
                                    <Cleave
                                        id="expiry"
                                        placeholder="MM/YY"
                                        value={formData.expiry}
                                        options={{ date: true, datePattern: ["m", "y"] }}
                                        onChange={handleExpiryChange}
                                        className="border rounded-md px-4 py-2 w-full bg-white"
                                    />
                                    </div>


                                    <div className="flex-1">
                                    <label htmlFor="cvv" className="block font-medium text-gray-700 mb-1">
                                        CVV*
                                    </label>
                                    <input
                                        id="cvv"
                                        type="password"
                                        placeholder="CVV"
                                        value={formData.cvv}
                                        onChange={handleCVVChange}
                                        className="border rounded-md px-4 py-2 w-full"
                                    />
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Trial Expiry Options */}
                        <div>

                             <section>
                                <h2 className="text-lg font-semibold mb-4">Trial Expiry Options</h2>

                                {/* Master toggle */}
                                <label className="flex items-start gap-3 select-none cursor-pointer mb-3">
                                <input
                                    type="checkbox"
                                    checked={autoCharge}
                                    onChange={() => setAutoCharge((v) => !v)}
                                    className="mt-1 h-4 w-4 rounded border-gray-300 accent-[#671E5A]"
                                />
                                <span className="text-sm md:text-base">
                                    Automatically charge for the following package:
                                </span>
                                </label>

                                {/* Package radios */}
                                <fieldset
                                className={`pl-4 space-y-3 ${!autoCharge ? "opacity-50" : ""}`}
                                disabled={!autoCharge}
                                >
                                {packages.map((pkg) => (
                                    <label
                                    key={pkg.value}
                                    className="flex items-center gap-3 cursor-pointer"
                                    >
                                    {/* Custom radio */}
                                    <input
                                        type="radio"
                                        name="package"
                                        value={pkg.value}
                                        checked={formData.package === pkg.value}
                                        onChange={() => handlePackageChange(pkg.value)}
                                        className="h-4 w-4 rounded-full border-gray-300 accent-[#671E5A] shrink-0"
                                    />
                                    <span className="text-sm md:text-base">{pkg.label}</span>
                                    </label>
                                ))}
                                </fieldset>
                            </section>
                        </div>
                        </div>

                        {/* Right Side - Order Summary */}
                        <div className="w-full md:w-[400px] h-fit">
                            <h3 className="font-semibold text-2xl mb-4">Order Summary</h3>

                            <div className=" bg-[#f9fafb] border-2 border-[#EAECF0] rounded-lg p-6">
                                <div className="flex justify-between items-center pb-3 ">
                                    <div>
                                        <p className="font-semibold text-lg pb-2">Free Plan <span className="bg-[#FFFFFF] px-2 py-1 text-[14px] font-medium rounded-md border border-[#D0D5DD]">3 Days</span></p>
                                        <p className="text-sm text-gray-500">Try Mubhir for 3 days</p>
                                    </div>
                                </div>

                            <div className="flex justify-between font-medium border-b border-[#EAECF0] pb-6 mb-6">
                                <span>Total</span>
                                <span className="line-through text-gray-400">SAR {selectedPkg.price.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between font-bold mt-2">
                                <span>Order Total (1)</span>
                                <span>SAR 0.00</span>
                            </div>

                            <p className="text-xs text-gray-500 mt-6">
                                {autoCharge
                                ? `*Automatically charge SAR ${selectedPkg.price.toFixed(
                                    2
                                    )} for the package after trial expiry.`
                                : `*You won’t be charged after the trial unless you choose a package.`}
                            </p>

                            </div>
                            <button
                                type="submit"
                                className="mt-6 w-full bg-[#671e5a] text-white py-2 rounded-full hover:bg-[#7E256E] cursor-pointer"
                            >
                                Complete Purchase
                            </button>
                            <button
                                type="button"
                                className="mt-3 w-full border border-[#671e5a] text-[#671e5a] py-2 rounded-full hover:bg-[#F9EBF7] cursor-pointer"
                            >
                                Change Package
                            </button>
                        </div>
                    </form>
            </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Checkout
