import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly svc: CategoriesService) {}

  @Get()
  findAll(): Promise<Category[]> {
    return this.svc.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Category | null> {
    return this.svc.findOne(Number(id));
  }

  @Post()
  create(@Body() dto: CreateCategoryDto): Promise<Category> {
    return this.svc.create(dto);
  }
}
