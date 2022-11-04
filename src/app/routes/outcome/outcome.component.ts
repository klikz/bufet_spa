import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IOutcome, IPerson, IProducts } from 'src/app/models/bufet';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.css'],
  providers: [MessageService]
})
export class OutcomeComponent implements OnInit {

  submitted: boolean = false
  lastOutcome: IOutcome[]
  products: IProducts[]
  selectedProduct: IProducts
  persons: IPerson[]
  selectedPerson: IPerson
  quantity: Number = 1

  constructor(public api: BackendService,
    private messageService: MessageService) { }

  async ngOnInit(): Promise<void> {
    this.products = await this.api.getProducts()
    this.persons = await this.api.getPersons()

    this.lastOutcome = await this.api.lastOutcome()
  }

  async kiritish() {
    console.log(this.selectedPerson, this.selectedProduct)  
    let data = {
      prodID: this.selectedProduct.id,
      perID: this.selectedPerson.id,
      quantity: this.quantity
    }
    let result = await this.api.sendOutcome(data)
    if(result.result == 'ok'){
      this.messageService.add({severity:'success', summary: 'Success', detail:'Kiritildi'});
    }else{
      this.messageService.add({severity:'error', summary: 'Error', detail:'Something wrong'})
      console.log(result.error)
    }
    this.products = await this.api.getProducts()
    this.persons = await this.api.getPersons()
    this.lastOutcome = await this.api.lastOutcome()
    }
}
