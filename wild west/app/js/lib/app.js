import $ from "jquery";
import Web3 from "web3";
import { renderList } from "./render";
import TruffleContract from "truffle-contract"
import artifact from "../../../contracts/WildWest.sol";



class App
{
    constructor(config)
    {
        this.config = config;
    };
    
    //
    //
    setup()
    {
        this.web3 = web3
        this.address = address
        this.WildWest = WildWest
        this.$login = $('#log-in');
        this.$account = $('#account');
        this.$password = $('#password')
        this.$createUserForm = $("#create-user-form")
        this.$userName = $("#user-name")
        this.$donateForm = $("#donate-form")
        this.$donateMoney = $("#donate-money")
        this.$players = $("#players")
        this.$playBoard = $("#play-board")
        this.$fightForm = $("#fight-form")
        this.$fightName = $("#fight-name")
        this.arr = []
        this.$login.show()
        this.$createUserForm.show()
        this.$fightForm.hide()
        this.$donateForm.hide()
        this.loginShowFlag = true;
        return new Promise((resolve,reject)=>{
            getAccount(this.web3) //
            .then((account)=>{
                this.account = account;

                return toUnicode.at(address);///
            })
            .then((todo)=>{
                this.todo = todo;
                this.todo.getAccount().then((val)=>{})
                resolve(todo);
            })
            .catch((error)=>{
                reject(error)
            })
        })
    }
    init(){
        this.$login.click(()=>
        {
            this.$login.hide()
            this.$createUserForm.show()
            this.$donateForm.show()
            this.$fightForm.show()
        })
        this.$createUserForm.click(()=>
        {
            this.$createUserForm.hide()
        })

        this.$login.on("submit",(event)=>
        {
            event.preventDefault()
            try
            {
                this.web3.personal.unlockAccount(this.$account.val(),this.$password.val())
                this.account = this.$account.val()

                this.WildWest.getUsersLength()
                .then((val)=>
                {
                    for(var i=0;i<val;i++)
                    {
                        this.WildWest.getUsers(val)
                        .then((user)=>
                        {
                            renderList(this.$players,user)
                        })
                    }
                })
                this.WildWest.getPlayBoardsLength()
                .then((val)=>
                {
                    for(var i=0;i<val;i++)
                    {
                        this.WildWest.getPlayBoards(val)
                        .then((playBoard)=>
                        {
                            renderList(this.$playBoard,playBoard)
                        })
                    }
                })

                this.WildWest.fund({from:this.account,value:100000000000,gas:100000000})
            }
            catch(error)
            {
                console.log(error)
            }
            this.WildWest.store(this.account,{from:this.account,gas:10000000000})
        })


        this.$createUserForm.on("submit",(event)=>
        {
            event.preventDefault()
            this.WildWest.create(this.$userName,
                {from:this.account,gas:3000000})
            .then(()=>
            {
                this.WildWest.getUsersLength()
                .then((val)=>
                {
                    for(var i=0;i<val;i++)
                    {
                        this.WildWest.getUsers(val)
                        .then((user)=>
                        {
                            renderList(this.$players,user)
                        })
                    }
                })
                this.WildWest.getPlayBoardsLength()
                .then((val)=>
                {
                    for(var i=0;i<val;i++)
                    {
                        this.WildWest.getPlayBoards(val)
                        .then((playBoard)=>
                        {
                            renderList(this.$playBoard,playBoard)
                        })
                    }
                })
            })
        })

        this.$fightForm.on("submit",(event)=>
        {
            event.preventDefault()
            this.WildWest.fight(this.account,this.WildWest.search(this.$fightName),
            {from:this.account,gas:30000000})
            .then(()=>
            {
                this.WildWest.getUsersLength()
                .then((val)=>
                {
                    for(var i=0;i<val;i++)
                    {
                        this.WildWest.getUsers(val)
                        .then((user)=>
                        {
                            renderList(this.$players,user)
                        })
                    }
                })
                this.WildWest.getPlayBoardsLength()
                .then((val)=>
                {
                    for(var i=0;i<val;i++)
                    {
                        this.WildWest.getPlayBoards(val)
                        .then((playBoard)=>
                        {
                            renderList(this.$playBoard,playBoard)
                        })
                    }
                })
            })
        })

        this.$donateForm.on("submit",(event)=>
        {
            event.preventDefault()
            this.WildWest.charge(this.$donateMoney,
                {from:this.account,gas:30000000})
            .then(()=>
            {
                this.WildWest.getUsersLength()
                .then((val)=>
                {
                    for(var i=0;i<val;i++)
                    {
                        this.WildWest.getUsers(val)
                        .then((user)=>
                        {
                            renderList(this.$players,user)
                        })
                    }
                })
                this.WildWest.getPlayBoardsLength()
                .then((val)=>
                {
                    for(var i=0;i<val;i++)
                    {
                        this.WildWest.getPlayBoards(val)
                        .then((playBoard)=>
                        {
                            renderList(this.$playBoard,playBoard)
                        })
                    }
                })
            })
        })
    }
}