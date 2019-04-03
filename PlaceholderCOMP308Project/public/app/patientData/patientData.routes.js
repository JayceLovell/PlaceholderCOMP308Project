System.register(["./patientData.component", "./list/list.component", "./view/view.component", "./edit/edit.component"], function (exports_1, context_1) {
    "use strict";
    var patientData_component_1, list_component_1, view_component_1, edit_component_1, PatientDataRoutes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (patientData_component_1_1) {
                patientData_component_1 = patientData_component_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            },
            function (view_component_1_1) {
                view_component_1 = view_component_1_1;
            },
            function (edit_component_1_1) {
                edit_component_1 = edit_component_1_1;
            }
        ],
        execute: function () {
            exports_1("PatientDataRoutes", PatientDataRoutes = [{
                    path: 'patientData',
                    component: patientData_component_1.PatientDataComponent,
                    children: [
                        { path: '', component: list_component_1.ListComponent },
                        { path: ':patientDataId', component: view_component_1.ViewComponent },
                        { path: ':patientDataId/edit', component: edit_component_1.EditComponent }
                    ],
                }]);
        }
    };
});
//# sourceMappingURL=patientData.routes.js.map