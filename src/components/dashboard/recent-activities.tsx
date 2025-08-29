'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Plane, Clock, Star } from 'lucide-react'
import { mockTravelDiaries, mockFlightLogs } from '@/services/mock-data'
import { formatDate } from '@/lib/utils'

export function RecentActivities() {
  const recentDiaries = mockTravelDiaries.slice(0, 3)
  const recentFlights = mockFlightLogs.slice(0, 3)

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activities</h2>
      
      <div className="space-y-6">
        {/* Recent Travel Diaries */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-blue-600" />
            Recent Travel Diaries
          </h3>
          <div className="space-y-3">
            {recentDiaries.map((diary, index) => (
              <motion.div
                key={diary.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 truncate">{diary.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{diary.location}</p>
                  <div className="flex items-center mt-2 text-xs text-gray-400">
                    <Calendar className="h-3 w-3 mr-1" />
                    {formatDate(diary.startDate)} - {formatDate(diary.endDate)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Flights */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
            <Plane className="h-5 w-5 mr-2 text-purple-600" />
            Recent Flights
          </h3>
          <div className="space-y-3">
            {recentFlights.map((flight, index) => (
              <motion.div
                key={flight.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (index + 3) * 0.1 }}
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Plane className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 truncate">
                    {flight.airline} {flight.flightNumber}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {flight.departureAirport} → {flight.arrivalAirport}
                  </p>
                  <div className="flex items-center mt-2 text-xs text-gray-400">
                    <Clock className="h-3 w-3 mr-1" />
                    {formatDate(flight.departureTime)}
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < flight.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
