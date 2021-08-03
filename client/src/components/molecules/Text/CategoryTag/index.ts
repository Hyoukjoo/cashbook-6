import { Span } from "atoms/Text";
import { HtmlTextElement } from "atoms/Text/type";
import { Molecule } from "molecules/type";
import { CategoryTagProps } from "../type";

const CategoryTag: Molecule<CategoryTagProps, HtmlTextElement> = ({
  color,
  name,
}) => {
  const $span = Span("category-tag")(name);

  $span.style.backgroundColor = color;

  return $span;
};

export default CategoryTag;
