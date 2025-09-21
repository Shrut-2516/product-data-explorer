import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewsService {
  private reviews: (CreateReviewDto & { id: number })[] = [];

  create(review: CreateReviewDto) {
    const newReview = { ...review, id: this.reviews.length + 1 };
    this.reviews.push(newReview);
    return newReview;
  }

  findAll() {
    return this.reviews; // ✅ return all reviews
  }

  findByProduct(productId: number) {
    return this.reviews.filter((r) => r.productId === productId);
  }
}
