import React, {useState}  from "react";
import mainLogo from "../../../assets/mainLogo.png"
import BG from "../../../assets/Vector.svg"
import Footer from "../../Shared/Footer/Footer"

const Confirmation = () => {

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



    const [autoCharge, setAutoCharge] = useState(true);
    const selectedPkg = packages.find((p) => p.value === formData.package) ?? packages[0];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { ...formData, autoCharge };
        console.log("Form Submitted:", payload);
        alert("Purchase completed! Check console for payload.");
    };
  return (
    <div className="bg-white">
        <div className="text-black m-4 rounded-2xl bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${BG})` }}>
            <div className="mx-auto px-4 max-w-5xl w-full p-8">
                <div className="p-0 md:p-6 flex-1 flex flex-col">
                    <div className="text-center mb-[40px]">
                        <div className="flex items-center justify-center">
                            <img src={mainLogo} alt="Mubhir Logo" className="w-[100px] h-[100px]" />
                            <h1 className="text-[66px] md:text-[88px] font-semibold text-[#28235B] tracking-[-0.07em]">Mubhir</h1>
                        </div>
                        <h1 className="text-[28px] md:text-4xl font-semibold tracking-[-1.5px]">Your Subscription has been Activated!</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4 flex justify-center">
                        <div className="w-full md:w-[450px] space-y-6">
  {/* Free Plan Card */}
  <div className="bg-[#f9fafb] border-2 border-[#EAECF0] rounded-3xl p-6">
    <div className="flex justify-between items-center pb-3">
      <div>
        <p className="font-semibold text-lg pb-2">
          Free Plan{" "}
          <span className="bg-white px-2 py-1 text-sm font-medium rounded-md border border-[#D0D5DD]">
            3 Days
          </span>
        </p>
        <p className="text-sm text-gray-500">Try Mubhir for 3 days</p>
      </div>
    </div>

    <div className="flex justify-between font-medium border-b border-[#EAECF0] pb-6 mb-6">
      <span>Total</span>
      <span className="line-through text-gray-400">
        SAR {selectedPkg.price.toFixed(2)}
      </span>
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

  {/* Billing Card */}
  <div className="bg-[#f9fafb] border-2 border-[#EAECF0] rounded-3xl p-6">
    <h2 className="font-semibold text-gray-800 mb-3">
      Billing Address and Payment Summary
    </h2>
    <div className="text-sm text-gray-700 space-y-2">
      <div className="border-b pb-6 border-[#EAECF0]">
        <p>Ahmad Jalil</p>
        <p>Riyadh - 12211, Saudi Arabia</p>
        <p>123 Al-Masjid Al-Haram St</p>
      </div>

      <div className="pt-2">
        <p>Ahmad Jalil</p>
        <p>1234 xxxx xxxx 1234</p>
        <p>05/32</p>
      </div>
    </div>
  </div>

  {/* CTA Button */}
  <button
    type="submit"
    className="mt-6 w-full bg-[#671e5a] text-white py-2 rounded-full hover:bg-[#7E256E]"
  >
    Go to Mubhir
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

export default Confirmation
