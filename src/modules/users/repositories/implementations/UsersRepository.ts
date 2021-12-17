import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    let user = new User();
    user = Object.assign({...user, name, email});

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((user) => (user.id === id));
    // possibilidade de um try...catch! mas fica pra mais tarde, quando der algum erro LOL
    /*
    findById(id: string): User | Error
    if(!user){
      throw new Error(`Não exite User com este ID: ${id}`);
    }
    */
    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find((user) => (user.email === email));

    return user;
  }

  turnAdmin(receivedUser: User): User {
    const user = this.users.find((user) => (user.id === receivedUser.id));

    const update = {
      admin: true, 
      update_at: new Date()
    };

    const returnedUser = Object.assign({...user, update });
    return returnedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
