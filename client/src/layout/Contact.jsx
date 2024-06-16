import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 ">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="name">Name:</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" name="name" />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="email">Email:</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="email" name="email" />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="message">Message:</label>
            <textarea className="w-full p-2 border border-gray-300 rounded" name="message"></textarea>
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
