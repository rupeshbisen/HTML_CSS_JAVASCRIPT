let dataArray = [];


function myFunction() {
    let todoData = recordTO();

    dataArray.push(todoData);
    console.log("i am in js")
    document.getElementById("inputtext").value = " ";
    document.getElementById("myUL").innerHTML = " ";
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
        sublist.appendChild(document.createTextNode(dataArray[i].inputtext));
        console.log(dataArray[i]);
        if (dataArray[i].iscomplited == false) {
            let input = document.createElement('input');
            input.type = "checkbox";
            input.onclick = function () {
                dataArray[i].iscomplited = true;
                document.getElementById("inputtext").value = " ";
                document.getElementById("myUL").innerHTML = " ";
                document.getElementById("myUL").appendChild(todowork(dataArray));

            };
            sublist.appendChild(input);
        }
        list.appendChild(sublist);
    }
    return list;
}
