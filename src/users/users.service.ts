import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateNewUser } from './newUser/create-user';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>
  ) {}

   createUser(user: CreateNewUser){
   const newUser=this.usersRepository.create(user)
   return this.usersRepository.save(newUser)
   }


  getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  getUser(id: number) {
    return this.usersRepository.findOne({
      where:{
          id
      }
     })
  }

deleteUser(id: number){
  return this.usersRepository.delete({id})
}

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}