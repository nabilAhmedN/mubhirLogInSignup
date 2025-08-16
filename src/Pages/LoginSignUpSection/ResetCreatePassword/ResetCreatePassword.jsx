import React, {useState}  from "react";
import mainLogo from "../../../assets/mainLogo.png"
import BG from "../../../assets/Vector.svg"
import Footer from "../../Shared/Footer/Footer"

const ResetCreatePassword = () => {
     const [formData, setFormData] = useState({
        enterNewPassword: "",
        reEnterNewPassword: "",
      });

      const [errors, setErrors] = useState({
        passwordMatch: "",
        passwordStrength: "",
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ passwordMatch: "", passwordStrength: "" }); // Clear errors while typing
      };

      // Password strength validation regex
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?`~])[A-Za-z\d!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?`~]{8,}$/;

      const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = { passwordMatch: "", passwordStrength: "" };
        let valid = true;

        // Check if passwords match
        if (formData.enterNewPassword !== formData.reEnterNewPassword) {
          newErrors.passwordMatch = "Passwords do not match.";
          valid = false;
        }

        // Check password strength
        if (!passwordRegex.test(formData.enterNewPassword)) {
          newErrors.passwordStrength =
            "Password must be at least 8 characters with uppercase, lowercase, number, and special character.";
          valid = false;
        }

        setErrors(newErrors);

        if (valid) {
          console.log("Form submitted:", formData);
          // ✅ Call API or redirect user
        }
      };
  return (
    <div className="bg-white ">
      <div
        className="text-black m-4 rounded-2xl bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="mx-auto px-4 max-w-[500px] w-full p-8">
          <div className="p-0 md:p-6 flex-1 flex flex-col">
            <div className="text-center mb-[40px]">
              <div className="flex items-center justify-center">
                <img
                  src={mainLogo}
                  alt="Mubhir Logo"
                  className="w-[100px] h-[100px]"
                />
                <h1 className="text-[66px] md:text-[88px] font-semibold text-[#28235B] tracking-[-0.07em]">
                  Mubhir
                </h1>
              </div>
              <p className="text-[28px] md:text-4xl font-semibold tracking-[-1.5px]">
                Set your new password
              </p>
              <p className="text-[16px] font-medium text-black tracking-[-0.5px] mt-[12px]">
                Please set a password for your account to get started!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Enter New Password */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor="enterNewPassword"
                  className="mb-1 font-medium text-black"
                >
                  Enter New Password*
                </label>
                <input
                  type="password"
                  id="enterNewPassword"
                  name="enterNewPassword"
                  value={formData.enterNewPassword}
                  onChange={handleChange}
                  placeholder="Enter Your New Password"
                  required
                  className="w-full bg-white border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7a2060]"
                />
                {errors.passwordStrength && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.passwordStrength}
                  </p>
                )}
              </div>

              {/* Re-enter New Password */}
              <div className="flex flex-col">
                <label
                  htmlFor="reEnterNewPassword"
                  className="mb-1 font-medium text-black"
                >
                  Re-enter New Password*
                </label>
                <input
                  type="password"
                  id="reEnterNewPassword"
                  name="reEnterNewPassword"
                  value={formData.reEnterNewPassword}
                  onChange={handleChange}
                  placeholder="Re-Enter Your New Password"
                  required
                  className="w-full bg-white border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7a2060]"
                />
                {errors.passwordMatch && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.passwordMatch}
                  </p>
                )}
              </div>

              <p className="text-base text-gray-500">
                The password must be at least 8 characters with upper and lower
                case letters, numbers and special characters
              </p>

              <button
                type="submit"
                className="w-full bg-[#7A2060] text-white py-2 rounded-full font-semibold cursor-pointer"
              >
                Set New Password and Log In
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ResetCreatePassword
