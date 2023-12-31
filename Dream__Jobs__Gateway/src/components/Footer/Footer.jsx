import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
<>

<footer className=" bg-gray-700 text-white" >
  <div className="footer p-10">
        <div>
        <span className="footer-title text-3xl font-bold">Dream Jobs Gateway</span> 
        <p className="w-72 font-semibold" >
          Dream Job gives us the energy to do things that can make us reach your dreams. A dream can help to give motivation, having no motivation is similar to having no desire or inspiration to achieve a goal. The first requirement that can help to achieve your dreams is to set the right goals.
        </p>
        <NavLink className="link link-hover"><img src="/src/assets/Icons/Group 9969.png" alt="" /> </NavLink>
      </div> 
      <div>
        <span className="footer-title text-2xl font-semibold">Company</span> 
        <a className="link link-hover font-semibold">About Us</a> 
        <a className="link link-hover font-semibold">Work</a> 
        <a className="link link-hover font-semibold">Latest News</a> 
        <a className="link link-hover font-semibold">Careers</a>
      </div> 
      <div>
        <span className="footer-title text-2xl font-semibold">Product</span> 
        <a className="link link-hover">Prototype</a> 
        <a className="link link-hover">Plans & Pricing</a> 
        <a className="link link-hover">Customers</a>
        <a className="link link-hover">Integrations</a>
      </div> 
      <div>
      <span className="footer-title text-2xl font-semibold">Support</span> 
        <a className="link link-hover">Help Desk</a> 
        <a className="link link-hover">Sales</a> 
        <a className="link link-hover">Become a Partner</a>
        <a className="link link-hover">Developers</a>
      </div>
      <div>
      <span className="footer-title text-2xl font-semibold">Contact</span> 
        <a className="link link-hover">524 Broadway , NYC</a> 
        <a className="link link-hover">+1 777 - 978 - 5570</a> 
      </div>
  </div>
  <div>
    <hr className="mx-7" />
      <div className="py-4 flex justify-around" >
        <p>@2023 CareerHub. All Rights Reserved</p>
        <p>Powered by Dream Jobs Gateway</p>
    </div>
  </div>
</footer>


</>
    );
};

export default Footer;