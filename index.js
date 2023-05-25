// Create an app called ideaBox.  The app should:show a list of all ideas, there should be an input field 
// where the user puts in their own idea, a button to add the idea.  When the button is clicked, 
// the page should show all the ideas including the one created, the user should also be able to delete ideas

let button = document.querySelector('button');
let input = document.querySelector('input');
let ul = document.querySelector('ul');
newArr = []

button.addEventListener('click', myFunction);
function myFunction(){

}
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      myFunction();
      renderTasks();
      input.value = "";
    }
  });
  function myFunction(){
      newArr.push(input.value);
      console.log(newArr)
  }
  function renderTasks(){
      ul.innerHTML = "";
      newArr.forEach((listItem) => {
      let newLi = document.createElement('li');
      let newButton = document.createElement('button');
      newButton.addEventListener('click', deleteItem);
      newButton.textContent = "delete";
      newLi.textContent = listItem;
      newLi.addEventListener('click', deleteItem);
      ul.appendChild(newLi);
      newLi.appendChild(newButton);});
      
}

function deleteItem(){
    let itemText = this.textContent;
    let index = newArr.indexOf(itemText);
    if (index > -1) {
        newArr.splice(index, 1);
    }
    this.remove()
}