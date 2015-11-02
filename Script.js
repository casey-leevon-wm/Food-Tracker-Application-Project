
//yay!!!


function timTheFunction(){
    var table = document.getElementById("specialTable");
    var row = table.insertRow(1);//add
    var cell1= row.insertCell(0);//add
    var cell2= row.insertCell(1);//add
    var cell3= row.insertCell(2);//add
    var cell4= row.insertCell(3); //add
    var foodToName = document.getElementById("foodItem").value;
    var newArea = document.createTextNode(foodToName);
    cell1.appendChild(newArea);
    var commentSection = document.getElementById("commentSection").value;
    var newArea2 = document.createTextNode(commentSection);
    cell2.appendChild(newArea2);
    var dateSectionStart = document.getElementById("dateSectionStart").value;
    var timeSection = document.getElementById("timeSection").value;
    var timeAndDateStart = dateSectionStart + " at " + timeSection;
    var newArea3 = document.createTextNode(timeAndDateStart);
    if(dateSectionStart !== ""){
        cell3.appendChild(newArea3);
    } else{
        var randomText = document.createTextNode("You need to insert data!");
        cell3.appendChild(randomText);
    }
    var dateSectionEnd = document.getElementById("dateSectionEnd").value;
    var timeSectionEnd = document.getElementById("timeSectionEnd").value;
    var timeAndDateEnd = dateSectionEnd + " at " + timeSectionEnd;
    var newArea4 = document.createTextNode(timeAndDateEnd);
    if(dateSectionEnd !== ""){
        cell4.appendChild(newArea4);
    } else{
        var randomText1 = document.createTextNode("You need to insert data!");
        cell4.appendChild(randomText);
    }

}
