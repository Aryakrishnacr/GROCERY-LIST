
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState=4&&this.status==200){
            var response=JSON.parse(this.responseText);
            
           // console.log(response);
           
           var jitems=response.items;
           console.log(jitems);
           var output="";
           output+="<table border='5' >"
           
           for(var i=0;i<jitems.length;i++){
            
              output+="<tr><td>"+jitems[i].slno+"</td><td>"+jitems[i].item+"</td><td>"+jitems[i].quantity+"</td><td>"+jitems[i].department+"</td><td>"+jitems[i].notes+"</td></td></tr>";
           
            
                console.log(output);
           }
           output+="</table>"
           
           document.getElementById("demo").innerHTML=output;
        }
    }
xhttp.open("GET","items.json",true);
    xhttp.send(); 