export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export interface TravelDiary {
  id: string
  userId: string
  title: string
  description: string
  location: string
  startDate: Date
  endDate: Date
  images: string[]
  tags: string[]
  isPublic: boolean
  createdAt: Date
  updatedAt: Date
}

export interface FlightLog {
  id: string
  userId: string
  flightNumber: string
  airline: string
  departureAirport: string
  arrivalAirport: string
  departureTime: Date
  arrivalTime: Date
  aircraft: string
  seat: string
  class: 'Economy' | 'Premium Economy' | 'Business' | 'First'
  notes: string
  rating: number
  createdAt: Date
  updatedAt: Date
}

export interface TravelStats {
  totalTrips: number
  totalFlights: number
  countriesVisited: string[]
  totalDistance: number
  favoriteAirlines: string[]
  averageRating: number
}

export interface Location {
  city: string
  country: string
  coordinates?: {
    lat: number
    lng: number
  }
}
