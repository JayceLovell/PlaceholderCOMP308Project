System.register(["@angular/core", "@angular/router", "../patientsData.service"], function (exports_1, context_1) {
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
    var core_1, router_1, patientsData_service_1, CreateComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (patientsData_service_1_1) {
                patientsData_service_1 = patientsData_service_1_1;
            }
        ],
        execute: function () {
            CreateComponent = /** @class */ (function () {
                function CreateComponent(_router, _route, _patientsDataService) {
                    this._router = _router;
                    this._route = _route;
                    this._patientsDataService = _patientsDataService;
                    this.patientData = {};
                }
                CreateComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.paramsObserver = this._route.params.subscribe(function (params) {
                        _this.patientData.patientId = params["patientDataId"];
                    });
                };
                CreateComponent.prototype.create = function () {
                    var _this = this;
                    this._patientsDataService.create(this.patientData)
                        .subscribe(function (createdPatientData) { return _this._router.navigate(['patientsData', createdPatientData._id]); }, function (error) { return _this.errorMessage = "This never works, always get this error :" + error; });
                };
                CreateComponent.prototype.ngOnDestroy = function () {
                    this.paramsObserver.unsubscribe();
                };
                CreateComponent = __decorate([
                    core_1.Component({
                        selector: 'create',
                        templateUrl: 'app/patientsData/create/create.template.html'
                    }),
                    __metadata("design:paramtypes", [router_1.Router,
                        router_1.ActivatedRoute,
                        patientsData_service_1.PatientsDataService])
                ], CreateComponent);
                return CreateComponent;
            }());
            exports_1("CreateComponent", CreateComponent);
        }
    };
});
//# sourceMappingURL=create.component.js.map