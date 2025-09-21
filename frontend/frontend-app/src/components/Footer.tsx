export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Product Explorer. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
          <a href="/categories" className="hover:text-white transition">Categories</a>
        </div>
      </div>
    </footer>
  );
}
