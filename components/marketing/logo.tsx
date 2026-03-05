import React from "react"
import { cn } from "@/lib/utils"

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  iconClassName?: string
  textClassName?: string
}

export function Logo({ className, iconClassName, textClassName, ...props }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      <LogoIcon className={cn("w-8 h-8", iconClassName)} />
      <span className={cn("text-xl font-bold tracking-tight", textClassName)}>
        RentAFlow
      </span>
    </div>
  )
}

export function LogoIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 45 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary", className)}
      {...props}
    >
      <path
        d="M10 0H35C45 0 45 15 35 15H20V20H35L45 40H32L24 22H20V40H10V0Z"
        fill="currentColor"
      />
      <path
        d="M0 10H8V30H0V10Z"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  )
}
