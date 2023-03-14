//get values from inputs
function pushInformation() {
    var firstname = document.getElementById("firstname").value;
    var middlename = document.getElementById("middlename").value;
    var lastname = document.getElementById("lastname").value;
    var oop = parseInt(document.getElementById("oop").value);
    var networking = parseInt(document.getElementById("networking").value);
    var webtech = parseInt(document.getElementById("webtech").value);
    var research = parseInt(document.getElementById("research").value);
    var ais = parseInt(document.getElementById("ais").value);

    //calculate average

    var total = oop + networking + webtech + research + ais;
    var average = total / 5;

    //create new row in table

    var table = document.getElementById("tblrecords");
    var row = table.insertRow();
    row.insertCell().innerHTML = firstname;
    row.insertCell().innerHTML = middlename;
    row.insertCell().innerHTML = lastname;
    row.insertCell().innerHTML = oop;
    row.insertCell().innerHTML = networking;
    row.insertCell().innerHTML = webtech;
    row.insertCell().innerHTML = research;
    row.insertCell().innerHTML = ais;
    row.insertCell().innerHTML = average.toFixed(2);
}

//clear input from input text

function clearInput(){
    document.getElementById("firstname").value = "";
    document.getElementById("middlename").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("oop").value = "";
    document.getElementById("networking").value = "";
    document.getElementById("webtech").value = "";
    document.getElementById("research").value = "";
    document.getElementById("ais").value = "";
}

// Clear grade input from table records

function clearGrades(){
    const table = document.getElementById("tblrecords");
    var rows = table.rows.length;
    for (var i = rows -1; i > 0; i--){
        table.deleteRow(i);
    }
}


