declare module 'react-sidebar' {
  import * as React from 'react'
  
  export interface SidebarProps {
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties
  }
  
  export interface SidebarContentProps {
    children?: React.ReactNode
    className?: string
  }
  
  export interface SidebarGroupProps {
    children?: React.ReactNode
    className?: string
  }
  
  export interface SidebarGroupContentProps {
    children?: React.ReactNode
    className?: string
  }
  
  export interface SidebarGroupLabelProps {
    children?: React.ReactNode
    className?: string
  }
  
  export interface SidebarHeaderProps {
    children?: React.ReactNode
    className?: string
  }
  
  export interface SidebarMenuProps {
    children?: React.ReactNode
    className?: string
  }
  
  export interface SidebarMenuButtonProps {
    children?: React.ReactNode
    className?: string
    asChild?: boolean
    isActive?: boolean
    size?: "default" | "sm" | "lg" | "icon"
  }
  
  export interface SidebarMenuItemProps {
    children?: React.ReactNode
    className?: string
  }
  
  export interface SidebarRailProps {
    className?: string
  }
  
  export interface SidebarInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
  }
  
  export const Sidebar: React.FC<SidebarProps>
  export const SidebarContent: React.FC<SidebarContentProps>
  export const SidebarGroup: React.FC<SidebarGroupProps>
  export const SidebarGroupContent: React.FC<SidebarGroupContentProps>
  export const SidebarGroupLabel: React.FC<SidebarGroupLabelProps>
  export const SidebarHeader: React.FC<SidebarHeaderProps>
  export const SidebarMenu: React.FC<SidebarMenuProps>
  export const SidebarMenuButton: React.FC<SidebarMenuButtonProps>
  export const SidebarMenuItem: React.FC<SidebarMenuItemProps>
  export const SidebarRail: React.FC<SidebarRailProps>
  export const SidebarInput: React.FC<SidebarInputProps>
}