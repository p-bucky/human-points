const { ethers } = require("hardhat")

async function main() {
  const [admin] = await ethers.getSigners();

  console.log(admin)
}

main()