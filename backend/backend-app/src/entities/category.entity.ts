import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Product } from "./product.entity";

@Entity("categories")
export class Category {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Product, (p) => p.category)
  products?: Product[];
}
