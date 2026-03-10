import { ButtonHTMLAttributes } from "react";
import { cn } from "./cn";

export default function CloseButton(
  buttonProps: ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      id="close-button"
      {...buttonProps}
      className={cn(
        "bg-transparent cursor-pointer z-100 w-12 h-12 rounded-full",
        buttonProps.className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#383838"
        height="20px"
        width="20px"
        version="1.1"
        viewBox="0 0 512 512"
      >
        <g>
          <g>
            <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 512,452.922 315.076,256   " />
          </g>
        </g>
      </svg>
    </button>
  );
}
