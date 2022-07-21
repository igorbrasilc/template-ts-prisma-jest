import supertest from "supertest";
import prisma from "../src/config/database";
import app from "../src/app";

beforeEach(async () => {
  // function to be executed before each test
  // await prisma.$executeRaw`TRUNCATE TABLE users`;
});

describe("app test suite", () => {
  it("your test and the description", () => {
    // code goes here
    // connection to db in tests will be:
    // const result = await supertest(app).post('/your-endpoint').send(body);
    // const status = result.status;
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
