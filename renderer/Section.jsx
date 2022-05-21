import cc from "classcat";

export function Section({ children, className, ...props }) {
  return (
    <section className={cc([className, "content-wrapper"])} {...props}>
      {children}
    </section>
  );
}
