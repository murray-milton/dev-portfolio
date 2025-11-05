import React from 'react';

function Contact() {
  return (
    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight primary-color">
          Contact Me
        </h2>
      </div>
      <div className="max-w-[800px] mx-auto">
        <div className="mt-6 bg-[#161616]">
          <div className="p-10">
            <form action="https://getform.io/f/lbkmkjnb" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                           border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                           border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="sr-only">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    className="bg-[#161616] w-full px-4 py-4 text-gray-400 border
                    border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md transition duration-300 ease-in-out
                    hover:bg-primary-dark disabled:opacity-50"
                    disabled={false} // You can control this with state based on the form's submission status
                  >
                    Send
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
