System.register(["@angular/core", "./patientInfo.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, patientInfo_service_1, PatientInfoComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (patientInfo_service_1_1) {
                patientInfo_service_1 = patientInfo_service_1_1;
            }
        ],
        execute: function () {
            PatientInfoComponent = /** @class */ (function () {
                function PatientInfoComponent() {
                }
                PatientInfoComponent = __decorate([
                    core_1.Component({
                        selector: 'patientInfo',
                        template: '<router-outlet></router-outlet>',
                        providers: [patientInfo_service_1.PatientInfosService]
                    })
                ], PatientInfoComponent);
                return PatientInfoComponent;
            }());
            exports_1("PatientInfoComponent", PatientInfoComponent);
        }
    };
});
//# sourceMappingURL=patientInfo.component.js.map