const buttonPlace=document.getElementsByClassName("tabsNav d-flex align-items-end")[0];
let input=document.createElement("input");
input.type="button";
input.value = "To zHelper";
input.setAttribute("class","tabsNav__item")
buttonPlace.appendChild(input);