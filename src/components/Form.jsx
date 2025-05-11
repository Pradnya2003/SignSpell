import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzwO1J9eqPqivxwM_qNdOOAjCcLn3JjtvP-Ncvs682OOdVaQFwF48Ihkm4DP9_dyMyQ/exec'; // Replace this with your real URL
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !isValidEmail(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    try {
        const formPayload = new FormData();
        formPayload.append("name", formData.name);
        formPayload.append("email", formData.email);
        formPayload.append("phone", formData.phone);
        formPayload.append("message", formData.message);
        
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          body: formPayload,
          mode: 'no-cors',
        });
        
      

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section id="Contact" className="flex flex-col h-auto p-40 justify-center items-center bg-gray-50">
        <p className="text-green-500 text-[17px] text-left w-full max-w-xl">Get In Touch</p>
        <h1 className="text-[39px] font-bold text-left w-full max-w-xl">We're here to assist you!</h1>

        <form onSubmit={handleSubmit} className="pt-12 h-auto w-full max-w-xl gap-2 flex flex-col">
          <label className="text-[20px] font-semibold pl-2">Name</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Name"
            className="h-9 border-gray-400 border-2 p-2"
          />
          {errors.name && <span className="text-red-500 pl-2 text-sm">{errors.name}</span>}

          <label className="text-[20px] font-semibold pl-2">Email address*</label>
          <input
            id="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email address"
            className="h-9 border-gray-400 border-2 p-2"
          />
          {errors.email && <span className="text-red-500 pl-2 text-sm">{errors.email}</span>}

          <label className="text-[20px] font-semibold pl-2">Phone number*</label>
          <input
            id="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your Phone number"
            className="h-9 border-gray-400 border-2 p-2"
          />
          {errors.phone && <span className="text-red-500 pl-2 text-sm">{errors.phone}</span>}

          <label className="text-[20px] font-semibold pl-2">Message*</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your Message"
            className="h-28 border-gray-400 border-2 p-2 resize-none"
          />
          {errors.message && <span className="text-red-500 pl-2 text-sm">{errors.message}</span>}

          <p className="pl-2 text-sm">
            <input className='mr-2 h-5 w-5' type="checkbox" />
             I allow this website to store my submission so they can respond to my inquiry. *
          </p>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 w-full text-white py-2 px-6 font-semibold transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

          {isSubmitted && (
            <p className="text-green-600 text-center pt-2 text-sm">✅ Your message has been sent!</p>
          )}
        </form>
      </section>
    </div>
  );
}

export default ContactForm;
