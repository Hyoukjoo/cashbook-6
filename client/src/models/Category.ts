import { CategoryDto } from "apis/history/dto";

class Category {
  id?: number;
  name: string;
  color: string;

  constructor(dto: CategoryDto) {
    Object.assign(this, dto);
  }

  static create(dto: CategoryDto) {
    const model = new Category(dto);
    return model;
  }
}

export default Category;
