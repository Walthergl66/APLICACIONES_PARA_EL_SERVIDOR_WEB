
// import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
// import {user} from "./user";

// @Entity()

// export class View {
//     @PrimaryGeneratedColumn()
//   id!: number;
//     @Column()
//   vista!: string;
//     @ManyToMany(() => user, (user: user) => user.views)
// }
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class View {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  vista!: string;

  @ManyToMany(() => User, (user: User) => user.views)
  users!: User; // Falta propiedad inversa para completar la relación
}
