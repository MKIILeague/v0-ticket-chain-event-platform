"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Ticket,
  Menu,
  X,
  LogOut,
  User,
  LayoutDashboard,
  Wallet,
  ScanLine,
} from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const { isAuthenticated, role, address, email, logout } = useAuth()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/marketplace", label: "Marketplace" },
  ]

  const roleLinks = isAuthenticated
    ? role === "organizer"
      ? [{ href: "/organizer", label: "Dashboard", icon: LayoutDashboard }]
      : role === "buyer"
        ? [{ href: "/wallet", label: "My Wallet", icon: Wallet }]
        : role === "verifier"
          ? [{ href: "/verifier", label: "Scanner", icon: ScanLine }]
          : []
    : []

  const displayName = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : email || "User"

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Ticket className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            TicketChain
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {roleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <User className="h-4 w-4" />
                  <span className="max-w-[120px] truncate">{displayName}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="text-xs text-muted-foreground">
                  {role?.charAt(0).toUpperCase()}{role?.slice(1)} Account
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Disconnect
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/auth">
              <Button size="sm">Sign In</Button>
            </Link>
          )}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center rounded-md p-2 text-muted-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {roleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-border pt-2">
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    logout()
                    setMobileOpen(false)
                  }}
                  className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-destructive"
                >
                  <LogOut className="h-4 w-4" />
                  Disconnect
                </button>
              ) : (
                <Link
                  href="/auth"
                  onClick={() => setMobileOpen(false)}
                >
                  <Button size="sm" className="w-full">
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
