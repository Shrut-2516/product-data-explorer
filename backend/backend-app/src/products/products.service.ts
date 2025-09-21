import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { Category } from '../categories/category.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepo.find({ relations: ['category'] });
  }

  async findOne(id: number): Promise<Product | null> {
    return this.productRepo.findOne({ where: { id }, relations: ['category'] });
  }

  async create(data: CreateProductDto): Promise<Product> {
    let category = await this.categoryRepo.findOne({ where: { title: data.category } });

    if (!category) {
      category = this.categoryRepo.create({ title: data.category });
      await this.categoryRepo.save(category);
    }

    const product = this.productRepo.create({
      title: data.title,
      description: data.description,
      price: data.price,
      category,
    });

    return this.productRepo.save(product);
  }
}
