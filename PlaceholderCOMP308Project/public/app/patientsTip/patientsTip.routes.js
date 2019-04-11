System.register(["./patientsTip.component", "./view/view.component", "./edit/edit.component"], function (exports_1, context_1) {
    "use strict";
    var patientsTip_component_1, view_component_1, edit_component_1, PatientsTipRoutes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (patientsTip_component_1_1) {
                patientsTip_component_1 = patientsTip_component_1_1;
            },
            function (view_component_1_1) {
                view_component_1 = view_component_1_1;
            },
            function (edit_component_1_1) {
                edit_component_1 = edit_component_1_1;
            }
        ],
        execute: function () {
            exports_1("PatientsTipRoutes", PatientsTipRoutes = [{
                    path: 'patientsTip',
                    component: patientsTip_component_1.PatientsTipComponent,
                    child: [
                        { path: ':patientDataId', component: view_component_1.ViewComponent },
                        { path: ':patientDataId/edit', component: edit_component_1.EditComponent }
                    ],
                }]);
        }
    };
});
//# sourceMappingURL=patientsTip.routes.js.map