import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1 mx-10">
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-400">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-400">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-400">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 mx-10">
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-400">
                  Account
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-400">
                  Help
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-400">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 mx-10">
            <h3 className="text-xl font-semibold mb-4">Legals</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-400">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-400">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm">
        <p className="pb-3">
          &copy; {new Date().getFullYear()}. All Rights Reserved by Abhi
        </p>
      </div>
    </footer>
  );
}

export default Footer;
