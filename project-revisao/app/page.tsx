import Link from 'next/link'
import { Headers } from '@/components/layout/Headers'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Headers />
        
        {children}
      </body>
    </html>
  )
}