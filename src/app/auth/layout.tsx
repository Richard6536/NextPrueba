import { auth } from "@/auth.config"
import { RegisterProvider } from "@/context/register/RegisterProvider"
import { redirect } from "next/navigation";

interface SettingsLayoutProps {
    children: React.ReactNode
  }

export default async function AuthPage({ children }: SettingsLayoutProps) {
  
  const session = await auth();
  if( session?.user ) {
    redirect('/dashboard/home')
  }

  return (
      <RegisterProvider>
        <>
            { children }
        </>
      </RegisterProvider>
  )
}
