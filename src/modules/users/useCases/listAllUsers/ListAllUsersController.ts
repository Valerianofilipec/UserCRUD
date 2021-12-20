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
        return response.status(404).json({error: error.message});
      }else{
        return response.json(users);
      }
    }
  }
}

export { ListAllUsersController };
