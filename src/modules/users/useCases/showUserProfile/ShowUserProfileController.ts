import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const {user_id} = request.params;
    let user: User;
    try {
      user = this.showUserProfileUseCase.execute({user_id});
    } catch (error) {
      if(error){
        return response.status(400).json(error);
      }else{
        return response.json(user);
      }
    }
  }
}

export { ShowUserProfileController };
