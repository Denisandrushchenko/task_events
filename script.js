'use strict'

/*
 Первое задание
 */
/*
let conteiner = document.querySelector('.conteiner')



function removeBlock(){
    for(let i = 0 ; i < conteiner.children.length; i ++){
        conteiner.children[i].style.display = null
    }
}

conteiner.addEventListener('click', function showBlock(event){
  let target = event.target
  
  if(target.matches('h2')){
      removeBlock()
      target.nextElementSibling.style.display = 'block'
  }
}
)
*/
  
/*  Друге завдання
let ol = document.querySelector('ol')

console.dir(ol)

function removeClass(arr){
    for(let i=0; i<arr.children.length; i++){
        arr.children[i].className = null
    }

}

ol.addEventListener('click', function colorElement(event){
      let target = event.target;
      if(target.matches('li')){
             removeClass(ol)
             target.className = 'active'

      }


})

Друге завдання не до конца вышло 


let main = document.querySelector('.main')

console.dir(main)

main.addEventListener('click', function showBlock(event){
        let target = event.target
         console.log(target)
        if (target.matches( 'ul', 'li')){
            for(let i = 0 ; i < target.children.length; i++){

                target.children[i].className = 'active'

              target.addEventListener('click' , showBlock)   
            }
        }


})

*/

let btn = document.querySelector('.btn')
let allDiv = document.querySelectorAll('.lighter-items')
console.dir(allDiv)
console.dir(btn)
let i = 0
function lightOn(){
       lightOf()
       allDiv[i].style.backgroundColor = 'yellow'
       i++
    if(i>2){
        i = 0
    }
}

function lightOf(){
    allDiv.forEach(element => {
        element.style.backgroundColor = null
    });
}





btn.addEventListener('click' , lightOn )