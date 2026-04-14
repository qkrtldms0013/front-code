"use client"

import {ReactNode} from "react"

export type ButtonProps = {
  text?: string;
  color?: "green" | "blue";
  onClickMyButton?: (text: string) => void;
  children?: ReactNode;
};

export default function Button({ text, color, onClickMyButton, children }: ButtonProps) {
  let style = "bg-red-600 px-4 py-2 text-center text-white rounded-xs"

  if (color === "blue") {
    style = "bg-blue-600 px-4 py-2 text-center text-white rounded-xs"
  }

  if (color === "green") {
    style = "bg-green-600 px-4 py-2 text-center text-white rounded-xs"
  }

  return (
    <div
      onClick={() => {
        if (onClickMyButton && text) {
          onClickMyButton(text)
        }
      }}
      className={style}
    >
      {children}
    </div>
  )
}