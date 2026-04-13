import * as React from "react"

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {}
export interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  isActive?: boolean
}
export interface SidebarMenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {}
export interface SidebarRailProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface SidebarInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Sidebar({ className, children, ...props }: SidebarProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

export function SidebarContent({ className, children, ...props }: SidebarContentProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

export function SidebarGroup({ className, children, ...props }: SidebarGroupProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

export function SidebarGroupContent({ className, children, ...props }: SidebarGroupContentProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

export function SidebarGroupLabel({ className, children, ...props }: SidebarGroupLabelProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

export function SidebarHeader({ className, children, ...props }: SidebarHeaderProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

export function SidebarMenu({ className, children, ...props }: SidebarMenuProps) {
  return (
    <ul className={className} {...props}>
      {children}
    </ul>
  )
}

export function SidebarMenuButton({ className, children, ...props }: SidebarMenuButtonProps) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}

export function SidebarMenuItem({ className, children, ...props }: SidebarMenuItemProps) {
  return (
    <li className={className} {...props}>
      {children}
    </li>
  )
}

export function SidebarRail({ className, ...props }: SidebarRailProps) {
  return <div className={className} {...props} />
}

export function SidebarInput({ className, ...props }: SidebarInputProps) {
  return <input className={className} {...props} />
}