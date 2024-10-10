// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract HumanRegistry {
    enum IdenityType {
        SOCIAL,
        EMAIL,
        MOBILE_NO
    }

    enum Gender {
        MALE,
        FEMALE,
        OTHER,
        DONT_KNOW
    }

    struct Human {
        uint256 id;
        string name;
        Gender Gender;
        string identity;
        IdenityType IdenityType;
        int256 human_points;
        string description;
    }

    mapping(uint256 => Human) public Humans;

    uint256 nextHumanId;

    function addHuman(
        string memory name,
        Gender gender,
        string memory identity,
        IdenityType idenityType,
        int256 human_point
    ) public {
        Human memory _human;
        _human.id = nextHumanId;
        _human.name = name;
        _human.Gender = gender;
        _human.identity = identity;
        _human.IdenityType = idenityType;
        _human.human_points = _human.human_points + human_point;

        Humans[nextHumanId] = _human;
        nextHumanId++;
    }
    
    function getAllHumans() public view returns (Human[] memory) {
        Human[] memory allHumans = new Human[](nextHumanId);
        for (uint256 i = 0; i < nextHumanId; i++) {
            allHumans[i] = Humans[i];
        }
        return allHumans;
    }
}
