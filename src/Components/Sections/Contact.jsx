import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaGithub, FaLinkedin, FaTwitter, FaFacebookF, FaUser, FaCommentDots, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Print data to console
    console.log("Message Sent:", formData);

    // Clear the input fields
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const contactInfo = [
    {
      id: 1,
      title: "Email",
      value: "daudansari6472@gmail.com",
      icon: <FaEnvelope />,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      shadow: "hover:shadow-[0_0_10px_-5px_rgba(34,197,94,0.3)]"
    },
    {
      id: 2,
      title: "Phone",
      value: "+91 9026350956",
      icon: <FaPhoneAlt />,
      color: "text-green-500",
      bg: "bg-green-500/10",
      shadow: "hover:shadow-[0_0_10px_-5px_rgba(34,197,94,0.3)]"
    },
    {
      id: 3,
      title: "Location",
      value: "Azamgarh, India",
      icon: <FaMapMarkerAlt />,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      shadow: "hover:shadow-[0_0_10px_-5px_rgba(34,197,94,0.3)]"
    },
    {
      id: 4,
      title: "Availability",
      value: "Mon - Sat, 9 AM - 6 PM",
      icon: <FaClock />,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      shadow: "hover:shadow-[0_0_10px_-5px_rgba(34,197,94,0.3)]"
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "#" },
    { icon: <FaLinkedin />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaFacebookF />, href: "#" },
  ];

  return (
    <section className="py-24 px-4 bg-[#111827] min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Touch</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Have a question or want to work together? Drop me a message below.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* --- Left Column: Contact Info --- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Top Grid: Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`p-6 rounded-2xl bg-[#1F2937] border border-gray-800 shadow-lg transition-shadow duration-300 ${info.shadow} group`}
                >
                  <div className={`w-12 h-12 rounded-lg ${info.bg} ${info.color} flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <h3 className="text-gray-400 text-sm font-medium mb-1">{info.title}</h3>
                  <p className="text-white font-semibold break-all">{info.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Bottom Card: Let's Work Together */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="p-8 rounded-2xl bg-[#1F2937] border border-gray-800 shadow-lg hover:shadow-[0_0_10px_-5px_rgba(255,255,255,0.1)] transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm currently available for freelance work and open to full-time opportunities. 
                If you have a project that needs a creative touch, I'd love to hear about it.
              </p>
              
              <h4 className="text-white font-medium mb-4">Connect with me:</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -3, backgroundColor: "#374151", boxShadow: "0 0 15px rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-[#111827] flex items-center justify-center text-gray-400 hover:text-white transition-all border border-gray-700"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* --- Right Column: Contact Form --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="p-8 rounded-2xl bg-[#1F2937] border border-gray-800 h-full shadow-xl"
          >
            <h2 className="text-2xl font-bold text-white text-center mb-8">Send Me a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Name <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-blue-500 transition-colors">
                    <FaUser />
                  </div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name" 
                    required
                    className="w-full bg-[#111827] border border-gray-700 text-white rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-blue-500 transition-colors">
                    <FaEnvelope />
                  </div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com" 
                    required
                    className="w-full bg-[#111827] border border-gray-700 text-white rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Subject</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-blue-500 transition-colors">
                    <FaCommentDots />
                  </div>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?" 
                    className="w-full bg-[#111827] border border-gray-700 text-white rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message <span className="text-red-500">*</span></label>
                <textarea 
                  rows="5" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..." 
                  required
                  className="w-full bg-[#111827] border border-gray-700 text-white rounded-lg p-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-500 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(37, 99, 235, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <FaPaperPlane className="text-sm" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;