System.register(["@angular/core", "./patientsSymptom.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, patientsSymptom_service_1, PatientsSymptomComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (patientsSymptom_service_1_1) {
                patientsSymptom_service_1 = patientsSymptom_service_1_1;
            }
        ],
        execute: function () {
            PatientsSymptomComponent = /** @class */ (function () {
                function PatientsSymptomComponent() {
                }
                PatientsSymptomComponent = __decorate([
                    core_1.Component({
                        selector: 'symptoms',
                        template: '<router-outlet></router-outlet>',
                        providers: [patientsSymptom_service_1.PatientsSymptomService]
                    })
                ], PatientsSymptomComponent);
                return PatientsSymptomComponent;
            }());
            exports_1("PatientsSymptomComponent", PatientsSymptomComponent);
        }
    };
});
//# sourceMappingURL=patientsSymptom.component.js.map