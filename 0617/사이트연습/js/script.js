// 타이핑 효과
// span 요소 노드 가져오기
const spanEl = document.querySelector('main h2 span');
const txtArr = ['Web Publisher','Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];
let index = 0;
let currentTxt = txtArr[index].split("");

function writeTxt(){
    spanEl.textContent += currentTxt.shift();
    if(currentTxt.length !== 0){
        setTimeout(writeTxt, Math.floor(Math.random() * 100));
    }else{
        currentTxt = spanEl.textContent.split("");
        setTimeout(deleteTxt, 3000);
    }
}
writeTxt();

// 삭제
function deleteTxt(){
    currentTxt.pop();
    spanEl.textContent = currentTxt.join("");
    if(currentTxt.length !== 0){
        setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    }else{
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
    }
}

const headerEl = document.querySelector("header");
window.addEventListener('scroll',function(){
    const browerScrollY = window.pageYOffset;
    if(browerScrollY > 0){
        headerEl.classList.add("active");
    }else{
        headerEl.classList.remove("active");
    }
});