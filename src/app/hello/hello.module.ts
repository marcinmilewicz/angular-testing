import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloRoutingModule } from './hello-routing.module';
import { HelloComponent } from './hello/hello.component';
import { FullNameListComponent } from './full-name-list/full-name-list.component';

@NgModule({
  declarations: [HelloComponent, FullNameListComponent],
  imports: [CommonModule, HelloRoutingModule],
})
export class HelloModule {}
