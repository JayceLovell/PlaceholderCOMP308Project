System.register(["@angular/core", "@angular/router", "../patientsSymptom.service"], function (exports_1, context_1) {
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
    var core_1, router_1, patientsSymptom_service_1, CreateComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (patientsSymptom_service_1_1) {
                patientsSymptom_service_1 = patientsSymptom_service_1_1;
            }
        ],
        execute: function () {
            CreateComponent = /** @class */ (function () {
                function CreateComponent(_router, _patientsSymptomService) {
                    this._router = _router;
                    this._patientsSymptomService = _patientsSymptomService;
                    this.patientSymptom = {};
                }
                CreateComponent.prototype.create = function () {
                    var _this = this;
                    this._patientsSymptomService
                        .create(this.patientSymptom)
                        .subscribe(function (createdSymptom) { return _this._router.navigate(['/patientsSymptom', createdSymptom._id]); }, function (error) { return _this.errorMessage = error; });
                    console.log(this.patientSymptom);
                };
                CreateComponent = __decorate([
                    core_1.Component({
                        selector: 'create',
                        templateUrl: 'app/patientsSymptom/create/create.template.html'
                    }),
                    __metadata("design:paramtypes", [router_1.Router,
                        patientsSymptom_service_1.PatientsSymptomService])
                ], CreateComponent);
                return CreateComponent;
            }());
            exports_1("CreateComponent", CreateComponent);
        }
    };
});
//# sourceMappingURL=create.component.js.map