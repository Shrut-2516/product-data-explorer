// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { Category } from './categories/category.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const dataSource = app.get(DataSource);

  // ✅ Ensure metadata exists
  const categoryRepo = dataSource.getRepository(Category);
  const count = await categoryRepo.count();

  if (count === 0) {
    await categoryRepo.save([
      { title: 'Fiction' },
      { title: 'Science' },
      { title: 'History' },
    ]);
    console.log('Seeded categories ✅');
  }

  await app.listen(4000);
  console.log('Backend listening on http://localhost:4000');
}
bootstrap();
