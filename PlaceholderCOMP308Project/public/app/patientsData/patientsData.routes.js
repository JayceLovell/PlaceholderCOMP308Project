System.register(["./patientsData.component", "./list/list.component", "./view/view.component", "./edit/edit.component", "./create/create.component"], function (exports_1, context_1) {
    "use strict";
    var patientsData_component_1, list_component_1, view_component_1, edit_component_1, create_component_1, PatientsDataRoutes;
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
            function (edit_component_1_1) {
                edit_component_1 = edit_component_1_1;
            },
            function (create_component_1_1) {
                create_component_1 = create_component_1_1;
            }
        ],
        execute: function () {
            exports_1("PatientsDataRoutes", PatientsDataRoutes = [{
                    path: 'patientsData',
                    component: patientsData_component_1.PatientsDataComponent,
                    children: [
                        { path: '', component: list_component_1.ListComponent },
                        { path: ':patientDataId', component: view_component_1.ViewComponent },
                        { path: ':patientDataId/create', component: create_component_1.CreateComponent },
                        { path: ':patientDataId/edit', component: edit_component_1.EditComponent },
                    ],
                }]);
        }
    };
});
//# sourceMappingURL=patientsData.routes.js.map