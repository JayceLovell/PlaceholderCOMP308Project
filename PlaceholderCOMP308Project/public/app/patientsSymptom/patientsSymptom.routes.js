System.register(["./patientsSymptom.component", "./create/create.component"], function (exports_1, context_1) {
    "use strict";
    var patientsSymptom_component_1, create_component_1, PatientsSymptomRoutes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (patientsSymptom_component_1_1) {
                patientsSymptom_component_1 = patientsSymptom_component_1_1;
            },
            function (create_component_1_1) {
                create_component_1 = create_component_1_1;
            }
        ],
        execute: function () {
            exports_1("PatientsSymptomRoutes", PatientsSymptomRoutes = [{
                    path: 'patientsSymptom',
                    component: patientsSymptom_component_1.PatientsSymptomComponent,
                    children: [
                        { path: 'create', component: create_component_1.CreateComponent }
                    ],
                }]);
        }
    };
});
//# sourceMappingURL=patientsSymptom.routes.js.map