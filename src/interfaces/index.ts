import {ReactNode} from 'react'
export interface IRoute {
    name: string;
    path: string;
    exact: boolean;
    component: (props: any) => any;
    props?: any;
  }
  // button
  export interface buttonType {
    color: any;
    buttonName: string;
    variant: 'text' | 'outlined' | 'contained';
    disabled?: boolean;
    className: string | undefined;
    onClick: (event: React.MouseEvent<HTMLElement>) => any;
  }

  export type ButtonProps ={
    className?:string
    variant?: "text" | "outlined" | "contained" | undefined
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined
    style?:any
    size?:"medium" | "large" | "small" 
    startIcon?:ReactNode
    endIcon?:ReactNode
    disabled?:boolean
    onClick?:any
    isLoading?:boolean
    buttonName:string
}