import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  @ViewChild ('email', {static: false}) email: ElementRef;
  logIn: boolean;
  articlesToSell: any[] = [];
  shoppingCartList: any[] = [];

  validaEmail(email: HTMLInputElement) {
    if( this.email.nativeElement.value != ''){
      this.logIn = true;  
      this.fillInListArticles();
    }else{
      this.logIn = false;
    }
    console.log('correo: ', this.email.nativeElement.value);
  }

  fillInListArticles(){
    this.articlesToSell.push({
      id: 1,
      name: "Articulo 1",
      price: "1000$",
      add: false
    },
    {
      id: 2,
      name: "Articulo 2",
      price: "2000$",
      add: false
    },
    {
      id: 3,
      name: "Articulo 3",
      price: "3000$",
      add: false
    },
    {
      id: 4,
      name: "Articulo 4",
      price: "4000$",
      add: false
    },
    {
      id: 5,
      name: "Articulo 5",
      price: "5000$",
      add: false
    },
    {
      id: 6,
      name: "Articulo 6",
      price: "6000$",
      add: false
    }
    )

  }

  addToCartShopping(articule){
    articule.add = true;
    this.shoppingCartList.push(articule)
    console.log('lista de compras: ', this.shoppingCartList)
  }

  removeItemCartShopping(i, articule){
    this.shoppingCartList.splice(i,1)
    this.articlesToSell.filter(art=> art.id == articule.id).forEach(artF=> artF.add=false);
  }

}
