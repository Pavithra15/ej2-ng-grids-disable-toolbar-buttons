import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, ResizeService, FreezeService,ReorderService,ColumnMenuService, ExcelExportService, VirtualScrollService,PdfExportService, PageService,FilterService,GroupService, SortService, EditService, ToolbarService } from '@syncfusion/ej2-ng-grids';
import { ButtonModule } from '@syncfusion/ej2-ng-buttons';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, GridModule, ButtonModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PageService,ColumnMenuService, ReorderService,FreezeService,ToolbarService, ResizeService,ColumnMenuService, VirtualScrollService,ExcelExportService, PdfExportService, FilterService,GroupService,SortService, EditService, ToolbarService]
})
export class AppModule { }
