// app/providers.tsx

import {NextUIProvider} from '@nextui-org/react'
import { AuthProvider } from './auth/authContext'
export function Providers({children}) {
  return (
    <NextUIProvider>
      <AuthProvider>
      {children}
      </AuthProvider>
   

    </NextUIProvider>
  )
}