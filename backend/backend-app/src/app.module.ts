// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/product.entity';
import { Category } from './categories/category.entity';
import { Review } from './reviews/review.entity';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // or postgres/mysql
      database: 'db.sqlite',
      entities: [Product, Category, Review],  // ✅ All entities here
      synchronize: true,
    }),
    ProductsModule,
    CategoriesModule,
    ReviewsModule,
  ],
})
export class AppModule {}
