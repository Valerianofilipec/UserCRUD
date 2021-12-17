import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const user;
    try {
      user = this.usersRepository.findByEmail(email)
    } catch (error) {
      if(error){
        return this.usersRepository.create({email, name});
      } else{
        throw new Error("Email já associado a um usuário!");
      }
    }
  }
}

export { CreateUserUseCase };
