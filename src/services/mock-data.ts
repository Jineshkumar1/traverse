import { User, TravelDiary, FlightLog, TravelStats } from '@/types'

// Mock user data
export const mockUser: User = {
  id: 'user-1',
  email: 'traveler@example.com',
  name: 'Alex Johnson',
  avatar: '/avatars/alex.jpg',
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01')
}

// Mock travel diaries
export const mockTravelDiaries: TravelDiary[] = [
  {
    id: 'diary-1',
    userId: 'user-1',
    title: 'Amazing Trip to Japan',
    description: 'An incredible journey through Tokyo, Kyoto, and Osaka. Experienced the perfect blend of traditional culture and modern innovation.',
    location: 'Japan',
    startDate: new Date('2024-03-15'),
    endDate: new Date('2024-03-25'),
    images: [
      '/images/japan/tokyo-tower.jpg',
      '/images/japan/kyoto-temple.jpg',
      '/images/japan/osaka-castle.jpg'
    ],
    tags: ['culture', 'food', 'temples', 'city-life'],
    isPublic: true,
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-03-25')
  },
  {
    id: 'diary-2',
    userId: 'user-1',
    title: 'European Adventure',
    description: 'Explored the beautiful cities of Paris, Rome, and Barcelona. Each city had its own unique charm and history.',
    location: 'Europe',
    startDate: new Date('2024-06-10'),
    endDate: new Date('2024-06-30'),
    images: [
      '/images/europe/eiffel-tower.jpg',
      '/images/europe/colosseum.jpg',
      '/images/europe/sagrada-familia.jpg'
    ],
    tags: ['history', 'architecture', 'art', 'food'],
    isPublic: true,
    createdAt: new Date('2024-06-10'),
    updatedAt: new Date('2024-06-30')
  }
]

// Mock flight logs
export const mockFlightLogs: FlightLog[] = [
  {
    id: 'flight-1',
    userId: 'user-1',
    flightNumber: 'JL001',
    airline: 'Japan Airlines',
    departureAirport: 'LAX',
    arrivalAirport: 'NRT',
    departureTime: new Date('2024-03-15T10:00:00Z'),
    arrivalTime: new Date('2024-03-16T14:00:00Z'),
    aircraft: 'Boeing 787-9',
    seat: '12A',
    class: 'Premium Economy',
    notes: 'Excellent service, comfortable seats, great food',
    rating: 5,
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-03-15')
  },
  {
    id: 'flight-2',
    userId: 'user-1',
    flightNumber: 'AF123',
    airline: 'Air France',
    departureAirport: 'LAX',
    arrivalAirport: 'CDG',
    departureTime: new Date('2024-06-10T22:00:00Z'),
    arrivalTime: new Date('2024-06-11T16:00:00Z'),
    aircraft: 'Airbus A350-900',
    seat: '8C',
    class: 'Business',
    notes: 'Luxurious experience, lie-flat seats, premium dining',
    rating: 5,
    createdAt: new Date('2024-06-10'),
    updatedAt: new Date('2024-06-10')
  }
]

// Mock travel statistics
export const mockTravelStats: TravelStats = {
  totalTrips: 2,
  totalFlights: 2,
  countriesVisited: ['Japan', 'France', 'Italy', 'Spain'],
  totalDistance: 18500,
  favoriteAirlines: ['Japan Airlines', 'Air France'],
  averageRating: 5
}

// Mock data service functions
export const mockDataService = {
  getUser: (): User => mockUser,
  getTravelDiaries: (): TravelDiary[] => mockTravelDiaries,
  getFlightLogs: (): FlightLog[] => mockFlightLogs,
  getTravelStats: (): TravelStats => mockTravelStats,
  
  addTravelDiary: (diary: Omit<TravelDiary, 'id' | 'createdAt' | 'updatedAt'>): TravelDiary => {
    const newDiary: TravelDiary = {
      ...diary,
      id: `diary-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    mockTravelDiaries.push(newDiary)
    return newDiary
  },
  
  addFlightLog: (flight: Omit<FlightLog, 'id' | 'createdAt' | 'updatedAt'>): FlightLog => {
    const newFlight: FlightLog = {
      ...flight,
      id: `flight-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    mockFlightLogs.push(newFlight)
    return newFlight
  }
}
