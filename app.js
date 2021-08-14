function validateForm() {
    var x = document.getElementById('json').value
    
    if (x==null || x == "") {
    document.getElementById('Err0').style.visibility="visible";
    document.getElementById('Err0').innerHTML="<b>JSON  Must Not Be Blank!!!</b>"; 
      //return false;
    }


    try {
        var jsonstring=JSON.parse(x);
       var obj =jsonstring[0];

        document.getElementById('Err1').innerHTML="<b>JSON Format Is Correct!!!</b>"; 
        document.getElementById('Err3').innerHTML=x; 

        var table = document.getElementById("myTable");
        var row = table.insertRow();
   
         for(var value in obj){
            var cell1 = row.insertCell();
            cell1.innerHTML =value;  
         }


        jsonstring.forEach(obj1 => {
            var row1=table.insertRow();
            Object.entries(obj1).forEach(([key,value])=>{
            
                   var cell2 = row1.insertCell();
                    cell2.innerHTML =value;  
        
            });
 document.getElementById('Err1').innerHTML="";  

        });
      resetForm()
    } catch (e) {
        if (x!==null && x !== "") {
           
        document.getElementById('Err1').innerHTML="<b>JSON  Format Invalid!!!</b>";  
        
      }
    }

    return false;
}

function resetForm() {
  document.getElementById("json").value = "";
}