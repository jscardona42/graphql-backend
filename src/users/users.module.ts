import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { PostService } from 'src/post.service';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user.service';
import { UserResolver } from './user.resolver';

@Module({
    providers: [UserService, PrismaService, PostService, UserResolver],
    exports: [UserResolver]
})
export class UsersModule {

}
