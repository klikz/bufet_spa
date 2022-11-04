import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service'
import { IProducts } from '../../models/bufet'
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [MessageService]
})
export class ProductsComponent implements OnInit {
  constructor(public api: BackendService,
    private messageService: MessageService
    ) { }

  products: IProducts[]
  selectedProduct: IProducts
  addProduct: boolean = false
  submitted: boolean;
  newProduct: IProducts = {
    id: 0,
    status: '',
    name: '',
    price: 0,
    prixod: 0,
    available: 0
  }

  async ngOnInit(): Promise<void> {
    this.products = await this.api.getProducts()
    console.log(this.products)
  }

  async onRowEditSave(product: IProducts) {
  if (!product.name || !product.price || !product.prixod){
    this.products = await this.api.getProducts()
    this.messageService.add({severity:'error', summary: 'Error', detail:'Bazaga kiritilmadi'})
    // alert(`Kerakli xamma ma'lumotlar kiritilmadi`)
    return
}

  let result = await this.api.updateProduct(product)
  if(result.result == 'ok'){
    this.messageService.add({severity:'success', summary: 'Success', detail:'Product is updated'});
    this.products = await this.api.getProducts()
  }else{
    this.messageService.add({severity:'error', summary: 'Error', detail:'Something wrong'})
    this.products = await this.api.getProducts()
    console.log(result.error)
  }
}

async onRemoveItem(product: IProducts){
  let result = await this.api.removeProduct(product.id)
  if(result.result == 'ok'){
    this.messageService.add({severity:'success', summary: 'Success', detail:'Product removed'});
    this.products = await this.api.getProducts()
  }else{
    this.messageService.add({severity:'error', summary: 'Error', detail:'Something wrong'})
    this.products = await this.api.getProducts()
    console.log(result.error)
  }
}

onRowEditCancel(product: IProducts, index: number) {
    // this.products2[index] = this.clonedProducts[product.id];
    // delete this.products2[product.id];
}
openNew(){
  this.selectedProduct 
  this.submitted = false;
  this.addProduct = true;
}
hideDialog() {
  this.addProduct = false;
  this.submitted = false;
  
}
async saveProduct() {
  this.submitted = true;
  if (!this.newProduct.name || !this.newProduct.price || !this.newProduct.prixod){
      // alert(`Kerakli xamma ma'lumotlar kiritilmadi`)
      return
  }
  console.log(this.newProduct)
  let result = await this.api.addProduct(this.newProduct)
  if(result.result == 'ok'){
    this.messageService.add({severity:'success', summary: 'Success', detail:'Maxsulot kiritildi'});
    this.products = await this.api.getProducts()
  }else{
    this.messageService.add({severity:'error', summary: 'Error', detail:'Something wrong'})
    this.products = await this.api.getProducts()
    console.log(result.error)
  }
  this.addProduct = false;
  this.submitted = false
}

}

