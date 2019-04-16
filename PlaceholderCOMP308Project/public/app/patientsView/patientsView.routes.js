System.register(["./patientsView.component", "./View/view.component"], function (exports_1, context_1) {
    "use strict";
    var patientsView_component_1, view_component_1, PatientsViewRoutes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (patientsView_component_1_1) {
                patientsView_component_1 = patientsView_component_1_1;
            },
            function (view_component_1_1) {
                view_component_1 = view_component_1_1;
            }
        ],
        execute: function () {
            exports_1("PatientsViewRoutes", PatientsViewRoutes = [{
                    path: 'patientsView',
                    component: patientsView_component_1.PatientsViewComponent,
                    children: [
                        { path: '', component: view_component_1.ViewComponent },
                    ],
                }]);
        }
    };
});
//# sourceMappingURL=patientsView.routes.js.map