import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-8xl lg:text-9xl font-bold text-gray-200 mb-8"
          >
            404
          </motion.div>

          {/* Error Message */}
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Page Not Found
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been 
            moved, deleted, or you entered the wrong URL.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/" className="btn-primary group">
              <Home className="mr-2 w-4 h-4" />
              Go Home
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="btn-secondary group"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Go Back
            </button>
          </div>

          {/* Search Suggestion */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold mb-4">Looking for something specific?</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <Link to="/services" className="text-gray-600 hover:text-black transition-colors">
                Our Services
              </Link>
              <Link to="/work" className="text-gray-600 hover:text-black transition-colors">
                Our Work
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-black transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-black transition-colors">
                Contact
              </Link>
              <Link to="/resources" className="text-gray-600 hover:text-black transition-colors">
                Resources
              </Link>
              <Link to="/careers" className="text-gray-600 hover:text-black transition-colors">
                Careers
              </Link>
            </div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-20 h-20 bg-gray-100 rounded-full opacity-50"
          />
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, -5, 5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-20 right-10 w-16 h-16 bg-gray-200 rounded-full opacity-30"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;