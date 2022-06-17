const container = document.querySelector(".container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

(function addEvent(){
    prevBtn.addEventListener('click', translateContainer.bind(this,1));
    nextBtn.addEventListener('click', translateContainer.bind(this,-1));
})();

function translateContainer(direction){
    const selectedBtn = (direction == 1)?'prev':'next';
    container.style.transitionDuration = '500ms';
    container.style.transform = `translateX(${direction * (100 / 5)}%)`
    container.ontransitionend = () => reorganizeE1(selectedBtn);
}

function reorganizeE1(selectedBtn){
    container.removeAttribute('style');
    (selectedBtn=='prev') ? container.insertBefore(container.lastElementChild, container.firstElementChild) : container.appendChild(container.firstElementChild);
}