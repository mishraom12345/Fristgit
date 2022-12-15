console.dir(document);
console.log(document.domain)
console.log(document)
console.log(document.title)
document.title = 123
console.log(document.doctype)
console.log(document.head)
console.log(document.body)
console.log(document.all)
console.log(document.all[10])
document.all[10].textContent = "HELLO"
console.log(document.forms)
console.log(document.images)
console.log(document.links)

var hari = document.getElementById("header-title")
console.log(hari)
hari.textContent = "PRACHI"
hari.innerText = "GOLU"
console.log(hari.textContent)
console.log(hari.innerText)
hari.innerHTML = '<h1> sakshi</h1>'
hari.style.borderBottom = "solid 3px #000"

