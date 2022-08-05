let dataArray = [];


function myFunction() {
    let todoData = recordTO();
    dataArray.push(todoData);
    document.getElementById("inputtext").value = "";
    document.getElementById("myUL").innerHTML = "";
    document.getElementById("myUL").appendChild(todowork(dataArray));

    return false;
}

function recordTO() {
    let todoData = {};
    todoData.inputtext = document.getElementById("inputtext").value;
    todoData.iscomplited = false;
    return todoData;
}

function todowork(dataArray) {
    let list = document.createElement('ul');

    for (let i = 0; i < dataArray.length; i++) {
        let sublist = document.createElement('li');
        sublist.appendChild(document.createTextNode(dataArray[i].inputtext))
        console.log(dataArray);

        if (dataArray[i].iscomplited == false) {
            let input = document.createElement('input');
            input.type = "checkbox";
            input.className = "checkboxStyle";

            input.onclick = function () {
                dataArray[i].iscomplited = true;
                document.getElementById("inputtext").value = "";
                document.getElementById("myUL").innerHTML = "";
                document.getElementById("myUL").appendChild(todowork(dataArray));
            };
            sublist.appendChild(input);
        }
        else {
            sublist.className = "checked";
        }
        list.appendChild(sublist);
    }
    return list;
}
