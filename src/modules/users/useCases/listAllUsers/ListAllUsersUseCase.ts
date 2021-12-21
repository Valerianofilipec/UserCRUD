import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if(!user){
      throw new Error("This User is not an Admin!");
    }

      if(user.admin==false){
        throw new Error("User not exist!");
      }else{
        return this.usersRepository.list();
      }
  }
}

export { ListAllUsersUseCase };
