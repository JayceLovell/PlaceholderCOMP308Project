System.register(["./patientsDaily.component", "./create/create.component", "./view/view.component"], function (exports_1, context_1) {
    "use strict";
    var patientsDaily_component_1, create_component_1, view_component_1, PatientsDailyRoutes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (patientsDaily_component_1_1) {
                patientsDaily_component_1 = patientsDaily_component_1_1;
            },
            function (create_component_1_1) {
                create_component_1 = create_component_1_1;
            },
            function (view_component_1_1) {
                view_component_1 = view_component_1_1;
            }
        ],
        execute: function () {
            //import { EditComponent } from './edit/edit.component';
            exports_1("PatientsDailyRoutes", PatientsDailyRoutes = [{
                    path: 'patientsDaily',
                    component: patientsDaily_component_1.PatientsDailyComponent,
                    children: [
                        { path: ':patientDailyId/create', component: create_component_1.CreateComponent },
                        { path: ':patientDailyId', component: view_component_1.ViewComponent },
                    ],
                }]);
        }
    };
});
//# sourceMappingURL=patientsDaily.routes.js.map