import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-10">
        Have questions, feedback, or suggestions? We’d love to hear from you.
      </p>

      {/* Two-column layout */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="bg-white shadow-md rounded-2xl p-8 space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows={4}
              placeholder="Your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Office</h2>
            <div className="flex items-center space-x-3 mb-3">
              <MapPin className="text-blue-600 w-5 h-5" />
              <p className="text-gray-700">123 Product Street, Innovation City</p>
            </div>
            <div className="flex items-center space-x-3 mb-3">
              <Phone className="text-blue-600 w-5 h-5" />
              <p className="text-gray-700">+91 98765 43210</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-600 w-5 h-5" />
              <p className="text-gray-700">support@productexplorer.com</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Connect with Us</h2>
            <div className="flex space-x-6 text-gray-600">
              <a href="#" className="hover:text-blue-600"><Facebook /></a>
              <a href="#" className="hover:text-blue-600"><Twitter /></a>
              <a href="#" className="hover:text-blue-600"><Linkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
