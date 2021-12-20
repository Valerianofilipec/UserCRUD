import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const {id} = request.params;

    try {
      let user = this.turnUserAdminUseCase.execute(id);
    } catch (error) {
      if(error){
        return response.status(400).json(error);
      }else{
        return response.json(user);
      }
    }
  }
}

export { TurnUserAdminController };
