const { expect } = require("chai");

describe("HumanRegistry", function () {
  let HumanRegistry;
  let humanRegistry;

  beforeEach(async function () {
    HumanRegistry = await ethers.getContractFactory("HumanRegistry");
    humanRegistry = await HumanRegistry.deploy();
  });

  it("Should add a human correctly", async function () {
    await humanRegistry.addHuman(
      "Alice",
      0,
      "alice@example.com",
      1,
      50
    );

    const human = await humanRegistry.Humans(0);
    expect(human.name).to.equal("Alice");
    expect(human.Gender).to.equal(0);
    expect(human.identity).to.equal("alice@example.com");
    expect(human.IdenityType).to.equal(1);
    expect(human.human_points).to.equal(50);
  });

  it("Should increment human ID for each new human", async function () {
    await humanRegistry.addHuman("Alice", 0, "alice@example.com", 1, 50);
    await humanRegistry.addHuman("Bob", 1, "bob@example.com", 1, 75);

    const human1 = await humanRegistry.Humans(0);
    const human2 = await humanRegistry.Humans(1);

    expect(human1.id).to.equal(0);
    expect(human2.id).to.equal(1);
  });

  it("Should accumulate human points correctly", async function () {
    await humanRegistry.addHuman("Charlie", 2, "charlie@social.com", 0, 30);

    const human = await humanRegistry.Humans(0);
    expect(human.human_points).to.equal(30);
  });

  it("Should get all human data", async function () {
    await humanRegistry.addHuman("Alice", 0, "alice@example.com", 1, 50);
    await humanRegistry.addHuman("Bob", 1, "bob@example.com", 1, 75);
    await humanRegistry.addHuman("Charlie", 2, "charlie@social.com", 0, 30);

    const allHumans = await humanRegistry.getAllHumans();

    console.log(allHumans)
    expect(allHumans.length).to.equal(3);

    expect(allHumans[0].name).to.equal("Alice");
    expect(allHumans[0].human_points).to.equal(50);

    expect(allHumans[1].name).to.equal("Bob");
    expect(allHumans[1].human_points).to.equal(75);

    expect(allHumans[2].name).to.equal("Charlie");
    expect(allHumans[2].human_points).to.equal(30);
  });
});
