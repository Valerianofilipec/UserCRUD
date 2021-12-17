import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const user = this.usersRepository.users.find((user) => (user.email === email));
    if(user){
      throw new Error("Email já associado a um usuário!");
    }
    return this.usersRepository.create({email, name});
  }
}

export { CreateUserUseCase };
