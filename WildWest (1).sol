pragma solidity >=0.4.22 <0.6.0;
contract WildWest {

    struct CowBoy {
        string name;
        uint money;
        bool dead;
        uint level;
        //address delegate;
    }
    struct Fight {
        uint voteCount;
    }

    //address chairperson;
    mapping(address => CowBoy) cowBoys;
    //storing player address to start fight
    address[] playersAddress;

    event chargeHappen(address _sender,uint _money);
    constructor()public
    {
        playersAddress.push(msg.sender);
        cowBoys[msg.sender].name = "sheriff";
        cowBoys[msg.sender].money = 999999;
        cowBoys[msg.sender].level = 999999;
        cowBoys[msg.sender].dead = false;
    }
    function howManyPlayer()public returns (uint)
    {
        return playersAddress.length;
    }
    /// Create a new ballot with $(_numProposals) different proposals.
    function create(string memory _name) public {
        playersAddress.push(msg.sender);
        cowBoys[msg.sender].name = _name;
        cowBoys[msg.sender].money = 0;
        cowBoys[msg.sender].dead = false;
        cowBoys[msg.sender].level = 0;
    }
    function menu()public returns (bytes32){
        return "one coin for one level";
    }
    function buy(uint _money) public
    {
        require(
            cowBoys[msg.sender].money > _money,
            "have the money more than you can give"
        );
        //no needed to set right weight for money,the weight was given in the charge part
        cowBoys[msg.sender].money -= _money;
        cowBoys[msg.sender].level += _money;
    }
    function resMoney()public returns (uint)
    {
        return cowBoys[msg.sender].money;
    }
    //no need to give the value,all includes in the payment
    function charge()public payable
    {
        require(
            msg.value >0,
            "no can be negative"
        );
        //properly set the right weight
        cowBoys[msg.sender].money += msg.value;
        emit chargeHappen(msg.sender,msg.value);
    }
    function b2s(bytes32 b)public returns (string memory)
    {
        bytes memory names = new bytes(b.length);
        for(uint i =0;i<b.length;i++)
        {
            names[i] = b[i];
        }
        return string(names);
    }

    function fight(uint _number) public returns (string memory)
    {
        require(
            playersAddress.length > _number,
            "must exist one cowboy"
        );
        require(
            cowBoys[msg.sender].dead != true,
            "yourself must be alive"
        );
        require(
            cowBoys[playersAddress[_number]].dead != true,
            "target msut be alive"
        );
        require(
            cowBoys[msg.sender].level != cowBoys[playersAddress[_number]].level,
            "fight deduce"
        );
        //************************* 
        // add more unpredictable component and red list
        //************************* 
        if(cowBoys[msg.sender].level > cowBoys[playersAddress[_number]].level)
        {
            uint souvenir = cowBoys[playersAddress[_number]].money;
            cowBoys[playersAddress[_number]].money = 0;
            cowBoys[playersAddress[_number]].dead = true;
            cowBoys[msg.sender].money += souvenir;
            return "win";
        }
        else
        {
            uint souvenir = cowBoys[msg.sender].money;
            cowBoys[msg.sender].money = 0;
            cowBoys[msg.sender].dead = true;
            cowBoys[playersAddress[_number]].money += souvenir;
            return "loss"; 
        }
    }
    function isAlive()public returns (bool)
    {
        return cowBoys[msg.sender].dead;
    }
    //***************** 
    //set the right number to buy alive,where does the money go
    //****************** 
    function buyAlive()public payable
    {
        require(
            msg.value > 100,
            "100 for one life"
        );
        require(
            cowBoys[msg.sender].dead == true,
            "you must be dead"
        );
        cowBoys[msg.sender].dead = false;
    }
    //************ 
    // set the comparable weight
    //************* 
    function getOut() public
    {
        uint restMoney = cowBoys[msg.sender].money;
        cowBoys[msg.sender].money = 0;
        msg.sender.transfer(restMoney);
    }


}
