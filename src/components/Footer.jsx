import React from 'react';
import logo from './assets/zysk-logo.png';
const FooterComponent = () => {
  const footerLinks = [
    {
      title: 'Product',
      links: ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing', 'Releases']
    },
    {
      title: 'Company',
      links: ['About us', 'Careers', 'Press', 'News', 'Media Kit', 'Contact']
    },
    {
      title: 'Resources',
      links: ['Blog', 'Newsletter', 'Events', 'Help Center', 'Tutorials', 'Support']
    },
    {
      title: 'Use Cases',
      links: ['Startups', 'Enterprise', 'Government', 'SaaS Center', 'Marketplaces', 'Ecommerce']
    },
    {
      title: 'Social',
      links: ['Twitter', 'LinkedIn', 'Facebook', 'GitHub', 'AngelList', 'Dribbble']
    },
    {
      title: 'Legal',
      links: ['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings', 'Contact']
    }
  ];

  return (
    <footer className="bg-white-800 text-black py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-20">
        {footerLinks.map((col, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-lg opacity-75">{col.title}</h3>
            <ul className="space-y-2">
              {col.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-gray-400">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-8 text-gray-400 text-sm px-20">
  <img src={logo} alt="company-logo" className="h-8 w-auto" />
  <p>© 2077 ZyskTechnologies. All Rights Reserved.</p>
</div>

    </footer>
  );
};

export default FooterComponent;
