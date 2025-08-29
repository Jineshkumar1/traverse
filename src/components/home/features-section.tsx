'use client'

import { motion } from 'framer-motion'
import { MapPin, Plane, Camera, BarChart3, Globe, Shield, Zap, Heart } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: 'Travel Diaries',
    description: 'Create beautiful travel stories with rich text, photos, and location data. Organize your memories by trip, date, or location.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Plane,
    title: 'Flight Logging',
    description: 'Track every flight with detailed information including airline, aircraft, seat, and personal ratings. Build your aviation history.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Camera,
    title: 'Photo Stories',
    description: 'Upload and organize photos from your travels. Create visual narratives that bring your adventures to life.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: BarChart3,
    title: 'Travel Analytics',
    description: 'Get insights into your travel patterns, favorite destinations, and flight experiences with beautiful charts and statistics.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Globe,
    title: 'Global Exploration',
    description: 'Discover new destinations and track your global footprint. See where you\'ve been and plan where to go next.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your travel memories are safe with enterprise-grade security. Choose what to share publicly or keep private.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Zap,
    title: 'Real-time Sync',
    description: 'Access your travel data anywhere with seamless synchronization across web and mobile devices.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: Heart,
    title: 'Personalized Experience',
    description: 'Customize your travel dashboard with themes, layouts, and preferences that match your style.',
    color: 'from-pink-500 to-pink-600'
  }
]

export function FeaturesSection() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Document Your Journey
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From planning your next adventure to reliving past memories, Traverse provides all the tools you need for a complete travel experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
