const checkNodeChanged = (node1: HTMLElement, node2: HTMLElement) => {
  const node1Attributes = node1.attributes;
  const node2Attributes = node2.attributes;

  if (node1Attributes.length !== node2Attributes.length) {
    return true;
  }

  const hasDifferentAttribute = Array.from(node1Attributes).find(
    (attribute) => {
      const { name } = attribute;
      const attribute1 = node1.getAttribute(name);
      const attribute2 = node2.getAttribute(name);

      return attribute1 !== attribute2;
    }
  );

  if (hasDifferentAttribute) {
    return true;
  }

  if (
    node1.children.length === 0 &&
    node2.children.length === 0 &&
    node1.textContent !== node2.textContent
  ) {
    return true;
  }

  return false;
};

const applyDiff = (
  parentNode: HTMLElement,
  realNode: HTMLElement,
  virtualNode: HTMLElement
) => {
  if (realNode && !virtualNode) {
    realNode.remove();
    return;
  }

  if (!realNode && virtualNode) {
    parentNode.append(virtualNode);
    return;
  }

  if (checkNodeChanged(realNode, virtualNode)) {
    realNode.replaceWith(virtualNode);
    return;
  }

  const realNodeChildren = <HTMLElement[]>Array.from(realNode.children);
  const virtualNodeChildren = <HTMLElement[]>Array.from(virtualNode.children);

  const maxChildrenLength = Math.max(
    realNodeChildren.length,
    virtualNodeChildren.length
  );

  for (let i = 0; i < maxChildrenLength; i++) {
    applyDiff(realNode, realNodeChildren[i], virtualNodeChildren[i]);
  }
};

export default applyDiff;
