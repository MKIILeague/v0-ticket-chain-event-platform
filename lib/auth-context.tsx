"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type UserRole = "organizer" | "buyer" | "verifier" | null

interface AuthState {
  isAuthenticated: boolean
  role: UserRole
  address: string | null
  email: string | null
}

interface AuthContextValue extends AuthState {
  loginWithEmail: (email: string, password: string, role: UserRole) => void
  connectWallet: () => void
  logout: () => void
  setRole: (role: UserRole) => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthState>({
    isAuthenticated: false,
    role: null,
    address: null,
    email: null,
  })

  const loginWithEmail = useCallback(
    (email: string, _password: string, role: UserRole) => {
      setAuth({
        isAuthenticated: true,
        role,
        address: null,
        email,
      })
    },
    []
  )

  const connectWallet = useCallback(() => {
    const mockAddress = "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b"
    setAuth({
      isAuthenticated: true,
      role: "buyer",
      address: mockAddress,
      email: null,
    })
  }, [])

  const logout = useCallback(() => {
    setAuth({
      isAuthenticated: false,
      role: null,
      address: null,
      email: null,
    })
  }, [])

  const setRole = useCallback((role: UserRole) => {
    setAuth((prev) => ({ ...prev, role }))
  }, [])

  return (
    <AuthContext.Provider
      value={{ ...auth, loginWithEmail, connectWallet, logout, setRole }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
