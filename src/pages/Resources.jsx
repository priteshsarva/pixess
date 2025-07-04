import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight, Download, BookOpen, FileText, Video } from 'lucide-react';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const resources = [
    {
      id: 1,
      type: 'Blog Post',
      title: 'The Ultimate Guide to Modern Web Development',
      excerpt: 'Discover the latest trends and best practices in web development for 2024.',
      date: '2024-01-15',
      author: 'Alex Chen',
      readTime: '8 min read',
      category: 'Development',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: BookOpen
    },
    {
      id: 2,
      type: 'Case Study',
      title: 'How We Increased E-commerce Sales by 300%',
      excerpt: 'A detailed breakdown of our strategy for transforming an online retail business.',
      date: '2024-01-10',
      author: 'Sarah Martinez',
      readTime: '12 min read',
      category: 'Case Studies',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: FileText
    },
    {
      id: 3,
      type: 'Whitepaper',
      title: 'SaaS Design Principles for 2024',
      excerpt: 'Essential design principles for creating successful SaaS applications.',
      date: '2024-01-05',
      author: 'Michael Thompson',
      readTime: 'PDF Download',
      category: 'Design',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Download
    },
    {
      id: 4,
      type: 'Video',
      title: 'Building Scalable React Applications',
      excerpt: 'Watch our lead developer explain best practices for React architecture.',
      date: '2024-01-01',
      author: 'Emily Johnson',
      readTime: '25 min watch',
      category: 'Development',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Video
    },
    {
      id: 5,
      type: 'Blog Post',
      title: 'UX Design Trends That Will Dominate 2024',
      excerpt: 'Stay ahead of the curve with these emerging UX design trends.',
      date: '2023-12-20',
      author: 'Sarah Martinez',
      readTime: '6 min read',
      category: 'Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: BookOpen
    },
    {
      id: 6,
      type: 'Case Study',
      title: 'Mobile App Success Story: HealthTech Transformation',
      excerpt: 'How we helped a healthcare startup scale to 50,000 users.',
      date: '2023-12-15',
      author: 'Alex Chen',
      readTime: '10 min read',
      category: 'Case Studies',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: FileText
    }
  ];

  const categories = ['All', 'Development', 'Design', 'Case Studies', 'Marketing'];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || resource.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="">
      {/* Page Hero */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Resources
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Insights, case studies, and resources to help you stay ahead in the 
              digital landscape and make informed decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-gray-200 bg-white/95 backdrop-blur-md z-40">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-6 items-center justify-between"
          >
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Filter */}
            <div className="flex items-center space-x-4 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                    activeFilter === category
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredResources.map((resource, index) => (
              <motion.article
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-medium">
                      {resource.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <resource.icon className="w-4 h-4 text-gray-700" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(resource.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {resource.author}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-600 transition-colors">
                    {resource.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {resource.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {resource.readTime}
                    </span>
                    <Link
                      to={`/resource/${resource.id}`}
                      className="inline-flex items-center text-black font-medium hover:text-gray-600 transition-colors group-hover:translate-x-1 transform duration-300"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredResources.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <p className="text-gray-600 text-lg">
                No resources found matching your search criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest insights, case studies, and industry trends delivered 
              straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Need Expert Guidance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team is here to help you navigate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-black hover:bg-gray-100">
                Get Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/services" className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-black">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;