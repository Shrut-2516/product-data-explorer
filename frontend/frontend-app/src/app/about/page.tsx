export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        Welcome to <span className="font-semibold">Product Explorer</span> – your go-to platform
        for discovering, comparing, and learning about products across multiple categories.
        Our goal is simple: make shopping smarter, faster, and more fun.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">Our Mission</h2>
          <p className="text-gray-700">
            We aim to help users explore products with ease, access detailed reviews,
            and make informed purchasing decisions confidently.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">Our Vision</h2>
          <p className="text-gray-700">
            We envision a future where product discovery is seamless and personalized,
            giving users the power to find exactly what they need quickly.
          </p>
        </div>
      </div>
    </div>
  );
}
