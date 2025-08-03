import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-section text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Copyright */}
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-2">
              Bhushan<span className="text-primary">.</span>
            </div>
            <p className="text-gray-400">
              © {currentYear} Bhushan Waman More. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <nav className="flex gap-6">
              <button
                onClick={() => {
                  const element = document.querySelector("#home");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-gray-400 hover:text-white smooth-transition"
              >
                Home
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector("#about");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-gray-400 hover:text-white smooth-transition"
              >
                About
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector("#projects");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-gray-400 hover:text-white smooth-transition"
              >
                Projects
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-gray-400 hover:text-white smooth-transition"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Built with <Heart size={16} className="text-red-500" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;