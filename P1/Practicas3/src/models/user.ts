import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class user {
    @PrimaryGeneratedColumn()
  id!: number;
    @Column()
  name!: string;
    @Column()
  email!: string;
    @Column()
  password!: string;

  // constructor(id: number, name: string, email: string, password: string) {
  //   this.id = id;
  //   this.name = name;
  //   this.email = email;
  //   this.password = password;
  // }
}	