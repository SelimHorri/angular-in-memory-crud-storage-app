// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Department } from "src/app/model/dto/department";
import { Employee } from "src/app/model/dto/employee";

export const environment = {
  production: false,
  departments: [
    new Department(1, "Data Science"),
    new Department(2, "Software Engineer"),
    new Department(3, "Marketing")
  ],
  /*
  employees: [
    new Employee(1, "selim", "horri", "selimhorri@gmail.com", "https://bootdey.com/img/Content/avatar/avatar7.png", new Date("2019-04-15"), "22125144", departments[2]),
    new Employee(2, "amine", "ladjimi", "amineladjimi@yahoo.fr", "https://bootdey.com/img/Content/avatar/avatar5.png", new Date("2021-04-01"), "22125144", departments[1]),
    new Employee(3, "omar", "derouiche", "omarderouiche@gmail.com", "https://bootdey.com/img/Content/avatar/avatar6.png", new Date("2020-04-01"), "22125144", departments[3])
  ]
  */
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
