import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Users")
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
