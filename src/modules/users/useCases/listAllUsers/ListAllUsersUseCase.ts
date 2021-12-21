import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    let user: User;
    try {
      user = this.usersRepository.findById(user_id);
    } catch (error) {
      if(error){
        throw error;
      }else{
        if(user.admin){
          return this.usersRepository.list();
        }
      }
    }
  }
  
}

export { ListAllUsersUseCase };
