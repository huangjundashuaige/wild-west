import $ from "jquery";
import Web3 from "web3";
import TruffleContract from "truffle-contract"
import artifact from "../../../contracts/ToDo.sol";
import { toUnicode } from "punycode";
import { renderTasks } from "./render";


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
        this.$login = $('#log-in');
        this.$account = $('#account');
        this.$password = $('#password')
        this.$tasks = $("#tasks")
        this.$newTask = $("#new-task")
        this.$taskContent = $("#task-content")
        this.$taskAuthor = $("#task-author")
        this.$loginShow = $("#loginShow")
        this.arr = []


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
        this.$loginShow.click(()=>{
            $("#loginSection").show();
        })


        this.$login.on("submit",(event)=>
        {
            $("#loginSection").hide();
        })

        this.$newTask.on("submit",(event)=>{
            renderTasks(this.$tasks,["1","2"])
        })
    }
}