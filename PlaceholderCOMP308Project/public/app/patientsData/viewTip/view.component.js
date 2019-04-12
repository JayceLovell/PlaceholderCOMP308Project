System.register(["@angular/core", "@angular/router", "../../authentication/authentication.service", "../patientsData.service"], function (exports_1, context_1) {
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
    var core_1, router_1, authentication_service_1, patientsData_service_1, ViewTipComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (patientsData_service_1_1) {
                patientsData_service_1 = patientsData_service_1_1;
            }
        ],
        execute: function () {
            ViewTipComponent = /** @class */ (function () {
                //
                function ViewTipComponent(_router, _route, _authenticationService, _patientsDataService) {
                    this._router = _router;
                    this._route = _route;
                    this._authenticationService = _authenticationService;
                    this._patientsDataService = _patientsDataService;
                    this.allowEdit = false;
                }
                //
                ViewTipComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.user = this._authenticationService.user;
                    this.paramsObserver = this._route.params.subscribe(function (params) {
                        var patientDataId = params['patientDataId'];
                        _this._patientsDataService
                            .read(patientDataId)
                            .subscribe(function (patientData) {
                            _this.patientData = patientData;
                            _this.allowEdit = true;
                        }, function (error) { return _this._router.navigate(['/patientsData']); });
                    });
                };
                //
                ViewTipComponent.prototype.ngOnDestroy = function () {
                    this.paramsObserver.unsubscribe();
                };
                ViewTipComponent = __decorate([
                    core_1.Component({
                        selector: 'view',
                        templateUrl: 'app/patientsData/viewTip/view.template.html'
                    }),
                    __metadata("design:paramtypes", [router_1.Router,
                        router_1.ActivatedRoute,
                        authentication_service_1.AuthenticationService,
                        patientsData_service_1.PatientsDataService])
                ], ViewTipComponent);
                return ViewTipComponent;
            }());
            exports_1("ViewTipComponent", ViewTipComponent);
        }
    };
});
//# sourceMappingURL=view.component.js.map