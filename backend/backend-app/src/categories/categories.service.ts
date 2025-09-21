import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly repo: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<Category | null> {
    return this.repo.findOne({ where: { id } });
  }

  async create(dto: CreateCategoryDto): Promise<Category> {
    const category = this.repo.create({
      title: dto.title,
    });
    return this.repo.save(category);
  }
}
