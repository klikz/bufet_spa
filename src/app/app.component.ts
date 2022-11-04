import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any
  items: any
  

  ngOnInit(): void {
      this.title = 'bufet_spa';

      this.items = [{
    label: ' ',
    items: [{
        label: 'Kirim',
        icon: 'pi pi-download',
        routerLink: "/income"

    },
    {
      label: 'Chiqim',
      icon: 'pi pi-upload',
      routerLink: "/outcome"

  },
  {
    label: 'Maxsulotlar',
    icon: 'pi pi-shopping-cart',
    routerLink: "/products"

  },
  {
    label: 'Ishchilar',
    icon: 'pi pi-user',
    routerLink: "/persons"
  },
  {
    label: 'Report',
    icon: 'pi pi-list',
    routerLink: "/report"
  },
    ]}
  ]
  }

}
