document.addEventListener("DOMContentLoaded", function (event) {

    let toDoListArr = ["first note", "second note", "third note"];

    function deleteToDoItem(event) {
        //delete btn
        const thisItem = event.target;
        toDoListArr = toDoListArr.filter((item) => !thisItem.parentNode.textContent.includes(item));
        console.log(toDoListArr);

        thisItem.parentNode.remove();
    };

    function addToDoItem() {
        const toDoInput = document.getElementById("input");
        if (toDoInput.value !== "") {
            addToDoItemByValue(toDoInput.value);
            toDoInput.value = "";
        }
    };

    function addToDoItemByValue(toDoValue) {
        const li = document.createElement('li');
        li.textContent = toDoValue;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete Item";
        deleteBtn.onclick = deleteToDoItem;
        li.appendChild(deleteBtn);

        //add To Do item
        const toDoList = document.getElementById("toDoList");
        toDoList.appendChild(li);
        toDoListArr.push(toDoValue);

        console.log(toDoListArr);
    };

    for (let i = 0; i < toDoListArr.length; i++) {
        addToDoItemByValue(toDoListArr[i]);
    };
});