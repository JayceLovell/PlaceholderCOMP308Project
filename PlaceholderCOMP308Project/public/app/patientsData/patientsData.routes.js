System.register(["./patientsData.component", "./list/list.component", "./view/view.component", "./viewTip/view.component", "./edit/edit.component", "./editTip/edit.component"], function (exports_1, context_1) {
    "use strict";
    var patientsData_component_1, list_component_1, view_component_1, view_component_2, edit_component_1, edit_component_2, PatientsDataRoutes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (patientsData_component_1_1) {
                patientsData_component_1 = patientsData_component_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            },
            function (view_component_1_1) {
                view_component_1 = view_component_1_1;
            },
            function (view_component_2_1) {
                view_component_2 = view_component_2_1;
            },
            function (edit_component_1_1) {
                edit_component_1 = edit_component_1_1;
            },
            function (edit_component_2_1) {
                edit_component_2 = edit_component_2_1;
            }
        ],
        execute: function () {
            exports_1("PatientsDataRoutes", PatientsDataRoutes = [{
                    path: 'patientsData',
                    component: patientsData_component_1.PatientsDataComponent,
                    children: [
                        { path: '', component: list_component_1.ListComponent },
                        { path: ':patientDataId', component: view_component_1.ViewComponent },
                        { path: ':patientDataId/viewTip', component: view_component_2.ViewTipComponent },
                        { path: ':patientDataId/edit', component: edit_component_1.EditComponent },
                        { path: ':patientDataId/editTip', component: edit_component_2.EditTipComponent }
                    ],
                }]);
        }
    };
});
//# sourceMappingURL=patientsData.routes.js.map