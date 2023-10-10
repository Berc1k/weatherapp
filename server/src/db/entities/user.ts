import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 256,
  })
  firstName: string;

  @Column({
    length: 256,
  })
  lastName: string;

  @Column({
    length: 256,
  })
  country: string;
}
