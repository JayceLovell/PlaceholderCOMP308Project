System.register(["./symptoms.component", "./create/create.component"], function (exports_1, context_1) {
    "use strict";
    var symptoms_component_1, create_component_1, SymptomsRoutes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (symptoms_component_1_1) {
                symptoms_component_1 = symptoms_component_1_1;
            },
            function (create_component_1_1) {
                create_component_1 = create_component_1_1;
            }
        ],
        execute: function () {
            exports_1("SymptomsRoutes", SymptomsRoutes = [{
                    path: 'symptoms',
                    component: symptoms_component_1.SymptomsComponent,
                    children: [
                        { path: 'create', component: create_component_1.CreateComponent }
                    ],
                }]);
        }
    };
});
//# sourceMappingURL=symptoms.routes.js.map