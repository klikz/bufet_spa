import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/models/bufet';
import { MessageService } from 'primeng/api';
import { BackendService } from 'src/app/services/backend.service';


@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],
  providers: [MessageService]
})
export class IncomeComponent implements OnInit {

  submitted: boolean = false
  products: IProducts[]
  selectedProduct: IProducts
  soni: any


  constructor(public api: BackendService,
    private messageService: MessageService) { }

  async ngOnInit(): Promise<void> {
    this.products = await this.api.getProducts()
  }

  async addincome(){
    let data = {
      product_id: this.selectedProduct.id,
      soni: this.soni
    }
    let result = await this.api.sendIncome(data)
    if(result.result == 'ok'){
      this.messageService.add({severity:'success', summary: 'Success', detail:'Kiritildi'});
    }else{
      this.messageService.add({severity:'error', summary: 'Error', detail:'Something wrong'})
      console.log(result.error)
    }
    this.products = await this.api.getProducts()
    this.soni = null
  }

}
