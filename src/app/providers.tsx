// app/providers.tsx

import {NextUIProvider} from '@nextui-org/react'
import { AuthProvider } from './auth/authContext'
export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <AuthProvider>
      {children}
      </AuthProvider>
   

    </NextUIProvider>
  )
}