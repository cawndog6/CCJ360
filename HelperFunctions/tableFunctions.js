// Cell is a label. Set the label to the given value.
function setCell(myTableId, x,y,newValue) {
  var myTable = document.getElementById(myTableId); 
  myTable.rows[y].cells[x].innerHTML = newValue;
}

// Cell is an input box. Set the value.
function setInputCell(myTableId, x,y,newValue) {
  var myTable = document.getElementById(myTableId); 
  myTable.rows[y].cells[x].childNodes[0].value = newValue;
}

// Cell is a label. Set the background color of the cell.
function setCellColor(myTableId, x,y,newColor) {
  var myTable = document.getElementById(myTableId); 
  myTable.rows[y].cells[x].style.backgroundColor = newColor;            
}

// Cell is an input box. Set the background color of the cell.
function setInputCellColor(myTableId, x,y,newColor) {
  var myTable = document.getElementById(myTableId); 
  myTable.rows[y].cells[x].childNodes[0].style.backgroundColor = newColor;            
}

// Cell is a label. Get the value.
function getCellValue(myTableId, x,y) {
  var myTable = document.getElementById(myTableId); 
  return myTable.rows[y].cells[x].innerHTML;            
}

/////////////////
function getCellChild(myTableId, x,y) {
  var myTable = document.getElementById(myTableId); 
  return myTable.rows[y].cells[x].childNodes[0];            
}
//get input cell value
function getInputCellValue(myTableId, x,y) {
  var myTable = document.getElementById(myTableId); 
  return myTable.rows[y].cells[x].childNodes[0].value;            
}
//sets cell border
function setCellBorder(myTableId, x,y,newBorder) {
  var myTable = document.getElementById(myTableId); 
  myTable.rows[y].cells[x].style.border = newBorder;            
}
//sets cell as input box
function setCellAsInputBox(myTableId, x,y, initialValue) {
  var myTable = document.getElementById(myTableId); 
  var input = document.createElement("input");
  input.type = "text";
  input.className = "cell-css-class"; // set the CSS class
  input.value = initialValue;
  input.style["width"] = "32px";
  //input.onchange = "inputBoxChanged("+x+","+y+")";
  input.onchange = function() {inputBoxChanged(myTableId, x, y)};
  var mycell = myTable.rows[y].cells[x];
  if (mycell.hasChildNodes()) {
     mycell.removeChild(mycell.childNodes[0]);
  } 
  mycell.appendChild(input);  
  input.focus();  
}
//sets cell as text box
function setCellAsTextBox(myTableId, x,y) {
  var myTable = document.getElementById(myTableId); 
  var mycell = myTable.rows[y].cells[x];
  var oldValue = getInputCellValue(myTableId, x,y);

  if (mycell.hasChildNodes()) {
     mycell.removeChild(mycell.childNodes[0]);
  } 
  var t = document.createTextNode(oldValue);
  mycell.appendChild(t);            
}
//sets cell as button
function setCellAsButton(myTableId, x,y, label) {
  var myTable = document.getElementById(myTableId); 
  var mycell = myTable.rows[y].cells[x];
  var oldValue = getInputCellValue(myTableId, x,y);

  if (mycell.hasChildNodes()) {
     mycell.removeChild(mycell.childNodes[0]);
  } 
  var t = document.createElement('button');
  t.innerHTML = label;
  t.onclick = function(){executeCell(x,y)};
  mycell.appendChild(t);            
}
function deleteCell(myTableId, x,y) {
  var myTable = document.getElementById(myTableId); 
  var mycell = myTable.rows[y].cells[x];
  if (mycell.hasChildNodes()) {
     mycell.removeChild(mycell.childNodes[0]);
  }          
}
//centers cell
function centerCell(myTableId, x,y) {
  var myTable = document.getElementById(myTableId); 
  var mycell = myTable.rows[y].cells[x];
  mycell.style.textAlign = "center";     
}
///////////////////////////////////////
function setCellWidth(myTableId, x,y, newWidth) {
  var myTable = document.getElementById(myTableId); 
  var mycell = myTable.rows[y].cells[x];
  mycell.style["width"] = newWidth;
  //mycell.style.width = newWidth; 
  //mycell.width = '500px'; 
  //mycell.style.backgroundColor = 'blue';
  
}

function setCellHeight(myTableId, x,y, newHeight) {
  var myTable = document.getElementById(myTableId); 
  var mycell = myTable.rows[y].cells[x];
  mycell.style["height"] = newHeight;   
}

function createTable(myTableId, tableCols, tableRows) {
  deleteMyTable(myTableId);
  var x = document.createElement("TABLE");
  x.setAttribute("id", myTableId);
  //x.setAttribute("border", "1px solid black");
  document.body.appendChild(x);

  var y
  for(y=0; y< tableRows; y++) {
	  var newRow = document.createElement("TR");
	  newRow.setAttribute("id", "myTr");
	  document.getElementById(myTableId).appendChild(newRow);
	  
	  var i;
	  for(i=0; i< tableCols; i++) {
		 var z = document.createElement("TD");
		 z.style["width"] = "32px";
		 var t = document.createTextNode(" ");
		 z.appendChild(t);
		 //z.setAttribute("border", "1px solid black");
		 //document.getElementById("myTr").appendChild(z);
		 newRow.appendChild(z);
	  }
  }
}
