import { faker } from "@faker-js/faker/locale/pt_BR";
import {
  AUDIENCE_TYPE_OPTIONS,
  JUDICIAL_DISTRICT_OPTIONS,
  Process,
  PROCESSES_TYPE_OPTIONS,
  STATUS_OPTIONS,
} from "../types/Process.type";

const processDataMock = (): Process => {
  return {
    id: faker.database.mongodbObjectId(),
    number: faker.number.int({ min: 1, max: 99999 }),
    author: faker.name.fullName(),
    defendant: faker.name.fullName(),
    store: faker.company.name(),
    status: faker.helpers.arrayElement(STATUS_OPTIONS),
    judicialDistrict: faker.helpers.arrayElement(JUDICIAL_DISTRICT_OPTIONS),
    city: faker.location.city(),
    country: faker.location.country(),
    amountPaid: faker.finance
      .amount({ symbol: "R$", min: 1000, max: 100000 })
      .toString(),
    processesType: faker.helpers.arrayElements(PROCESSES_TYPE_OPTIONS, {
      min: 1,
      max: PROCESSES_TYPE_OPTIONS.length,
    }),
    receivingDate: faker.date.past().toISOString(),
    audience: {
      date: faker.date.past().toISOString(),
      type: faker.helpers.arrayElement(AUDIENCE_TYPE_OPTIONS),
    },
    observations: faker.lorem.sentence(),
    link: faker.internet.url(),
    citedBy: faker.internet.url(),
    updateBy: faker.internet.url(),
  };
};

export const processesDataMock = Array.from({ length: 10 }, () =>
  processDataMock()
);
