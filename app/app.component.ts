import { L10n, setCulture } from '@syncfusion/ej2-base';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-ng-grids';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { data } from './data';


@Component({
    selector: 'app-container',
    template: `<ej-grid #grid [dataSource]='data' [editSettings]='editSettings' (dataBound)='bound($event)' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'right' width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
                </e-columns>
                </ej-grid>`
})
export class AppComponent implements OnInit {
    @ViewChild('grid')
    public grid: GridComponent;
    public data: Object[];
    public editSettings: Object;
    public toolbar: Object;
    public toggle: boolean;
    ngOnInit(): void {
        this.data = [],
            this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['add', 'edit', 'delete', 'update', 'cancel'];
    }
    bound(e) {

        this.toggle = this.grid.currentViewData.length ? true : false;  // checks the grid records

        //  this.grid.editSettings.allowAdding = this.toggle; // To disable add
        this.grid.editSettings.allowEditing = this.toggle;
        this.grid.editSettings.allowDeleting = this.toggle;
    }
}