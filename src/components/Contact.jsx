import React from 'react';

function Contact() {
  return (
    <div className="max-w-[1200px] mx-auto bg-primary sm:py-20 p-5" id="contact">
      
      <div className="text-center pb-8">
        <h2 className="text-4xl font-bold leading-tight text-white inline border-b-4 border-accent">
          Contact Me
        </h2>
        <p className="text-gray-400 mt-4 font-mono">
          {/* ✅ FIXED: Wrapped in braces so ESLint knows it is a string */}
          {"// Submit the form below or shoot me an email"}
        </p>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="mt-6 bg-secondary rounded-xl shadow-lg overflow-hidden">
          <div className="p-10">
            <form action="https://getform.io/f/lbkmkjnb" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="sr-only">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    className="bg-tertiary w-full px-4 py-4 text-gray-200 placeholder-gray-500 border
                           border-gray-700 rounded-md focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="sr-only">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    className="bg-tertiary w-full px-4 py-4 text-gray-200 placeholder-gray-500 border
                           border-gray-700 rounded-md focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                    required
                  />
                </div>

                {/* Message Input */}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="sr-only">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    className="bg-tertiary w-full px-4 py-4 text-gray-200 placeholder-gray-500 border
                    border-gray-700 rounded-md focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                    rows="4"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="text-xl w-full p-4 mt-4 font-bold text-primary bg-accent rounded-md transition-transform duration-300 ease-in-out
                    hover:scale-[1.02] hover:bg-accentGlow shadow-lg shadow-accent/20"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;