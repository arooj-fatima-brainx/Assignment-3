var rowId=0;
    
    function getInput()
    {
        if (event.keyCode === 13) 
        {
            createTableRow();
        }
    }
    var mytext = document.getElementById("myInput");


    function ConfirmDelete()
    {
        var x = confirm("Are you sure you want to delete?");
        if (x)
            return true;
        else
            return false;
    }

    function createTableRow()
    {
        
        //alert(mytext);
        let textValue = document.getElementById("myInput").value;
        if(textValue=="")
        {
            alert('please enter something');
        }
        else
        {
            var myTable = document.getElementById("myTable");
        
        var tr = document.createElement("tr"); 
        tr.id=rowId;
        var td1 = document.createElement("td"); 
        var td2 = document.createElement("td"); 
        var td3 = document.createElement("td"); 
        var td4 = document.createElement("td"); 

        var input = document.createElement("input");
        input.type='checkbox';
        td1.appendChild(input);
        //td1.style.float = "left";
        input.onclick = function(){checkRow(tr.id)};

        var para = document.createElement("p");
        para.innerHTML = textValue;
       
        td2.appendChild(para);
        //td2.style.float = "left";
        
        

        var edit = document.createElement("span");
        edit.className="material-icons";
        edit.innerHTML="create";
        //edit.src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png";
        edit.onclick = function(){editRow(tr.id)};
        //edit.onclick = editRow(myId);
        td3.appendChild(edit);
        td3.style.float = "right";

        var del = document.createElement("span");
        del.className="material-icons";
        del.innerHTML="delete";
        //del.src = "https://img.icons8.com/material-rounded/24/000000/delete-trash.png";
        del.onclick = function(){
            var x = confirm("Are you sure you want to delete?");
        if (x)
            deleteRow(tr.id);
        };
        // del.onclick = deleteRow();
        td4.appendChild(del);
        td4.style.float = "right";


        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td4);
        tr.appendChild(td3);

        myTable.appendChild(tr); 
       
        document.getElementById("myInput").value="";
        rowId++;
        }
        
    }

    function deleteRow(id)
    {
        
        document.getElementById(id).remove();

    }

    function editRow(id)
    {
        let tablerow = document.getElementById(id);
        let tabledata = tablerow.getElementsByTagName("td");
        let inputValue = tabledata[1].firstChild.innerHTML;
        document.getElementById("myInput").value=inputValue;
        deleteRow(id);
    }

    function checkRow(id) {

        let tablerow = document.getElementById(id);
        let tabledata = tablerow.getElementsByTagName("td");
        let checkbox = tabledata[0].firstChild;
        let editbtn = tabledata[2].firstChild;
        let delbtn = tabledata[3].firstChild;
        // let checkBox = document.getElementById("myCheck");
        let inputValue = tabledata[1].firstChild.innerHTML;
        
        if (checkbox.checked == true){
           
            // var newInput = inputValue.strike();
            // tabledata[1].firstChild.innerHTML = newInput;
            tabledata[1].firstChild.style.textDecoration='line-through';
            //document.getElementById(my_span).style.textDecoration='line-through';
            //document.getElementById('id').style.pointerEvents = 'none';
            tabledata[2].firstChild.style.pointerEvents = 'none';
            tabledata[3].firstChild.style.pointerEvents = 'none';
            // document.getElementById("myInput").value = newInput;
            
        } 
        else 
        {   
            tabledata[1].firstChild.style.textDecoration='none';
            //tabledata[1].firstChild.style.textDecoration = 'none';
            //tabledata[1].firstChild.css("text-decoration", "none");
            //tabledata[1].firstChild.style.removeAttribute("textDecoration",false);
            tabledata[2].firstChild.style.pointerEvents = 'auto';
            tabledata[3].firstChild.style.pointerEvents = 'auto';


            
            // text.style.display = "none";
        }
    }
