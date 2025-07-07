"use client"

import { usePathname } from "next/navigation"
import Header from "@/components/navbar"
import Footer from "@/components/Footer"

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideLayout = pathname.startsWith("/dashboard") || pathname.startsWith("/login") || pathname.startsWith("/register") ||
    pathname.startsWith("/organizerdashboard") || pathname.startsWith("/reset-password") || pathname.startsWith("/verify-email")

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  )
}
