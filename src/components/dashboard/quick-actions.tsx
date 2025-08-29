'use client'

import { motion } from 'framer-motion'
import { Plus, Plane, MapPin, Camera, BarChart3 } from 'lucide-react'
import Link from 'next/link'

const actions = [
  {
    title: 'Add Travel Diary',
    description: 'Record your latest adventure',
    icon: MapPin,
    href: '/diaries/new',
    color: 'from-blue-500 to-blue-600',
    delay: 0.1
  },
  {
    title: 'Log Flight',
    description: 'Track your flight experience',
    icon: Plane,
    href: '/flights/new',
    color: 'from-purple-500 to-purple-600',
    delay: 0.2
  },
  {
    title: 'Upload Photos',
    description: 'Add memories to your trips',
    icon: Camera,
    href: '/photos/upload',
    color: 'from-green-500 to-green-600',
    delay: 0.3
  },
  {
    title: 'View Statistics',
    description: 'See your travel insights',
    icon: BarChart3,
    href: '/stats',
    color: 'from-orange-500 to-orange-600',
    delay: 0.4
  }
]

export function QuickActions() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
      
      <div className="space-y-4">
        {actions.map((action) => (
          <motion.div
            key={action.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: action.delay }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={action.href}
              className="block p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200 group"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${action.color} group-hover:scale-110 transition-transform duration-200`}>
                  <action.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-500">{action.description}</p>
                </div>
                <Plus className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
