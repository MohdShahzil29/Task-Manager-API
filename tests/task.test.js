const server = require("../app");
const request = require("supertest");
const assert = require("assert");

describe("Task API", function () {
  this.timeout(10000);

  it("should create a new task", async () => {
    const res = await request(server)
      .post("/api/tasks")
      .send({ title: "Test Task", description: "Test description" });
    assert.strictEqual(res.statusCode, 201);
    assert.strictEqual(res.body.title, "Test Task");
  });

  it("should get all tasks", async () => {
    const res = await request(server).get("/api/tasks");
    assert.strictEqual(res.statusCode, 200);
  });

  after((done) => {
    server.close(done);
  });
});
