var newP = document.createElement('p');
var newText = document.createTextNode("주문이 완료되었습니다.");
newP.appendChild(newText);
document.body.appendChild(newP);
// var attr = document.createAttribute('class');
// attr.value = "accent";
// newP.setAttributeNode(attr);
newP.setAttribute("class", "accent"); // 위 세줄이 이 한줄과 동일