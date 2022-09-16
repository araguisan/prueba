let x=14
x =90
var y=20
console.log(x+y)

function sumTwoNomberss(){
    return 4+5
}


function changeContent(){
    document.getElementById("toChange").innerHTML = "cambiado desde javascript"
}
function addResponseData(){
    //elemento del DOM -> document element object
    const $respnseContainer= document.getElementById("response");
    //$respnseContainer.innerHTML="texto agregado desde javaScript"+"<br>";
    $.ajax({
        url:"https://ga6ae41cae65926-vogwkjxu2344xt5x.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/api/costumes",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            console.log(response)
            console.log(response.count)
            console.log(response.items)
            for(let x=0;x<response.items.length;x++){
                const costume =response.items[x];
                $respnseContainer.innerHTML+=`${costume.name} ${costume.description} ${costume.year} ${costume.brand} ${costume.idcategory}  <br>`;
            }

        }

    })
}
function sendCostume(){
    let dataToSend = {
    "idcostume": $("#id").val(),
    "name":$("#name").val(),
    "brand":$("#brand").val(),
    "year": $("#year").val(),
    "description":$("#description").val(),
    "idcategory": $("#idcategory").val()
    }
    dataToSend=JSON.stringify(dataToSend);
  
    const settings = {
        "url": "https://ga6ae41cae65926-vogwkjxu2344xt5x.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/api/costumes",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": dataToSend
        
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });

    
}
function senUpdate(){
    let dataToSend = {
    "idcostume": $("#id").val(),
    "name":$("#name").val(),
    "brand":$("#brand").val(),
    "year": $("#year").val(),
    "description":$("#description").val(),
    "idcategory": $("#idcategory").val()
    }
    dataToSend=JSON.stringify(dataToSend);
  
    const settings = {
        "url": "https://ga6ae41cae65926-vogwkjxu2344xt5x.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/api/costumes",
        "method": "PUT",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": dataToSend
        
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });

    
}
function sendDelete(){
    let dataToSend = {
    "idcostume": $("#id").val(),
    }
    dataToSend=JSON.stringify(dataToSend);
  
    const settings = {
        "url": "https://ga6ae41cae65926-vogwkjxu2344xt5x.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/api/costumes",
        "method": "DELETE",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": dataToSend
        
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });

    
}

console.log(sumTwoNomberss())
changeContent()
addResponseData()

console.log(sumTwoNomberss())
changeContent()
addResponseData()


