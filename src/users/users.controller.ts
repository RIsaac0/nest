import { Controller, Post,Body,Get, Param, ParseIntPipe, Delete  } from '@nestjs/common';
import { CreateNewUser } from './newUser/create-user'; 
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  // Métodos del controlador
constructor(private usersService: UsersService){}

@Get()
   getUsers(){
    return this.usersService.getUsers();
   }

   @Get(':id')
   getUser(@Param('id', ParseIntPipe) id: number): 
   Promise<User> {
    console.log(id)
    console.log(typeof id);
    return this.usersService.getUser(id);
   }

   @Post()
    createUser(@Body() newUser: CreateNewUser){
      return this.usersService.createUser(newUser)

    }

@Delete(':id')
deleteUser(@Param('id', ParseIntPipe) id: number){
  return this.usersService.deleteUser(id)
}
}
