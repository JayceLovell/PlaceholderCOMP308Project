System.register(["@angular/core", "@angular/common", "@angular/forms", "@angular/router", "./patientsList.route", "./patientsList.component", "./list/list.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, common_1, forms_1, router_1, patientsList_route_1, patientsList_component_1, list_component_1, PatientsListModule;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (patientsList_route_1_1) {
                patientsList_route_1 = patientsList_route_1_1;
            },
            function (patientsList_component_1_1) {
                patientsList_component_1 = patientsList_component_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            }
        ],
        execute: function () {
            PatientsListModule = /** @class */ (function () {
                function PatientsListModule() {
                }
                PatientsListModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            forms_1.FormsModule,
                            router_1.RouterModule.forChild(patientsList_route_1.PatientsListRoutes),
                        ],
                        declarations: [
                            patientsList_component_1.PatientsListComponent,
                            list_component_1.ListComponent,
                        ]
                    })
                ], PatientsListModule);
                return PatientsListModule;
            }());
            exports_1("PatientsListModule", PatientsListModule);
        }
    };
});
//# sourceMappingURL=patientsList.module.js.map