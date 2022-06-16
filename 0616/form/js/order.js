// 웹브라우저로 킨다음 주문정보의 이름에 아무글자나 넣고 콘솔에서 아래 코드들 실행
// document.querySelector("#billingName").value;
// document.order.billingName;
// document.forms['order'].elements['billingName']
// document.order.billingName.value
// document.forms;
// document.forms[0].elements[1].value;

// 주문정보와 동일 체크 부분 코드
var check = document.querySelector("#shippingInfo");
check.addEventListener('click',function(){
    if(check.checked==true){
        document.querySelector("#shippingName").value   = document.querySelector("#billingName").value;
        document.querySelector("#shippingTel").value    = document.querySelector("#billingTel").value;
        document.querySelector("#shippingAddr").value   = document.querySelector("#billingAddr").value;
    }else{
        document.querySelector("#shippingName").value   = "";
        document.querySelector("#shippingTel").value    = "";
        document.querySelector("#shippingAddr").value   = "";
    }
});