import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          For any inquiries or assistance regarding data analytics
          centralization, please contact our dedicated support team
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400 pb-2">Solutions</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">Analytics</li>
            <li className="py-2 text-sm cursor-pointer">Marketing</li>
            <li className="py-2 text-sm cursor-pointer">Commerce</li>
            <li className="py-2 text-sm cursor-pointer">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 pb-2">Support</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">Pricing</li>
            <li className="py-2 text-sm cursor-pointer">Documentation</li>
            <li className="py-2 text-sm cursor-pointer">Guides</li>
            <li className="py-2 text-sm cursor-pointer">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 pb-2">Company</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">About</li>
            <li className="py-2 text-sm cursor-pointer">Blog</li>
            <li className="py-2 text-sm cursor-pointer">Jobs</li>
            <li className="py-2 text-sm cursor-pointer">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 pb-2">Legal</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">Claim</li>
            <li className="py-2 text-sm cursor-pointer">Policy</li>
            <li className="py-2 text-sm cursor-pointer">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
