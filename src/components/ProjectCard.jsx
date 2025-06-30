import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Eye } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
        
        {/* View Project Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Link
            to={`/project/${project.id}`}
            className="bg-white text-black px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            <Eye className="w-4 h-4" />
            <span>View Project</span>
          </Link>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-medium">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-black transition-colors">
            {project.title}
          </h3>
          <Link
            to={`/project/${project.id}`}
            className="text-gray-400 hover:text-black transition-colors p-1"
          >
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {project.client}
          </span>
          
          {/* Results Preview */}
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-green-600 font-medium">
              {project.results.conversion}
            </span>
            <span className="text-gray-400">conversion</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;