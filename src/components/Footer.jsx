import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Web Development', path: '/services' },
        { name: 'Design & Branding', path: '/services' },
        { name: 'SaaS Development', path: '/services' },
        { name: 'Mobile Apps', path: '/services' },
        { name: 'Marketing & Growth', path: '/services' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Work', path: '/work' },
        { name: 'Careers', path: '/careers' },
        { name: 'Resources', path: '/resources' },
        { name: 'Contact', path: '/contact' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '/resources' },
        { name: 'Case Studies', path: '/resources' },
        { name: 'Whitepapers', path: '/resources' },
        { name: 'Help Center', path: '/resources' },
        { name: 'API Documentation', path: '/resources' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: '#', icon: 'linkedin' },
    { name: 'Twitter', url: '#', icon: 'twitter' },
    { name: 'GitHub', url: '#', icon: 'github' },
    { name: 'Dribbble', url: '#', icon: 'dribbble' },
  ];

  return (
    <footer className="bg-black text-white">
      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="container-custom py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-black hover:bg-gray-100">
                Start Your Project
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/work" className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-black">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold">Pixes</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We're a premium digital agency specializing in web development, design, 
              and growth strategies that transform businesses and drive results.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <a href="mailto:hello@Pixes.com" className="text-gray-300 hover:text-white">
                  hello@Pixes.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {footerSections.map((section, index) => (
                <div key={section.title}>
                  <h3 className="font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.path}
                          className="text-gray-300 hover:text-white transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-gray-400">
                © {currentYear} Pixes. All rights reserved.
              </span>
              <div className="flex items-center space-x-4 text-sm">
                <Link to="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </Link>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-sm font-medium">
                    {social.icon === 'linkedin' && 'in'}
                    {social.icon === 'twitter' && 'tw'}
                    {social.icon === 'github' && 'gh'}
                    {social.icon === 'dribbble' && 'dr'}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;