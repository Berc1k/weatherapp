import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Weather {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 256,
  })
  temperature: string;

  @Column({
    length: 256,
  })
  wind: string;

  @Column({
    length: 256,
  })
  humidity: string;
}
