import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Users, Heart, Zap, Award, Coffee } from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$120K - $160K',
      description: 'Join our frontend team to build exceptional user experiences using React, TypeScript, and modern web technologies.',
      requirements: [
        '5+ years of React experience',
        'TypeScript proficiency',
        'Modern CSS and responsive design',
        'Experience with testing frameworks'
      ]
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$100K - $140K',
      description: 'Create beautiful, intuitive designs that solve real user problems and drive business results.',
      requirements: [
        '4+ years of UX/UI design experience',
        'Proficiency in Figma and design systems',
        'Strong portfolio of web and mobile designs',
        'User research and testing experience'
      ]
    },
    {
      id: 3,
      title: 'Backend Developer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$110K - $150K',
      description: 'Build scalable backend systems and APIs that power our client applications.',
      requirements: [
        '4+ years of backend development',
        'Node.js and database experience',
        'API design and microservices',
        'Cloud platforms (AWS/GCP)'
      ]
    },
    {
      id: 4,
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$80K - $110K',
      description: 'Drive growth through data-driven marketing strategies and campaigns.',
      requirements: [
        '3+ years of digital marketing experience',
        'SEO and SEM expertise',
        'Analytics and conversion optimization',
        'Content marketing experience'
      ]
    },
    {
      id: 5,
      title: 'Project Manager',
      department: 'Operations',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$90K - $120K',
      description: 'Lead client projects from conception to delivery, ensuring quality and timeline adherence.',
      requirements: [
        '3+ years of project management',
        'Agile/Scrum methodology',
        'Client relationship management',
        'Technical background preferred'
      ]
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Contract',
      salary: '$130K - $170K',
      description: 'Manage infrastructure, deployment pipelines, and ensure system reliability.',
      requirements: [
        '4+ years of DevOps experience',
        'Docker and Kubernetes',
        'CI/CD pipeline management',
        'Cloud infrastructure expertise'
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance plus wellness stipend'
    },
    {
      icon: Zap,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and unlimited PTO'
    },
    {
      icon: Award,
      title: 'Growth & Learning',
      description: '$2,000 annual learning budget and conference attendance'
    },
    {
      icon: Coffee,
      title: 'Great Perks',
      description: 'Free lunch, snacks, and team events plus home office setup'
    },
    {
      icon: Users,
      title: 'Amazing Team',
      description: 'Work with talented, passionate people who care about quality'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pay',
      description: 'Market-rate salaries plus equity and performance bonuses'
    }
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do'
    },
    {
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions'
    },
    {
      title: 'Collaboration',
      description: 'We work together to achieve extraordinary results'
    },
    {
      title: 'Growth',
      description: 'We invest in our people and their professional development'
    }
  ];

  return (
    <div className="pt-32">
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
              Join Our Team
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Help us build the future of digital experiences. We're looking for 
              talented individuals who share our passion for excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#positions" className="btn-primary">
                View Open Positions
              </a>
              <Link to="/about" className="btn-secondary">
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Work With Us?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We're more than just a digital agency. We're a team of passionate 
                creators, innovators, and problem-solvers who believe in the power 
                of great design and technology to transform businesses.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our culture is built on collaboration, continuous learning, and 
                delivering exceptional results for our clients. We offer a 
                supportive environment where you can grow your skills and make 
                a real impact.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-black mb-1">25+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team with comprehensive benefits 
              and perks that support both work and life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to make an impact? Check out our current openings and find 
              the perfect role for your skills and interests.
            </p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Position Info */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {position.department}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-2" />
                        {position.salary}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {position.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="lg:col-span-1 flex flex-col justify-center">
                    <button className="btn-primary w-full mb-4">
                      Apply Now
                    </button>
                    <button className="btn-secondary w-full">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Hiring Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've designed our hiring process to be transparent, efficient, 
              and focused on finding the right fit for both you and our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Application',
                description: 'Submit your application with resume and portfolio'
              },
              {
                step: '02',
                title: 'Phone Screen',
                description: 'Brief conversation about your background and interests'
              },
              {
                step: '03',
                title: 'Technical Interview',
                description: 'Discuss your skills and work through relevant challenges'
              },
              {
                step: '04',
                title: 'Team Meeting',
                description: 'Meet the team and learn more about our culture'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-black text-white rounded-lg flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
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
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented people to join our team. 
              Send us your resume and let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-black hover:bg-gray-100">
                Get In Touch
              </Link>
              <a href="mailto:careers@pixel.com" className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-black">
                Send Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;