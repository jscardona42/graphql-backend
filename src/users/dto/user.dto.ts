import { isNotEmpty, IsNotEmpty } from "class-validator";

export class UserDTO {
    id: number

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    post: [];

}