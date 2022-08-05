let arr = [];



$(document).ready(function () {
    $(".todobtn").click(function (e) {
        var str = $("#inputtext").val();
        let datarecord = {};
        datarecord.input = str;
        datarecord.isCompleted = false;
        arr.push(datarecord);
        todoData();
        return;
    });
    $(document).on("click", ".checbox-click", (e) => {
        const index = e.currentTarget.getAttribute("data-index");
        const currentEle = arr[index];
        currentEle.isCompleted = true;
        todoData();
    });

});

function todoData() {
    $("#yoUL").empty();
    $("#inputtext").val('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isCompleted) {
            $("#yoUL").append("<li>" + arr[i].input + "</li>");
        } else {
            $("#yoUL").append("<li>" + arr[i].input + '<input data-index="' + i + '" class="checbox-click" type="checkbox"/>' + "</li>");
        }


    }
}

