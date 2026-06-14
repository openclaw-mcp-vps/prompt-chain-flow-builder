import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt Chain Flow Builder — Visual AI Workflow Automation',
  description: 'Drag-and-drop visual builder for multi-step AI prompt workflows. Connect prompt nodes, add branching logic, and automate your AI pipelines without code.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3b7ff0c5-911c-4adb-847e-7f9ca5799b82"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
