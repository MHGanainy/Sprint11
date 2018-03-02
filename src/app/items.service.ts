import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { UserService } from "./user.service";
import { Headers } from "@angular/http";
import { Item } from './dashboard/items/item.model';


@Injectable()
export class ItemService{

    constructor(private http:Http, private userService:UserService){        
        
    }

    createProducts(name,price){
        var item = new Item("",name,price,"","","");
        const headers= new Headers({'x-auth':this.userService.user.token})
        return this.http.post('http://localhost:3000/api/product/createProduct',item,{headers:headers});

    }
    getProducts(){
        const headers= new Headers({'x-auth':this.userService.user.token})
        return this.http.get('http://localhost:3000/api/product/getProducts',{headers:headers});
    }

    deleteProducts(id){
        const headers= new Headers({'x-auth':this.userService.user.token})
        return this.http.delete('http://localhost:3000/api/product/deleteProduct/'+id+'',{headers:headers});
    }
    editProducts(item2,name,price){
        var item = new Item(item2._id,name,price,item2.createdAt,item2.updatedAt,item2.sellerName);
        const headers= new Headers({'x-auth':this.userService.user.token})
        return this.http.patch('http://localhost:3000/api//product/updateProduct/'+item2._id+'',item,{headers:headers});

    }
    
}