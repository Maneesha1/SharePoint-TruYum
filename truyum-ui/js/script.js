function validateForm(){
    var name = document.forms["myForm"]["pname"];               
    var price = document.forms["myForm"]["pprice"];  
    var active=document.forms["myForm"]["pactive"];    
    var dateoflaunch =  document.forms["myForm"]["pdateOfLaunch"];  
    var category = document.forms["myForm"]["pcategory"];    
    if (pname.value == "")                                  
    { 
        window.alert("Please enter name."); 
        pname.focus(); 
        return false; 
    }
    if (pprice.value == "")                               
    { 
        window.alert("Please enter price."); 
        pprice.focus(); 
        return false; 
    } 
    if(pactive.value == "")
    {
        window.alert("Please enter yes or no."); 
        active.focus(); 
        return false; 
    }
    if (pdateOfLaunch.value == "")                           
    { 
        window.alert("Please choose launch date."); 
        pdateOfLaunch.focus(); 
        return false; 
    } 
   
    if (pcategory.selectedIndex < 1)                  
    { 
        alert("Please enter category."); 
        category.focus(); 
        return false; 
    } 
    return true; 
}





function addItem()
{
    if(validateForm())
    {
     var newrow = table.insertRow(table.length);
        cell1 = newrow.insertCell(0);
        cell2 = newrow.insertCell(1);
        cell3 = newrow.insertCell(2);
        cell4 = newrow.insertCell(3);
        cell5 = newrow.insertCell(4);
        cell6 = newrow.insertCell(5);
        cell1.innerHTML =document.getElementById("pname").value;
  cell2.innerHTML = document.getElementById("pprice").value;
  cell3.innerHTML =document.getElementById("pactive").value;
  cell4.innerHTML = document.getElementById("pdateOfLaunch").value;
  cell5.innerHTML = document.getElementById("pcategory").value;
  cell6.innerHTML = document.getElementById("pfreedelivery").value;
  SeletedRowToInput();
    }
}

function SeletedRowToInput()
{
    
    for(var i=0;i<table.length;i++)
    {
       table.rows[i].onclick=function()
       {
           rindex=this.rowIndex;
           document.getElementById(pname).value=this.cell1[0].innerHTML;
           document.getElementById(pprice).value=this.cell2[1].innerHTML;
           document.getElementById(pactive).value=this.cell3[2].innerHTML;
           document.getElementById(pdateOfLaunch).value=this.cell4[3].innerHTML;
           document.getElementById(pcategory).value=this.cell5[4].innerHTML;
           document.getElementById(pfreedelivery).value=this.cell6[5].innerHTML;

       };
    }
}

function remove()
{
    document.getElementById("table").deleteRow(1);
    
}


function removeRow()
{
    var rindex;
   table.deleteRow(1);
   document.getElementById("pname").value="";
    document.getElementById("pprice").value="";
    document.getElementById("pactive").value="";
    document.getElementById("pdateOfLaunch").value="";
    document.getElementById("pcategory").value="";
    document.getElementById("pfreedelivery").value="";
    alert("deleted Succesfully");
}

function editItem()
{
    var rindex,
     name=document.getElementById("pname").value,
        price=document.getElementById("pprice").value,
        active=document.getElementById("pactive").value,
        dateOfLaunch=document.getElementById("pdateOfLaunch").value,
        category=document.getElementById("pcategory").value,
        freedelivery=document.getElementById("pfreedelivery").value;
        if(validateForm())
        {
        table.rows[rindex].cell1[0].innerHTML=name;
        table.rows[rindex].cell2[1].innerHTML=price;
        table.rows[rindex].cell3[2].innerHTML=active;
        table.rows[rindex].cell4[3].innerHTML=dateOfLaunch;
        table.rows[rindex].cell5[4].innerHTML=category;
        table.rows[rindex].cell6[5].innerHTML=freedelivery;
        alert("Item is edited successfully");
       }
   
}

