"use client"

import AnimatedDots from "@/components/animateddots/page";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import React, { useState } from "react";
import { supabase } from "@/lib/SupabaseClient";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        timeline: "",
        budget: "",
        projectDetails: "",
        hearAbout: ""
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const validateField = (name, value) => {
        switch (name) {
            case "fullName":
                if (!value.trim()) return "Full name is required";
                if (value.trim().length < 2) return "Name must be at least 2 characters";
                if (!/^[a-zA-Z\s]+$/.test(value)) return "Name should only contain letters";
                return "";

            case "email":
                if (!value.trim()) return "Email is required";
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email";
                return "";

            case "phone":
                if (!value.trim()) return "Phone number is required";
                if (!/^[\d\s\-\+\(\)]{10,}$/.test(value)) return "Please enter a valid phone number";
                return "";

            case "timeline":
                if (!value.trim()) return "Timeline is required";
                return "";

            case "budget":
                if (!value.trim()) return "Budget is required";
                return "";

            default:
                return "";
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (touched[name]) {
            setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        Object.keys(formData).forEach(key => {
            if (key !== "projectDetails" && key !== "hearAbout") {
                const error = validateField(key, formData[key]);
                if (error) newErrors[key] = error;
            }
        });

        setErrors(newErrors);
        setTouched({
            fullName: true,
            email: true,
            phone: true,
            timeline: true,
            budget: true
        });

        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true);
            setSubmitStatus(null);

            try {
                const { data, error } = await supabase
                    .from('contact_submissions')
                    .insert([
                        {
                            full_name: formData.fullName,
                            email: formData.email,
                            phone: formData.phone,
                            timeline: formData.timeline,
                            budget: formData.budget,
                            project_details: formData.projectDetails || null,
                            hear_about: formData.hearAbout || null
                        }
                    ]);

                if (error) throw error;

                setSubmitStatus('success');
                // Reset form
                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    timeline: "",
                    budget: "",
                    projectDetails: "",
                    hearAbout: ""
                });
                setTouched({});

                // Show success message for 5 seconds
                setTimeout(() => setSubmitStatus(null), 5000);
            } catch (error) {
                console.error('Error submitting form:', error);
                setSubmitStatus('error');
                setTimeout(() => setSubmitStatus(null), 5000);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="relative">
            <AnimatedDots />
            <Header />
            <div className="min-h-screen flex items-center justify-center bg-white px-6 my-4">
                <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-start">
                    {/* Left Section */}
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                            <span className="text-black text-[22px] font-medium">
                                Let's Discuss A Project
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl text-black font-black leading-snug mb-4">
                            Let's Work <br /> Together!
                        </h1>
                        <p className="text-[#666666] w-full sm:w-100">
                            Tell us about yourself and your project goals so we can prepare
                            for the next steps. Share any details or challenges, and we'll get
                            back to you shortly!
                        </p>
                    </div>

                    {/* Right Section */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {submitStatus === 'success' && (
                            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl">
                                Thank you! Your message has been submitted successfully. We'll get back to you soon!
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl">
                                Oops! Something went wrong. Please try again later.
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    disabled={isSubmitting}
                                    className={`border ${errors.fullName && touched.fullName ? 'border-red-500' : 'border-[#0000004D]'} rounded-xl p-3 w-full placeholder-[#555555] focus:outline-none text-black focus:ring-2 ${errors.fullName && touched.fullName ? 'focus:ring-red-500' : 'focus:ring-orange-500'} disabled:opacity-50`}
                                />
                                {errors.fullName && touched.fullName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                                )}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    disabled={isSubmitting}
                                    className={`border ${errors.email && touched.email ? 'border-red-500' : 'border-[#0000004D]'} rounded-xl p-3 w-full placeholder-[#555555] focus:outline-none text-black focus:ring-2 ${errors.email && touched.email ? 'focus:ring-red-500' : 'focus:ring-orange-500'} disabled:opacity-50`}
                                />
                                {errors.email && touched.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    disabled={isSubmitting}
                                    className={`border ${errors.phone && touched.phone ? 'border-red-500' : 'border-[#0000004D]'} rounded-xl p-3 w-full placeholder-[#555555] focus:outline-none text-black focus:ring-2 ${errors.phone && touched.phone ? 'focus:ring-red-500' : 'focus:ring-orange-500'} disabled:opacity-50`}
                                />
                                {errors.phone && touched.phone && (
                                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                                )}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="timeline"
                                    placeholder="Timeline"
                                    value={formData.timeline}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    disabled={isSubmitting}
                                    className={`border ${errors.timeline && touched.timeline ? 'border-red-500' : 'border-[#0000004D]'} rounded-xl p-3 w-full placeholder-[#555555] focus:outline-none text-black focus:ring-2 ${errors.timeline && touched.timeline ? 'focus:ring-red-500' : 'focus:ring-orange-500'} disabled:opacity-50`}
                                />
                                {errors.timeline && touched.timeline && (
                                    <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <input
                                type="text"
                                name="budget"
                                placeholder="Budget"
                                value={formData.budget}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                disabled={isSubmitting}
                                className={`border ${errors.budget && touched.budget ? 'border-red-500' : 'border-[#0000004D]'} rounded-xl p-3 w-full placeholder-[#555555] focus:outline-none text-black focus:ring-2 ${errors.budget && touched.budget ? 'focus:ring-red-500' : 'focus:ring-orange-500'} disabled:opacity-50`}
                            />
                            {errors.budget && touched.budget && (
                                <p className="text-red-500 text-sm mt-1">{errors.budget}</p>
                            )}
                        </div>

                        <textarea
                            name="projectDetails"
                            placeholder="A few words about your project (optional)"
                            rows={4}
                            value={formData.projectDetails}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="border text-black border-[#0000004D] rounded-xl p-3 w-full placeholder-[#555555] focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                        />

                        <p className="text-[#000]">
                            What is the value proposition of your product? Do you have a
                            wishlist for the features or do you wish to build it together with
                            us?
                        </p>

                        <input
                            type="text"
                            name="hearAbout"
                            placeholder="How did you hear about us? (optional)"
                            value={formData.hearAbout}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="border text-black border-[#0000004D] rounded-xl p-3 w-full placeholder-[#555555] focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                        />

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[url(/btn-bg.png)] my-4 bg-cover text-white text-[18px] sm:text-[22px] font-semibold px-6 py-3 sm:px-10 sm:py-3 rounded-full shadow hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Submitting...' : "Let's Discuss Your Project"}
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}