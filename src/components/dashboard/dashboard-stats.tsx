'use client'

import { motion } from 'framer-motion'
import { Plane, MapPin, Globe, Star, TrendingUp } from 'lucide-react'
import { mockTravelStats } from '@/services/mock-data'

const stats = [
  {
    title: 'Total Trips',
    value: mockTravelStats.totalTrips,
    icon: MapPin,
    color: 'from-blue-500 to-blue-600',
    change: '+2 this year'
  },
  {
    title: 'Flights Taken',
    value: mockTravelStats.totalFlights,
    icon: Plane,
    color: 'from-purple-500 to-purple-600',
    change: '+1 this month'
  },
  {
    title: 'Countries Visited',
    value: mockTravelStats.countriesVisited.length,
    icon: Globe,
    color: 'from-green-500 to-green-600',
    change: '+2 new countries'
  },
  {
    title: 'Average Rating',
    value: mockTravelStats.averageRating,
    icon: Star,
    color: 'from-yellow-500 to-yellow-600',
    change: 'Excellent!'
  }
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              <p className="text-xs text-green-600 mt-1">{stat.change}</p>
            </div>
            <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
