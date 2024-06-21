const favchap=document.getElementById("favchap");
const list=document.getElementById("list");
const button=document.querySelector("button");

button.addEventListener("click",()=>{
    if(favchap.value!==" "){
        const li = document.createElement('li');
        li.textContent=favchap.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent='❌';
        li.append(deleteButton);
        list.append(li)
        favchap.value=" ";
        deleteButton.addEventListener('click',  ()=>
            deleteButton.parentElement.remove())
    }
    else{
        favchap.attr('placeholder','insert a chapter')
    }
})
