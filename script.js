document.addEventListener("DOMContentLoaded", function (event) {


    //new task content
    let task = document.getElementById("new_task");
    let add_button = document.getElementsByTagName("button")[0];
    let list_todo = document.getElementById("TODO");
    let list_finished = document.getElementById("FINISHED");

//create new list element
    let create_new_item = function (content_task) {
        let new_list_item = document.createElement("li");
        let check_box = document.createElement("input");
        let task_name = document.createElement("task_name");
        let input = document.createElement("input");
        let delete_button = document.createElement("button");

        //setting types for content
        task_name.innerText = content_task;
        check_box.type = "checkbox";
        input.type = "text";
        delete_button.innerText = "Delete";
        delete_button.className = "delete";

        //append content
        new_list_item.appendChild(check_box);
        new_list_item.appendChild(task_name);
        // new_list_item.appendChild(input);
        new_list_item.appendChild(delete_button);

        return new_list_item;
    };

    //add the newly created item to the todo list
    let AddTaskToList = function () {
        let new_list_item = create_new_item(task.value);
        list_todo.appendChild(new_list_item);
        BindFinishedTasks(new_list_item, FinishedTasks);
    };
    add_button.onclick = AddTaskToList;

    //delete task from list
    let DeleteTaskFromList = function () {
        let new_list_item = this.parentNode;
        let ul = new_list_item.parentNode;
        ul.removeChild(new_list_item);
    };

    //appends the entire list element with its content ( used as a parameter in "BindFinishedTasks")
    let FinishedTasks = function () {
        let new_list_item = this.parentNode;
        list_finished.appendChild(new_list_item);
    };

    //allows the list elements to be deleted, and switched from a list to another
    let BindFinishedTasks = function (tasknew_list_item, checkBoxEventHandler) {
        let check_box = tasknew_list_item.querySelector("input[type=checkbox]");
        let delete_button = tasknew_list_item.querySelector("button.delete");
        delete_button.onclick = DeleteTaskFromList;
        check_box.onchange = checkBoxEventHandler;
    };


});