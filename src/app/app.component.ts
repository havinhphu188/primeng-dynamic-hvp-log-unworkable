import { Component } from "@angular/core";
import { MessageService } from "primeng/api";
import { ProductListDemo } from "./productlistdemo";
import { Product } from "./product";
import { DialogService } from "primeng/dynamicdialog";
import { DynamicDialogRef } from "primeng/dynamicdialog";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  providers: [DialogService, MessageService]
})
export class AppComponent {
  constructor(
    public dialogService: DialogService,
    public messageService: MessageService
  ) {}

  ref: DynamicDialogRef;

  show() {
    console.log("unworkable:hvp")
    this.ref = this.dialogService.open(ProductListDemo, {
      header: "Choose a Product",
      width: "70%",
      contentStyle: { "max-height": "500px", overflow: "auto" },
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe((product: Product) => {
      if (product) {
        this.messageService.add({
          severity: "info",
          summary: "Product Selected",
          detail: product.name
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
