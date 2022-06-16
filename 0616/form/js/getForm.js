// 웹브라우저의 콘솔창에서 실행하는 코드
// document.testForm.major
// document.testForm.major.options
// document.testForm.major.options[4]
// document.testForm.major.options.selectedIndex
// document.testForm.subject
// document.textForm.mailing1
// document.textForm.mailing1.checked

var selectMenu = document.testForm.major; // 셀렉트 메뉴 가져오기
function displaySelect(){
    var selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
    alert(`<${selectedText}>를 선택했습니다.`)
}