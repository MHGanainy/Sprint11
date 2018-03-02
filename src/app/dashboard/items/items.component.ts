import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from "@angular/forms";
import { Item } from './item.model';
import { Response } from '@angular/http';
import {ItemService} from '../../items.service';


@Component({
  selector: 'app-dashboard-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: Item[];
    constructor(public itemService:ItemService) {}
    ngOnInit() {
        this.viewProducts();
    }
    createProducts(){
        var   num2= ((document.getElementById("num2") as HTMLInputElement).value);
        var   num3= ((document.getElementById("num3") as HTMLInputElement).value);
        this.itemService.createProducts(num2,num3).subscribe();
        this.viewProducts();
        this.ngOnInit();
      }
    viewProducts(){
        this.itemService.getProducts().subscribe((res:Response)=>{
            this.items = res.json().data;
        });
    }
    deleteProducts(id){
        this.itemService.deleteProducts(id).subscribe();
        this.viewProducts();
        this.ngOnInit();
    }

    editProducts(item){
        var name = ((document.getElementById("num2") as HTMLInputElement).value);;
        var price = ((document.getElementById("num3") as HTMLInputElement).value);;
        console.log(name + " "+ price);
        this.itemService.editProducts(item,name,price).subscribe();
        this.viewProducts();
        this.ngOnInit();
    }
}
