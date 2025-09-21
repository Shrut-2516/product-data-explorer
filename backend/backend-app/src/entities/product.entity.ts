import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Category } from "./category.entity";

@Entity("products")
export class Product {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column("text")
  description: string;

  @Column("int")
  price: number;

  @Column()
  imageUrl: string;

  // store the category id explicitly
  @Column()
  categoryId: string;

  // relation (optional for queries)
  @ManyToOne(() => Category, (c) => c.products, { eager: true, nullable: true })
  @JoinColumn({ name: "categoryId" })
  category?: Category;

  @Column("float", { default: 0 })
  rating: number;
}
