import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"


interface IRequest {
  name: string,
  description: string,
}
// Single Responsability Principle
class CreateCategoryUseCase {
  //Dependency Inversion Principle
constructor(private categoriesRepository: ICategoriesRepository){}

  execute({name, description}: IRequest) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if(categoryAlreadyExists){
      throw new Error("Category already existis!!!")
    }

    this.categoriesRepository.create({name, description})
  }
}

export { CreateCategoryUseCase }