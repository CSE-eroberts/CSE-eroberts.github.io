//button click event to show message
document.getElementById("btn-show-message").onclick = ()=>{
    document.getElementById("p-message").innerHTML = "Hello, Emma!";
}
//link click example
//e is the event (clicking)
//e.currentTarget is the element that triggered the event
document.getElementById("a-click").onclick = (e) => {
    e.preventDefault(); //not to go to the links destination
    e.currentTarget.innerHTML = "Clicked!";
}