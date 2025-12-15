import FileUploader from '../components/FileUploader'
import MotionWrapper from '../components/MotionWrapper' // Import the new wrapper
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  return (
    <div className="max-w-5xl mx-auto">
      
      {/* 1. Header animates immediately */}
      <MotionWrapper>
        <header className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-neutral-400 mt-2">Track your team's progress for IPC 2026.</p>
          </div>
          <div className="text-right">
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1">
                  Phase 2: Case Study
              </Badge>
          </div>
        </header>
      </MotionWrapper>

      {/* 2. Stats Grid animates after 0.2 seconds */}
      <MotionWrapper delay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card className="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-colors">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-neutral-400">Next Deadline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">Dec 23, 2025</div>
            <p className="text-xs text-neutral-500 mt-1">Case Study Submission</p>
          </CardContent>
        </Card>
        
        {/* ... (Keep your other cards here) ... */}
        
        <Card className="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-colors">
          <CardHeader className="pb-2">
             <CardTitle className="text-sm font-medium text-neutral-400">Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500">Pending Review</div>
             <p className="text-xs text-neutral-500 mt-1">Submit before deadline</p>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-colors">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-neutral-400">Selection</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="text-2xl font-bold text-neutral-600">--</div>
             <p className="text-xs text-neutral-500 mt-1">GD List releases Jan 10</p>
          </CardContent>
        </Card>
      </MotionWrapper>

      {/* 3. Upload Section animates after 0.4 seconds */}
      <MotionWrapper delay={0.4}>
        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">Active Tasks</h2>
          <Card className="bg-neutral-900 border-neutral-800 text-white">
            <CardHeader>
              <div className="flex justify-between items-center">
                  <div>
                      <CardTitle>Case Study Submission</CardTitle>
                      <CardDescription className="text-neutral-400 mt-1">
                      Upload your solution for the preliminary round. PDF only.
                      </CardDescription>
                  </div>
                  <Badge variant="outline" className="border-red-500 text-red-500">Due in 8 Days</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <FileUploader teamName="TeamAlpha" />
            </CardContent>
          </Card>
        </section>
      </MotionWrapper>

    </div>
  )
}