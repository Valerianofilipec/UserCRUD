import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const {user_id} = request.params;
    let users: User[];
    try {
      users = this.listAllUsersUseCase.execute({user_id});  
    } catch (error) {
      if(error){
        return response.status(404).json({error: error.message});
      }else{
        return response.json(users);
      }
    }
  }
}

export { ListAllUsersController };
