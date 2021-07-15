import { ethers } from "hardhat";
import { ContractA__factory } from "../typechain";

export async function deployContractA() {
    const signers = await ethers.getSigners();

    console.log("Deploying from", await signers[0].getAddress());

    const factory = (await ethers.getContractFactory(
        "ContractA",
        signers[0]
    )) as ContractA__factory;

    const contract = await factory.deploy({
        gasLimit: 10000000,
    });
    await contract.deployed();
}

if (require.main === module) {
    deployContractA()
        .then(async () => {
            process.exit(0);
        })
        .catch((error) => {
            console.error(error);
            process.exit(1);
        });
}
