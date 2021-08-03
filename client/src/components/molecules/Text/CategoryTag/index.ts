import { Span } from "atoms/Text";
import { HtmlTextElement } from "atoms/Text/type";
import { Molecule } from "molecules/type";
import { CategoryTagProps } from "../type";

const CategoryTag: Molecule<CategoryTagProps, HtmlTextElement> = ({
  color,
  text,
}) => {
  const $span = Span("category-tag")(text);

  $span.style.backgroundColor = color;

  return $span;
};

export default CategoryTag;
