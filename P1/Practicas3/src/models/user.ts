// import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
// import { View } from "./view";
// @Entity()

// export class user {
//     @PrimaryGeneratedColumn()
//   id!: number;
//     @Column()
//   name!: string;
//     @Column()
//   email!: string;
//     @Column()
//   password!: string;
//    @OneToMany( ()=> View, (view: View) => view.user)
//    views!: View[];
// }	
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { View } from "./view";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => View, (view: View) => view.users)
  views!: View[];
}
