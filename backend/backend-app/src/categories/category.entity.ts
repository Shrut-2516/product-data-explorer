import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from '../products/product.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: false })   // ✅ remove unique constraint
  title: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}


