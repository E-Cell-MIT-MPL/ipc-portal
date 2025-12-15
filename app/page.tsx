import FileUploader from "@/components/FileUploader"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <h1 className="text-4xl font-bold mb-8">IPC Team Dashboard</h1>
      
      {/* In the real app, "TeamName" will come from the Login session */}
      <div className="w-full max-w-md bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl mb-4">Welcome, Team Alpha</h2>
        <FileUploader teamName="TeamAlpha" />
      </div>
    </main>
  )
}