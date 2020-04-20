
let todo= document.querySelector(".todo");
todo.addEventListener("keyup",function(event){
    if(event.keyCode===13){
        if (todo.value) { 
        let ul = document.querySelector("#list");
        let li = document.createElement("li");
        li.textContent = todo.value;
        ul.appendChild(li)
        todo.value = "";
        li.addEventListener("click",function(event){
            event.target.remove()
        })
        }
  } 
})

//FOR TARGET REFERNCE:-

// var ul = document.createElement('ul');
// document.body.appendChild(ul);

// var li1 = document.createElement('li');
// var li2 = document.createElement('li');
// ul.appendChild(li1);
// ul.appendChild(li2);

// function hide(e) {
//     // e.target refers to the clicked <li> element
//     // This is different than e.currentTarget which would refer to the parent <ul> in this context
//     e.target.style.visibility = 'hidden';
// }

// // Attach the listener to the list
// // It will fire when each <li> is clicked
// ul.addEventListener('click', hide, false);