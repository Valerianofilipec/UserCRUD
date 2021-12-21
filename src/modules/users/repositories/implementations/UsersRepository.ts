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
    const user = new User();
    const userR: User = Object.assign({...user, name, email});

    this.users.push(userR);

    return userR;
  }

   findById(id: string): User | undefined {
    const user =  this.users.find((user) => (user.id === id));
    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find((user) => (user.email === email));
    return user;
  }

  turnAdmin(receivedUser: User): User {
    const user = this.users.find((user) => (user.id === receivedUser.id));
  
    const returnedUser =  Object.assign({...user, admin: true, updated_at: new Date() });
    return returnedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
