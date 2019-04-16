System.register(["./patientsList.component", "./list/list.component"], function (exports_1, context_1) {
    "use strict";
    var patientsList_component_1, list_component_1, PatientsListRoutes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (patientsList_component_1_1) {
                patientsList_component_1 = patientsList_component_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            }
        ],
        execute: function () {
            exports_1("PatientsListRoutes", PatientsListRoutes = [{
                    path: 'patientsList',
                    component: patientsList_component_1.PatientsListComponent,
                    children: [
                        { path: '', component: list_component_1.ListComponent }
                    ],
                }]);
        }
    };
});
//# sourceMappingURL=patientsList.route.js.map