var li = document.getElementsByTagName('li')
console.log(li)
console.log(li[1])
li[1].textContent = 'HELLO BS KAR'
li[1].style.fontWeight = 'strong'
li[1].style.background = 'yellow'


li[2].style.background = 'green'

for(i=0;i<li.length; i++){
   li[i].style.fontWeight = 'bold'

}

