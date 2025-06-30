import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  Code, 
  Cloud, 
  Settings, 
  TrendingUp, 
  Smartphone,
  ArrowRight 
} from 'lucide-react';

const iconMap = {
  Palette: Palette,
  Code: Code,
  Cloud: Cloud,
  Settings: Settings,
  TrendingUp: TrendingUp,
  Smartphone: Smartphone,
};

const ServiceCard = ({ service, index }) => {
  const IconComponent = iconMap[service.icon] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200"
    >
      {/* Icon */}
      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
        <IconComponent className="w-6 h-6" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-black transition-colors">
        {service.title}
      </h3>

      <p className="text-gray-600 mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Sub-services */}
      <ul className="space-y-2 mb-8">
        {service.subServices.slice(0, 4).map((subService, idx) => (
          <li key={idx} className="text-sm text-gray-500 flex items-center">
            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3" />
            {subService}
          </li>
        ))}
        {service.subServices.length > 4 && (
          <li className="text-sm text-gray-400 italic">
            +{service.subServices.length - 4} more services
          </li>
        )}
      </ul>

      {/* CTA */}
      <Link
        to="/services"
        className="inline-flex items-center text-black font-medium hover:text-gray-600 transition-colors group-hover:translate-x-1 transform duration-300"
      >
        Learn More
        <ArrowRight className="ml-2 w-4 h-4" />
      </Link>

      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default ServiceCard;