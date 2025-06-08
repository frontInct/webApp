import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";

const CheckmarkOutline = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={12}
    viewBox="0 0 16 12"
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M6 9L2 5L0.5 6.5L6 12L15.5 2L14 0.5L6 9Z"
    />
  </svg>
);

const ForwardRef = forwardRef(CheckmarkOutline);
const Memo = memo(ForwardRef);
export default Memo;