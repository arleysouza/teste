import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from "typeorm";
import { User } from "./User";

@Entity({ name: "spents" })
export class Spent {
  @PrimaryGeneratedColumn()
  id: number;

  // cascade define que ao excluir o usuário os gastos serão excluídos
  @ManyToOne(() => User, { onDelete: "CASCADE" })
  // JoinColum é usado para definir o lado da relação que contém a "join column" com a FK
  @JoinColumn({
    name: "iduser", // nome da coluna ser criada na tabela spents
    // pode ser qualquer nome usado para você identificar a FK
    foreignKeyConstraintName: "fk_user_id",
  })
  user: User; // a propriedade user recebe a referência para um objeto do tipo User
 
  @Column({ length: 50, nullable: false })
  description: string;
  
  @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
  value: number;
}
