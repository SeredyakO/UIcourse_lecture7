var list = document.getElementById('list')
 for (i=1;i<=100;i++) {

var li = document.createElement('LI')
li.innerHTML = 'new text'
 
list.appendChild(li)
}