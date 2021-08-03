import "./style.scss";

import { a } from "atoms/Base";
import { Atom } from "atoms/type";
import { LinkProps } from "./type";

const Link: Atom<LinkProps, HTMLAnchorElement> =
  (...classNames) =>
  ({ href, onClick }) => {
    const $a = a("link", ...classNames);

    $a.addEventListener("click", (e) => {
      e.preventDefault();

      const title = href.replace("/", "");

      window.history.pushState({}, title, href);

      onClick?.(href);
    });

    return $a;
  };

export default Link;
