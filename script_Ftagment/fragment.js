var list = document.getElementById('list')
var fragment = document.createDocumentFragment();
for(var x = 1; x < 100; x++) {
	var li = document.createElement('LI');
	var text = document.createTextNode("New Text");
	li.appendChild(text);
	fragment.appendChild(li)	
}

list.appendChild(fragment)