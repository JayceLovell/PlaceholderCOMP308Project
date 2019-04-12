System.register(["@angular/core", "./patientsView.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, patientsView_service_1, PatientsViewComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (patientsView_service_1_1) {
                patientsView_service_1 = patientsView_service_1_1;
            }
        ],
        execute: function () {
            PatientsViewComponent = /** @class */ (function () {
                function PatientsViewComponent() {
                }
                PatientsViewComponent = __decorate([
                    core_1.Component({
                        selector: 'patientsView',
                        template: '<router-outlet></router-outlet>',
                        providers: [patientsView_service_1.PatientsViewService]
                    })
                ], PatientsViewComponent);
                return PatientsViewComponent;
            }());
            exports_1("PatientsViewComponent", PatientsViewComponent);
        }
    };
});
//# sourceMappingURL=patientsView.component.js.map