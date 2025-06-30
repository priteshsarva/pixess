import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, Users, Target } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="pt-32 section-padding text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/work" className="btn-primary">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32">
      {/* Project Hero */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/work"
              className="inline-flex items-center text-gray-600 hover:text-black mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className="text-gray-500">{project.industry}</span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  {project.title}
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center space-x-8 mb-8">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Client</div>
                    <div className="font-semibold">{project.client}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Timeline</div>
                    <div className="font-semibold">6 months</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Team Size</div>
                    <div className="font-semibold">8 people</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button className="btn-primary group">
                    Visit Live Site
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </button>
                  <Link to="/contact" className="btn-secondary">
                    Start Similar Project
                  </Link>
                </div>
              </div>

              <div className="relative">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {project.results.conversion}
                  </div>
                  <div className="text-sm text-gray-600">Conversion Increase</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-16 bg-black text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Key Results
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The impact of our work measured in real business outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, label: 'Conversion Rate', value: project.results.conversion },
              { icon: Users, label: 'New Users', value: project.results.users },
              { icon: Calendar, label: 'Revenue Growth', value: project.results.revenue },
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/10 p-8 rounded-2xl"
              >
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <result.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{result.value}</div>
                <div className="text-gray-300">{result.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {project.problem}
              </p>

              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {project.solution}
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Project Timeline</h3>
                <div className="space-y-4">
                  {[
                    { phase: 'Research & Discovery', duration: '2 weeks' },
                    { phase: 'Design & Prototyping', duration: '4 weeks' },
                    { phase: 'Development', duration: '12 weeks' },
                    { phase: 'Testing & Launch', duration: '4 weeks' },
                  ].map((phase, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{phase.phase}</span>
                      <span className="text-gray-500">{phase.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Project Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visual showcase of the final product and key design elements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-8">
              <span className="text-2xl">💬</span>
            </div>
            <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
              "{project.testimonial}"
            </blockquote>
            <div className="text-gray-600">
              — Client from {project.client}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-black hover:bg-gray-100">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/work" className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-black">
                View More Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;