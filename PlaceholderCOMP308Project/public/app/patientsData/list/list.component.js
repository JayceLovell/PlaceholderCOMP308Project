System.register(["@angular/core", "../patientsData.service", "../../patientsTip/patientsTip.service"], function (exports_1, context_1) {
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
    var core_1, patientsData_service_1, patientsTip_service_1, ListComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (patientsData_service_1_1) {
                patientsData_service_1 = patientsData_service_1_1;
            },
            function (patientsTip_service_1_1) {
                patientsTip_service_1 = patientsTip_service_1_1;
            }
        ],
        execute: function () {
            ListComponent = /** @class */ (function () {
                function ListComponent(_patientsDataService, _patientsTipService) {
                    this._patientsDataService = _patientsDataService;
                    this._patientsTipService = _patientsTipService;
                }
                ListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log("list component " + this.patientsData + " " + this.patientsTip);
                    this._patientsDataService.list().subscribe(function (patientsData) { return _this.patientsData = patientsData; });
                    this._patientsTipService.list().subscribe(function (patientsTip) { return _this.patientsTip = patientsTip; });
                    console.log("list component at end " + this.patientsData + " " + this.patientsTip);
                };
                ListComponent = __decorate([
                    core_1.Component({
                        selector: 'list',
                        templateUrl: 'app/patientsData/list/list.template.html'
                    }),
                    __metadata("design:paramtypes", [patientsData_service_1.PatientsDataService,
                        patientsTip_service_1.PatientsTipService])
                ], ListComponent);
                return ListComponent;
            }());
            exports_1("ListComponent", ListComponent);
        }
    };
});
//# sourceMappingURL=list.component.js.map