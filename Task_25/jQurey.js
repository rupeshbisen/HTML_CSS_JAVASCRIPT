const dataArray=[];
$(document).ready(function () {
    $(".todobtn").click(function(e){
        let data = {star: $("#inputtext").val(),isCompleted:false}
        dataArray.push(data);
        datarecod();
        return;
      });
})
$(document).on("click" ,".checkbox-onclick",(e)=>{
    const index =  e.currentTarget.getAttribute("data-index");
    const currentelement = dataArray[index];
    currentelement.isCompleted=true;
    datarecod();
})
function datarecod(){
    $("#yoUL").empty();
    $("#inputtext").val('');
    for(let i=0;i<dataArray.length;i++){
        if(dataArray[i].isCompleted){
            $("#yoUL").append("<li>"+dataArray[i].star +"</li>");
        }
        else{dataArray
            $("#yoUL").append("<li>"+dataArray[i].star +'<input data-index="'+i+'" class="checkbox-onclick" type="checkbox"/>'+"</li>");
        }
    }
}
