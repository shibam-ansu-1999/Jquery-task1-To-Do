let i;

let button = document.getElementById('button');
let button1 = document.getElementById('button1');
button1.style.display = "none";

let myNodelist = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

let edit = document.getElementsByClassName("edit");
for (i = 0; i < edit.length; i++) {
    edit[i].onclick = function () {
        let div = this.parentElement;
        let text_to_edit = this.parentElement.textContent;
        inputTag.value = text_to_edit.slice(0, -5);
        button1.style.display = "block";
        button.style.display = "none";
        div.style.display = "none";
    }
}

function add() {
    let i;
    let inputTag = document.getElementById("ListItem11");
    let li = document.createElement("li");
    li.className = "checked";
    let inputValue = inputTag.value;
    let text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === '') {
        alert("You must write something!!!!!!");
    } else if (inputValue.length >= 30) {
        alert("Opps! you have to write within 30 letters");
    } else {
        document.getElementById("my_list").appendChild(li);
    }
    inputTag.value = "";

    let btn = document.createElement("span");
    let txt1 = document.createTextNode("Edit");
    btn.className = "edit";
    btn.appendChild(txt1);
    li.appendChild(btn);

    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

    for (i = 0; i < edit.length; i++) {
        edit[i].onclick = function () {
            let div = this.parentElement;
            let text_to_edit = this.parentElement.textContent;
            inputTag.value = text_to_edit.slice(0, -5);
            button1.style.display = "block";
            button.style.display = "none";
            div.style.display = "none";
        }
    }
}

function save() {
    let i;
    button1.style.display = "none";
    button.style.display = "block";
    let inputTag = document.getElementById("ListItem11");
    let li = document.createElement("li");
    li.className = "checked";
    let inputValue = inputTag.value;
    let text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === '') {
        alert("You must write something!!!!!!");
    } else if (inputValue.length >= 30) {
        alert("Opps! you have to write within 30 letters");
    } else {
        document.getElementById("my_list").appendChild(li);
    }
    inputTag.value = "";

    let btn = document.createElement("span");
    let txt1 = document.createTextNode("Edit");
    btn.className = "edit";
    btn.appendChild(txt1);
    li.appendChild(btn);

    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

    for (i = 0; i < edit.length; i++) {
        edit[i].onclick = function () {
            let div = this.parentElement;
            let text_to_edit = this.parentElement.textContent;
            inputTag.value = text_to_edit.slice(0, -5);
            $('#button1').style.display = "block";
            $('#button').style.display = "none";
            div.style.display = "none";
        }
    }
}