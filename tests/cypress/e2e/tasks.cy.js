describe("tasks app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should add three Tasks, make Done and return one to Todo List", () => {
    const taskTitles = ["Title 1", "Title 2", "Title 3"];

    taskTitles.forEach((taskTitle) => {
      // Open modal Add Task
      cy.contains("Add Task").click();

      // Type "Title 1" in form
      cy.get("input").type(taskTitle).should("have.value", taskTitle);

      // Submit form
      cy.get("button[type=\"submit\"]").click();
    });

    // Find Tasks in TodoList and click on it
    taskTitles.forEach((taskTitle) => {
      cy.contains("Todo")
        .siblings()
        .find("button")
        .first()
        .should("have.text", taskTitle)
        .click();
    });

    // Find third Task in DoneList and click on it
    cy.contains("Done")
      .siblings()
      .find("button")
      .eq(2)
      .should("have.text", taskTitles[2])
      .click();

    // Find third Task in TodoList
    cy.contains("Todo")
      .siblings()
      .find("button")
      .first()
      .should("have.text", taskTitles[2]);
  });
});
