task 4
var items = document.getElementsByClassName("list-group-item")
console.log(items)
console.log(items[1])
items[1].textContent = 'HELLO BS KAR'
items[1].style.fontWeight = 'strong'
items[1].style.background = 'yellow'


items[2].style.background = 'green'

for(i=0;i<items.length; i++){
    items[i].style.fontWeight = 'bold'

}
