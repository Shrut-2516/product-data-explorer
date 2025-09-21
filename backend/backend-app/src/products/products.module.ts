import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './product.entity';
import { Category } from '../categories/category.entity';   // ✅ import Category entity
import { Review } from '../reviews/review.entity';          // ✅ if you use reviews

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Category, Review]), // ✅ include Category + Review
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
