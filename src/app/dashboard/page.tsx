import { Layout } from '@/components/layout/layout'
import { DashboardStats } from '@/components/dashboard/dashboard-stats'
import { RecentActivities } from '@/components/dashboard/recent-activities'
import { QuickActions } from '@/components/dashboard/quick-actions'

export default function DashboardPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Alex! ✈️</h1>
          <p className="text-gray-600 mt-2">Ready for your next adventure?</p>
        </div>
        
        <DashboardStats />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <RecentActivities />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>
      </div>
    </Layout>
  )
}
