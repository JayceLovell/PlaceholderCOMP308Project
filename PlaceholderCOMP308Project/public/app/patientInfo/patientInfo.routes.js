System.register(["./patientInfo.component", "./create/create.component", "./list/list.component", "./view/view.component", "./edit/edit.component"], function (exports_1, context_1) {
    "use strict";
    var patientInfo_component_1, create_component_1, list_component_1, view_component_1, edit_component_1, PatientInfoRoute;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (patientInfo_component_1_1) {
                patientInfo_component_1 = patientInfo_component_1_1;
            },
            function (create_component_1_1) {
                create_component_1 = create_component_1_1;
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
            exports_1("PatientInfoRoute", PatientInfoRoute = [{
                    path: 'articles',
                    component: patientInfo_component_1.PatientInfoComponent,
                    children: [
                        { path: '', component: list_component_1.ListComponent },
                        { path: 'create', component: create_component_1.CreateComponent },
                        { path: ':patientInfoId', component: view_component_1.ViewComponent },
                        { path: ':patientInfoId/edit', component: edit_component_1.EditComponent }
                    ],
                }]);
        }
    };
});
//# sourceMappingURL=patientInfo.routes.js.map