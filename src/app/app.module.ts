import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ProductListDemo } from "./productlistdemo";
import { ProductService } from "./productservice";

import { ButtonModule } from "primeng/button";
import { ToastModule } from "primeng/toast";
import { TableModule } from "primeng/table";
import {DynamicDialogModule} from 'primeng/dynamicdialog';
//unworkable
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule,
    TableModule,
    ButtonModule,
    HttpClientModule
  ],
  declarations: [AppComponent, ProductListDemo],
  bootstrap: [AppComponent],
  entryComponents: [ProductListDemo],
  providers: [ProductService]
})
export class AppModule {}
