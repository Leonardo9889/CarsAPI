import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


class ListCategoriesUseCase{
   //Dependency Inversion Principle
constructor(private categoriesRepository: ICategoriesRepository){}

  execute(): Category[] {
    const listCategories = this.categoriesRepository.list()

    return listCategories
  }
}

export {ListCategoriesUseCase}