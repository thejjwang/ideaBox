// Create an app called ideaBox.  The app should:show a list of all ideas, there should be an input field 
// where the user puts in their own idea, a button to add the idea.  When the button is clicked, 
// the page should show all the ideas including the one created, the user should also be able to delete ideas

let button = document.querySelector('button');
let input = document.querySelector('input');
let ul = document.querySelector('ul');
newArr = []

button.addEventListener('click', myFunction);
// pushes the user input value into newArr then calls renderTasks()
function myFunction(){
    newArr.push(input.value);
    console.log(newArr)
    renderTasks();
}
// function that creates a new list item 
function renderTasks(){
    // clear it so it only adds one item each time you click
    ul.innerHTML = "";
    // create new list item with the input on newArr
    newArr.forEach((listItem) => {
    let newLi = document.createElement('li');
    let newButton = document.createElement('button');
    // add button for deleting the items
    newButton.addEventListener('click', deleteItem);
    newButton.textContent = "delete";
    newLi.textContent = listItem;
    newLi.addEventListener('click', deleteItem);
    ul.appendChild(newLi);
    newLi.appendChild(newButton);}); 
}
function deleteItem(){
    let itemText = this.textContent;
    // if index # is 1 less than index of the newly added item on the list then delete
    let index = newArr.indexOf(itemText);
    if (index > -1) {
        newArr.splice(index, 1);
    }
    this.remove()
}