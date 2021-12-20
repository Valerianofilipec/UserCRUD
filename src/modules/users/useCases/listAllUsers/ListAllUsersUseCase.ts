import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user;
    try {
      user = this.usersRepository.findById(user_id);
    } catch (error) {
      if(error){
        throw error;
      }
    }
    if(user.admin){
      return this.usersRepository.users;
    }
  }
  
}

export { ListAllUsersUseCase };
