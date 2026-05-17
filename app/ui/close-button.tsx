import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "./cn";

const CloseButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(function CloseButton(buttonProps, ref) {
  return (
    <button
      id="close-button"
      ref={ref}
      {...buttonProps}
      className={cn(
        "bg-transparent cursor-pointer w-12 h-12 rounded-full text-white",
        buttonProps.className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
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
});

export default CloseButton;
