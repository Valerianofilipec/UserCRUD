import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const {id} = request.params;

    try {
      this.showUserProfileUseCase.execute(id);
    } catch (error) {
      if(error){
        return response.status(400).json(error);
      }
    }

    return response.json(user);
  }
}

export { ShowUserProfileController };
