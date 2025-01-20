"use client"
import React, { useState, ChangeEvent } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const QuoteRequestForm: React.FC = () => {
  // Form state management
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    services: "",
    projectDescription: "",
    budgetRange: "",
    preferredTimeline: "",
    projectDuration: "",
  });

  // Form validation state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});


  // Handle input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validation functions
  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.businessName.trim())
      newErrors.businessName = "Business name is required";
    if (!formData.contactName.trim())
      newErrors.contactName = "Contact name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    return newErrors;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.services) newErrors.services = "Please select a service";
    if (!formData.projectDescription.trim())
      newErrors.projectDescription = "Project description is required";
    return newErrors;
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.budgetRange)
      newErrors.budgetRange = "Budget range is required";
    if (!formData.preferredTimeline)
      newErrors.preferredTimeline = "Timeline is required";
    if (!formData.projectDuration)
      newErrors.projectDuration = "Duration is required";
    return newErrors;
  };

  // Navigation handlers
  const handleNext = () => {
    let stepErrors = {};
    switch (currentStep) {
      case 1:
        stepErrors = validateStep1();
        break;
      case 2:
        stepErrors = validateStep2();
        break;
      case 3:
        stepErrors = validateStep3();
        break;
      default:
        break;
    }

    if (Object.keys(stepErrors).length === 0) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    } else {
      setErrors(stepErrors);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare the data to send
      const formDataToSend = {
        email: "fatimaabbasi270@gmail.com", // Replace with recipient's email
        businessName: formData.businessName,
        contactName: formData.contactName,
        emailnew:formData.email,
        services: formData.services,
        projectDescription:formData.projectDescription ,
        budgetRange: formData.budgetRange,
        preferredTimeline: formData.preferredTimeline,
        projectDuration: formData.projectDuration,

      };

      // API Call
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      if (!response.ok) {
        throw new Error("Failed to send email.");
      }

      console.log("Email sent successfully");
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
      setErrors((prev) => ({
        ...prev,
        submit: "Failed to submit form. Please try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Format date for display
  const formatDate = (dateString?: string): string => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString();
  };


  // Get service label
  const getServiceLabel = (value: string): string => {
    const services: { [key: string]: string } = {
      "Custom Website Design": "Custom Website Design",
      "Website Management & Protection": "Website Management & Protection",
      "Website Redesign & Refresh": "Website Redesign & Refresh",
    };
    return services[value] || value;
  };


  return (
    <div className="bg-[#D8D8D8]">
      <Header />
      <div className="text-start mt-10 md:pl-16 px-4 text-[#1E1E1E] md:w-2/3 w-full">
        <h1
          className="text-4xl md:text-5xl font-abhayaLibre"
          style={{ lineHeight: "4rem" }}
        >
          Enter Project Details For A Free Estimate
        </h1>
        
      </div>

      <div className="max-w-4xl mx-auto mt-10 md:px-0 px-2">
        {/* Progress Indicator */}
        <div className="bg-[#FFFFFF] bg-opacity-20 p-6 rounded-lg md:rounded-2xl border-2 border-[#EFF0F6] mb-10">
          <div className="flex items-center mb-6 md:px-8 px-3">
            {[1, 2, 3, 4].map((step) => (
              <React.Fragment key={step}>
                <div
                  className={`w-8 h-8 ${step <= currentStep
                      ? "bg-[#709A5A]"
                      : "bg-[#464C4A] bg-opacity-30"
                    } 
                  text-white rounded-full flex items-center justify-center`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className={`flex-1 h-1 ${step < currentStep
                        ? "bg-[#709A5A]"
                        : step === currentStep
                          ? "bg-gradient-to-l from-white to-[#709A5A]"
                          : "bg-[#464C4A] bg-opacity-30"
                      } mx-2 rounded-md`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="w-full h-1 rounded-lg bg-[#5A5A5A] mb-8"></div>

          {/* Step 1: Basic Information */}
          <div className={currentStep === 1 ? "block" : "hidden"}>
            <h2 className="text-xl font-bold mb-4">Basic Information</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4 w-full md:w-2/3 space-y-3">
                <label className="block text-gray-700 pl-2">
                  Business Name
                </label>
                <input
                  className={`w-full p-2 border rounded-xl ${errors.businessName ? "border-red-500" : ""
                    }`}
                  placeholder="Enter your business name"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                />
                {errors.businessName && (
                  <p className="text-red-500 text-sm">{errors.businessName}</p>
                )}
              </div>
              <div className="mb-4 w-full md:w-2/3 space-y-3">
                <label className="block text-gray-700 pl-2">Contact Name</label>
                <input
                  className={`w-full p-2 border rounded-xl ${errors.contactName ? "border-red-500" : ""
                    }`}
                  placeholder="Enter your contact name"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                />
                {errors.contactName && (
                  <p className="text-red-500 text-sm">{errors.contactName}</p>
                )}
              </div>
              <div className="mb-4 w-full md:w-2/3 space-y-3">
                <label className="block text-gray-700 pl-2">
                  Email Address
                </label>
                <input
                  className={`w-full p-2 border rounded-xl ${errors.email ? "border-red-500" : ""
                    }`}
                  placeholder="Enter your email address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  className="bg-[#709A5A] text-white px-6 py-3 lg:px-4 lg:py-2 rounded-2xl border relative overflow-hidden group"
                >
                  <span className="absolute top-0 left-0 w-full h-full bg-[#598442] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0" />
                  <span className="relative z-10">Continue →</span>
                </button>
              </div>
            </form>
          </div>

          {/* Step 2: Services Needed */}
          <div className={currentStep === 2 ? "block" : "hidden"}>
            <h2 className="text-xl font-bold mb-4">Services Needed</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4 w-full md:w-2/3 space-y-3">
                <label className="block text-gray-700">
                  Required Service(s)
                </label>
                <select
                  className={`w-full p-2 border rounded-xl ${errors.services ? "border-red-500" : ""
                    }`}
                  name="services"
                  value={formData.services}
                  onChange={handleInputChange}
                >
                  <option value="">Choose your desired services</option>
                  <option value="web-development">Custom Web Design</option>
                  <option value="ui-ux">Website Management & Protection</option>
                  <option value="mobile-app">Website Redesign & Refresh</option>
                </select>
                {errors.services && (
                  <p className="text-red-500 text-sm">{errors.services}</p>
                )}
              </div>
              <div className="mb-4 w-full md:w-2/3 space-y-3">
                <label className="block text-gray-700">
                  Project Description
                </label>
                <textarea
                  className={`w-full p-2 border rounded-xl ${errors.projectDescription ? "border-red-500" : ""
                    }`}
                  placeholder="What are your requirements"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                />
                {errors.projectDescription && (
                  <p className="text-red-500 text-sm">
                    {errors.projectDescription}
                  </p>
                )}
              </div>
              <div className="flex flex-col items-end gap-y-3">
                <button
                  onClick={handleBack}
                  className="bg-white text-[#1E1E1E] px-6 py-3 lg:px-4 lg:py-2 rounded-2xl border relative overflow-hidden group w-40"
                >
                  <span className="absolute top-0 left-0 w-full h-full bg-[#598442] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0" />
                  <span className="relative z-10">Back ←</span>
                </button>
                <button
                  onClick={handleNext}
                  className="bg-[#709A5A] text-white px-6 py-3 lg:px-4 lg:py-2 rounded-2xl border relative overflow-hidden group w-40"
                >
                  <span className="absolute top-0 left-0 w-full h-full bg-[#598442] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0" />
                  <span className="relative z-10">Continue →</span>
                </button>
              </div>
            </form>
          </div>

          {/* Step 3: Project Budget */}
          <div className={currentStep === 3 ? "block" : "hidden"}>
            <h2 className="text-xl font-bold mb-4">Project Budget</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4 w-full md:w-2/3 space-y-3">
                <label className="block text-gray-700">Budget Range</label>
                <select
                  className={`w-full p-2 border rounded-xl ${errors.budgetRange ? "border-red-500" : ""
                    }`}
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleInputChange}
                >
                  <option value="">Select budget range</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000-20000">$10,000 - $20,000</option>
                  <option value="20000-50000">$20,000 - $50,000</option>
                  <option value="50000+">$50,000+</option>
                </select>
                {errors.budgetRange && (
                  <p className="text-red-500 text-sm">{errors.budgetRange}</p>
                )}
              </div>
              <div className="mb-4 w-full md:w-2/3 space-y-3">
                <label className="block text-gray-700">
                Preferred Project Completion Time
                </label>
                <input
                  className={`w-full p-2 border rounded-xl ${errors.preferredTimeline ? "border-red-500" : ""
                    }`}
                  type="date"
                  name="preferredTimeline"
                  value={formData.preferredTimeline}
                  onChange={handleInputChange}
                />
                {errors.preferredTimeline && (
                  <p className="text-red-500 text-sm">
                    {errors.preferredTimeline}
                  </p>
                )}
              </div>
              
              <div className="flex flex-col items-end gap-y-3">
                <button
                  onClick={handleBack}
                  className="bg-white text-[#1E1E1E] px-6 py-3 lg:px-4 lg:py-2 rounded-2xl border relative overflow-hidden group w-40"
                >
                  <span className="absolute top-0 left-0 w-full h-full bg-[#598442] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0" />
                  <span className="relative z-10">Back ←</span>
                </button>
                <button
                  onClick={handleNext}
                  className="bg-[#709A5A] text-white px-6 py-3 lg:px-4 lg:py-2 rounded-2xl border relative overflow-hidden group w-40"
                >
                  <span className="absolute top-0 left-0 w-full h-full bg-[#598442] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0" />
                  <span className="relative z-10">Continue →</span>
                </button>
              </div>
            </form>
          </div>
          {/* Step 4: Confirmation */}
          <div className={currentStep === 4 ? "block" : "hidden"}>
            <h2 className="text-xl font-bold mb-4">Confirm Details</h2>
            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <h3 className="text-green-800 font-semibold mb-2">
                  Thank you for your submission!
                </h3>
                <p className="text-green-700">
                  {
                    " We'll review your project details and get back to you shortly."
                  }
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="bg-white bg-opacity-50 rounded-xl p-6">
                    <h3 className="font-semibold mb-4">Basic Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-600 text-sm">
                          Business Name
                        </label>
                        <p className="font-medium">{formData.businessName}</p>
                      </div>
                      <div>
                        <label className="block text-gray-600 text-sm">
                          Contact Name
                        </label>
                        <p className="font-medium">{formData.contactName}</p>
                      </div>
                      <div>
                        <label className="block text-gray-600 text-sm">
                          Email
                        </label>
                        <p className="font-medium">{formData.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white bg-opacity-50 rounded-xl p-6">
                    <h3 className="font-semibold mb-4">Project Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-600 text-sm">
                          Services
                        </label>
                        <p className="font-medium">
                          {getServiceLabel(formData.services)}
                        </p>
                      </div>
                      <div>
                        <label className="block text-gray-600 text-sm">
                          Budget Range
                        </label>
                        <p className="font-medium">{formData.budgetRange}</p>
                      </div>
                      <div>
                        <label className="block text-gray-600 text-sm">
                          Timeline
                        </label>
                        <p className="font-medium">
                          {formatDate(formData.preferredTimeline)}
                        </p>
                      </div>
                      <div>
                        <label className="block text-gray-600 text-sm">
                          Duration
                        </label>
                        <p className="font-medium">
                          {formData.projectDuration} months
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white bg-opacity-50 rounded-xl p-6">
                    <h3 className="font-semibold mb-4">Project Description</h3>
                    <p className="whitespace-pre-wrap">
                      {formData.projectDescription}
                    </p>
                  </div>
                </div>

                {errors.submit && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700">
                    {errors.submit}
                  </div>
                )}

                <div className="flex flex-col items-end gap-y-3 mt-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="bg-white text-[#1E1E1E] px-6 py-3 lg:px-4 lg:py-2 rounded-2xl border relative overflow-hidden group w-40"
                    disabled={isSubmitting}
                  >
                    <span className="absolute top-0 left-0 w-full h-full bg-[#598442] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0" />
                    <span className="relative z-10">Back ←</span>
                  </button>
                  <button
                    type="submit"
                    className="bg-[#709A5A] text-white px-6 py-3 lg:px-4 lg:py-2 rounded-2xl border relative overflow-hidden group w-40 disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    <span className="absolute top-0 left-0 w-full h-full bg-[#598442] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0" />
                    <span className="relative z-10">
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuoteRequestForm;
