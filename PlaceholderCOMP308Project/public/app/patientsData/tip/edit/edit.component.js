System.register(["@angular/core", "@angular/router", "../../patientsData.service"], function (exports_1, context_1) {
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
    var core_1, router_1, patientsData_service_1, EditTipComponent;
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
            EditTipComponent = /** @class */ (function () {
                function EditTipComponent(_router, _route, _PatientsDataService) {
                    this._router = _router;
                    this._route = _route;
                    this._PatientsDataService = _PatientsDataService;
                    this.patientData = {};
                }
                EditTipComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.paramsObserver = this._route.params.subscribe(function (params) {
                        var patientDataId = params['patientDataId'];
                        _this._PatientsDataService.read(patientDataId).subscribe(function (patientData) {
                            _this.patientData = patientData;
                        }, function (error) { return _this._router.navigate(['/patientsData']); });
                    });
                };
                EditTipComponent.prototype.ngOnDestroy = function () {
                    this.paramsObserver.unsubscribe();
                };
                EditTipComponent.prototype.update = function () {
                    var _this = this;
                    this._PatientsDataService.update(this.patientData).subscribe(function (savedPatientData) { return _this._router.navigate(['/patientsData', savedPatientData._id]); }, function (error) { return _this.errorMessage =
                        error; });
                };
                EditTipComponent = __decorate([
                    core_1.Component({
                        selector: 'edit',
                        templateUrl: 'app/patientsData/tip/edit/edit.template.html'
                    }),
                    __metadata("design:paramtypes", [router_1.Router,
                        router_1.ActivatedRoute,
                        patientsData_service_1.PatientsDataService])
                ], EditTipComponent);
                return EditTipComponent;
            }());
            exports_1("EditTipComponent", EditTipComponent);
        }
    };
});
//# sourceMappingURL=edit.component.js.map