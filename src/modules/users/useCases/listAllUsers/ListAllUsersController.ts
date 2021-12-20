import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const {user_id} = request.params;
    
    try {
      let users = ListAllUsersUseCase.execute(user_id);  
    } catch (error) {
      if(error){
        return response.status(400).json(error);
      }else{
        return response.json(users);
      }
    }
  }
}

export { ListAllUsersController };
