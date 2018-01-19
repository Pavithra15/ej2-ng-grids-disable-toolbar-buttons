"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ej2_ng_grids_1 = require("@syncfusion/ej2-ng-grids");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.data = [],
            this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['add', 'edit', 'delete', 'update', 'cancel'];
    };
    AppComponent.prototype.bound = function (e) {
        this.toggle = this.grid.currentViewData.length ? true : false; // checks the grid records
        //  this.grid.editSettings.allowAdding = this.toggle; // To disable add
        this.grid.editSettings.allowEditing = this.toggle;
        this.grid.editSettings.allowDeleting = this.toggle;
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('grid'),
    __metadata("design:type", ej2_ng_grids_1.GridComponent)
], AppComponent.prototype, "grid", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-container',
        template: "<ej-grid #grid [dataSource]='data' [editSettings]='editSettings' (dataBound)='bound($event)' [toolbar]='toolbar' height='273px'>\n                <e-columns>\n                    <e-column field='OrderID' headerText='Order ID' textAlign='right' isPrimaryKey='true' width=100></e-column>\n                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>\n                    <e-column field='Freight' headerText='Freight' textAlign= 'right' width=120 format= 'C2'></e-column>\n                    <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>\n                </e-columns>\n                </ej-grid>",
        styleUrls: ['app.style.css'],
        encapsulation: core_1.ViewEncapsulation.Emulated
    })
], AppComponent);
exports.AppComponent = AppComponent;
