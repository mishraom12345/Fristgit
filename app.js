// console.dir(document);
// console.log(document.domain)
// console.log(document)
// console.log(document.title)
// document.title = 123
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// document.all[10].textContent = "HELLO"
// console.log(document.forms)
// console.log(document.images)
// console.log(document.links)

// var hari = document.getElementById("header-title")
// console.log(hari)
// hari.textContent = "PRACHI"
// hari.innerText = "GOLU"
// console.log(hari.textContent)
// console.log(hari.innerText)
// hari.innerHTML = '<h1> sakshi</h1>'
// hari.style.borderBottom = "solid 3px #000"

// task 4
// var items = document.getElementsByClassName("list-group-item")
// console.log(items)
// console.log(items[1])
// items[1].textContent = 'HELLO BS KAR'
// items[1].style.fontWeight = 'strong'
// items[1].style.background = 'yellow'


// items[2].style.background = 'green'

// for(i=0;i<items.length; i++){
//     items[i].style.fontWeight = 'bold'

// }

// task 5
// var li = document.getElementsByTagName('li')
// console.log(li)
// console.log(li[1])
// li[1].textContent = 'HELLO BS KAR'
// li[1].style.fontWeight = 'strong'
// li[1].style.background = 'yellow'


// li[2].style.background = 'green'

// for(i=0;i<li.length; i++){
//    li[i].style.fontWeight = 'bold'

// }

// task 6
// var prachi = document.querySelector(".list-group-item:nth-child(2)")
// prachi.style.background = "yellow"

// var sakshi = document.querySelector(".list-group-item:nth-child(3)")
// sakshi.style.visibility = "hidden"

//  var dev = document.querySelectorAll(".list-group-item")
//  dev[2].style.color = 'green'

//  var hari = document.querySelectorAll(".list-group-item:nth-child(odd)")

//  for(var i = 0;i<hari.length;i++){
//     hari[i].style.background = 'green'

//  }

//  var golu = document.querySelectorAll(".list-group-item:nth-child(even)")

//  for(var i = 0;i<hari.length;i++){
//     golu[i].style.background = 'yellow'

//  }

// // querySelectorAll salect all the element but qureyselector select only the upper most element


//task 7
//var itemList = document.querySelector('#items');

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundcolor = 'blue'
// console.log(itemList.parentNode.parentNode)

//parent element
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = "blue"
// console.log(itemList.parentElement.parentElement)

// console.log(itemList.childNodes)
// console.log(itemList.children)
// console.log(itemList.children[2])
// itemList.children[2].style.backgroundcolor = 'blue'

//last child
// console.log(itemList.lastChild)

// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = "HELLO BAS KAR"

// //frist child
// console.log(itemList.firstChild)

// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = "chala ja "

//next sibling
// console.log(itemList.nextSibling)

// console.log(itemList.nextElementSibling)

// //previous sibling
// console.log(itemList.previousSibling)

// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = 'blue'

//creat a div
var newDiv = document.createElement('div')

//add class
newDiv.className = 'hello'

//add id 
newDiv.id = 'kkrh ho'

//set attribute
newDiv.setAttribute('tittle','helllo')

//create text node
var newDivText = document.createTextNode('hello word')
newDiv.appendChild(newDivText)

var container = document.querySelector('header .container')

var h1 = document.querySelector('header h1')

container.insertBefore(newDiv,h1)





console.log(newDiv)













