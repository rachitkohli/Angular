import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  errorMessage = '';
  product: IProduct;
  
  constructor(private route: ActivatedRoute,
            private router: Router,
            private productService: ProductService) { }

  getProduct(id:number) {
    this.productService.getProduct(id).subscribe ({
      next: product=>this.product=product,
      error: err => this.errorMessage = err
    });
  }

  ngOnInit(): void  {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.getProduct(id);
    this.product = {
      'productId': id,
      'productName': this.product.productName,
      'productCode': this.product.productCode,
      'releaseDate': this.product.releaseDate,
      'description': this.product.description,
      'price': this.product.price,
      'starRating': this.product.starRating,
      'imageUrl': this.product.imageUrl
    }
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
}
}
