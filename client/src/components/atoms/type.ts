import { ClassName } from "commons/type/common";

export type Atom<P = any, E = HTMLElement> = (
  ...classNames: ClassName[]
) => (...props: P[]) => E;
