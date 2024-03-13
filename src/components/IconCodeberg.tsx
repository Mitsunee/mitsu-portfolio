import type { HTMLProps } from "~/types/HTMLProps";

export function IconCodeberg(props: HTMLProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m 12.211442,6.5004225 a 0.09820632,0.07330426 0 0 0 -0.09525,0.086984 l 4.334983,16.2491585 a 11.252739,11.253123 0 0 0 5.082956,-4.35806 L 12.297146,6.5364733 a 0.09820632,0.07330426 0 0 0 -0.08571,-0.036051 z"></path>
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m 12.000001,1.2480187 c -6.2149361,0 -11.25274103,5.0382209 -11.25274103,11.2531723 0,2.114077 0.59515083,4.185468 1.71813193,5.976787 L 11.847311,6.348391 c 0.06732,-0.087617 0.237084,-0.087617 0.304404,0 l 9.382405,12.130075 c 1.122982,-1.791417 1.71862,-3.863002 1.71862,-5.977275 0,-6.2149514 -5.037805,-11.2531723 -11.252739,-11.2531723 z"></path>
    </svg>
  );
}
