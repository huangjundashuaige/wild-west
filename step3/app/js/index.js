
const renderTasks = ($tasks, tasks = []) => {
    if(tasks.length == 0) {
      $tasks.html('<tr><td scope="row">No task created yet...</td></tr>');
      return;
    }
  
    const html = tasks.map((task) => {
      return(`<tr>
        <td>${task[0]}</td>
        <td>${task[1]}</td>
        <td>${task[2]}</td>
        <td>${task[3]}</td>
        <td><input type="checkbox" id="checkbox-${task[0]}" ${task[4] ? 'checked' : ''}/></td>
        <td>${task[5] ? formatDate(task[5]) : ''}</td>
       </tr>`);
     });
    $tasks.html(html.join(''));
  };
  
//import $ from 'jquery'
//import config from './config'
//import App from './lib/app'
console.log("123")
$(()=>{

$("#donate-form").hide()

$("#log-in-button").on("click",(event)=>{
    event.preventDefault()
    alert("123")
    $("#loginSection").hide();
    renderTasks($("#tasks"),[1,2,3])
})
}

)

/*
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


this.$loginShow.click(()=>{
    alert("123")
    $("#loginSection").show();
})


this.$login.on("submit",(event)=>
{
    $("#loginSection").hide();
})

this.$newTask.on("submit",(event)=>{
    renderTasks(this.$tasks,["1","2"])
})
*/