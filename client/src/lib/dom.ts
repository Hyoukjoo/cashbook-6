export const cloneElement = <T extends HTMLElement>(
  targetElement: HTMLElement
): T => {
  return <T>targetElement.cloneNode(true);
};

export const clearChildren = (target: HTMLElement) => {
  const $new = target.cloneNode(true) as HTMLElement;
  while ($new.lastChild) {
    $new.lastChild.remove();
  }
  return $new;
};
