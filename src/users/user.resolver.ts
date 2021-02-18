import { Query, Resolver, Mutation, Args} from "@nestjs/graphql";
import { UserService } from "src/user.service";
import { User as UserModel, Post as PostModel } from '@prisma/client';


@Resolver('User')
export class UserResolver {
    constructor(private readonly userService: UserService) { }

    usersInput = this.userService.usersAll();

    // usersInput = [
    //     { id: 0, email: 'jscardona42@gmail.com', name: 'nombre 1'},
    //     { id: 1, email: 'jscardona42@gmail.com', name: 'nombre 2'}
    // ];

    @Query('users')
    async users() {
        return this.usersInput;
    }

    @Mutation()
    async createUser(root, { email, name }        
    ):Promise<UserModel>{
        const newUser  = {email, name};
        return this.userService.createUser(newUser);
    }
}