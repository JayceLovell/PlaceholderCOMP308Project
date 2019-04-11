System.register(["@angular/core", "./patientsData.service", "../patientsTip/patientsTip.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, patientsData_service_1, patientsTip_service_1, PatientsDataComponent;
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
            PatientsDataComponent = /** @class */ (function () {
                function PatientsDataComponent() {
                }
                PatientsDataComponent = __decorate([
                    core_1.Component({
                        selector: 'patientsData, patientsTip',
                        template: '<router-outlet></router-outlet>',
                        providers: [patientsData_service_1.PatientsDataService, patientsTip_service_1.PatientsTipService],
                    })
                ], PatientsDataComponent);
                return PatientsDataComponent;
            }());
            exports_1("PatientsDataComponent", PatientsDataComponent);
        }
    };
});
//# sourceMappingURL=patientsData.component.js.map