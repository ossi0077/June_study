function newRegister(){
    // 1단계 새로운 p요소 만들기
    var newP = document.createElement('p');

    // 2단계 텍스트 노드 만들기
    var userName = document.querySelector("#userName");
    var newText = document.createTextNode(userName.value);

    // 3단계 텍스트 노드를 p 요소에 append
    newP.appendChild(newText);

    // 4단계 nameList에 자식요소로 p요소를 append
    var nameList = document.querySelector("#nameList");
    // nameList.appendChild(newP);
    nameList.insertBefore(newP, nameList.childNodes[0]); // 최근 이름이 위로 오도록 변경(윗줄대신 작성한 부분임)
    userName.value = "";

    // 5단계 삭제를 위해서 X를 만든다.
    var delBttn = document.createElement("span");
    var delText = document.createTextNode("X");
    delBttn.setAttribute("class","del");
    delBttn.appendChild(delText);
    newP.appendChild(delBttn);

    // 6단계 삭제 기능 작성
    var removeBttns = document.querySelectorAll(".del");
    for(i=0;i<removeBttns.length;i++){
        removeBttns[i].addEventListener("click", function(){
            if(this.parentNode.parentNode){//현재 노드(this)의 부모노드의 부모노드가 있을 경우 실행
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
        });
    }
}