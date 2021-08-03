export const cloneElement = <T extends HTMLElement>(
  targetElement: HTMLElement
): T => {
  return <T>targetElement.cloneNode(true);
};

export const clearChildren = (target: HTMLElement) => {
  const $new = cloneElement(target);

  while ($new.lastChild) {
    $new.lastChild.remove();
  }

  return $new;
};
