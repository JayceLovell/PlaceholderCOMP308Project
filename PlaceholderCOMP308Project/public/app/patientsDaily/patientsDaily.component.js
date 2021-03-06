System.register(["@angular/core", "./patientsDaily.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, patientsDaily_service_1, PatientsDailyComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (patientsDaily_service_1_1) {
                patientsDaily_service_1 = patientsDaily_service_1_1;
            }
        ],
        execute: function () {
            PatientsDailyComponent = /** @class */ (function () {
                function PatientsDailyComponent() {
                }
                PatientsDailyComponent = __decorate([
                    core_1.Component({
                        selector: 'patientsDaily',
                        template: '<router-outlet></router-outlet>',
                        providers: [patientsDaily_service_1.PatientsDailyService]
                    })
                ], PatientsDailyComponent);
                return PatientsDailyComponent;
            }());
            exports_1("PatientsDailyComponent", PatientsDailyComponent);
        }
    };
});
//# sourceMappingURL=patientsDaily.component.js.map