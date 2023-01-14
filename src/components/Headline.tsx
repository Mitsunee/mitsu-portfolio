import cc from "classcat";
import type { HTMLPropsCC } from "~/types/HTMLProps";

type HeadlineProps = HTMLPropsCC<"h1">;

export function Headline({ children, className, ...props }: HeadlineProps) {
  return (
    <h1 className={cc([className, "headline"])} {...props}>
      {children}
    </h1>
  );
}
