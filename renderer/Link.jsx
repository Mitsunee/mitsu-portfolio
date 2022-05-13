import { usePageContext } from "./usePageContext";
import cc from "classcat";

export const Link = function (props) {
  const pageContext = usePageContext();

  return (
    <a
      {...props}
      className={cc([
        props.className,
        pageContext.urlPathname === props.href && "is-active"
      ])}
    />
  );
};
