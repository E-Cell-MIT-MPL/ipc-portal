'use client' 

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function FileUploader({ teamName }: { teamName: string }) {
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState('')

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true)
      setMessage('')

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select a file to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${teamName}-casestudy.${fileExt}` // e.g., "TeamAlpha-casestudy.pdf"
      const filePath = `${fileName}`

      // uploading to supabase storage
      const { error: uploadError } = await supabase.storage
        .from('submissions') //bucket name - "submissions"
        .upload(filePath, file, { upsert: true })

      if (uploadError) {
        throw uploadError
      }

      setMessage('✅ Upload successful! Best of luck.')
    } catch (error) {
      setMessage(`❌ Error: ${(error as Error).message}`)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg text-center">
      <h3 className="text-lg font-semibold mb-4">Upload Case Study (Phase 2)</h3>
      
      {uploading ? (
        <p className="text-blue-500">Uploading... please wait.</p>
      ) : (
        <input
          type="file"
          accept=".pdf,.docx"
          onChange={handleUpload}
          disabled={uploading}
          className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100
          "
        />
      )}
      
      {message && <p className="mt-4 font-medium">{message}</p>}
    </div>
  )
}