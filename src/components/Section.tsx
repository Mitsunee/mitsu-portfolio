import cc from "classcat";
import type { HTMLPropsCC, WithChildren } from "~/types/HTMLProps";

type SectionProps = HTMLPropsCC<"section">;

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section {...props} className={cc([className, "content-section"])}>
      {children}
    </section>
  );
}

export function Columns({ children }: WithChildren) {
  return <div className={"content-columns"}>{children}</div>;
}
