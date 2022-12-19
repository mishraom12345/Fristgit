var prachi = document.querySelector(".list-group-item:nth-child(2)")
prachi.style.background = "yellow"

var sakshi = document.querySelector(".list-group-item:nth-child(3)")
sakshi.style.visibility = "hidden"

 var dev = document.querySelectorAll(".list-group-item")
 dev[2].style.color = 'green'

 var hari = document.querySelectorAll(".list-group-item:nth-child(odd)")

 for(var i = 0;i<hari.length;i++){
    hari[i].style.background = 'green'

 }

 var golu = document.querySelectorAll(".list-group-item:nth-child(even)")

 for(var i = 0;i<hari.length;i++){
    golu[i].style.background = 'yellow'

 }

// querySelectorAll salect all the element but qureyselector select only the upper most element
