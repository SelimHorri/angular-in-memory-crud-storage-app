import { Department } from "src/app/model/dto/department";

export const environment = {
  production: true,
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
