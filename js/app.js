
let menuScroll = document.getElementById('menu');
let toggle = document.getElementById('toggle');
// console.log(window.innerWidth)


let topMenu = menuScroll.offsetTop;
let widthMenu = menuScroll.clientWidth;
let left = 0;

/*
width = top
x = scroll

x= (width * scroll) / top

x=600
*/

window.onscroll = function () {
    let scrollY = this.scrollY;
    
    if (scrollY <= topMenu )
        menuScroll.style.left = (widthMenu - ((widthMenu * scrollY) / topMenu)) + 'px'
}

toggle.onclick = function(){
    let nav = document.getElementsByClassName('nav');
    let classList = nav[0].classList;
    if(classList.toggle('active')){
        console.log('Active')
    }
}