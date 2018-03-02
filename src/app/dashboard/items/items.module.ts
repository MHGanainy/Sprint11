import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import {ItemService} from '../../items.service'
import { ItemsComponent } from './items.component';
import { ItemsRoutingModule } from './items-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ThemeModule,ItemsRoutingModule,ReactiveFormsModule,
      FormsModule],
  declarations: [ItemsComponent],
  providers: [ItemService],


})
export class ItemsModule {}
