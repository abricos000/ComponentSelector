
// const teg = document.querySelector(".component")



// class Select {
//     constructor(array) {
//       this.array = array
     
//     }
  
//     init(cl){
//        let i = 0 
       
//    console.log(teg.textContent)
//    teg.innerHTML += `<div class="${cl}">
//   ${this.array[i].name}
// </div>`
//  i++
//     }

//     _logikArray(i){
//        return this.array[i]
//     }
// }





// const selectInstance = new Select([
//     {name: "Алтайский край", value: 1},
//     {name:"Амурская область", value: 2},
//     {name:"Архангельская область", value: 3},
//     {name:"Астраханская область", value: 4}
//     ])

// //  selectInstance.init('class-1')
// //  selectInstance.init('class-2')
// // selectInstance.init('class-3')
// // console.log(selectInstance);



// document.querySelector(".component").addEventListener('click', e => {

// })




// клик по кнопке, отрыть/закрыть
document.querySelector('.dropdown__button').addEventListener('click', () => {
    document.querySelector('.dropdown__list').classList.toggle('dropdown__list--visible')
    
})



// клик по списку, подстановка текста , закрыть select function
document.querySelectorAll('.dropdown__item').forEach( (listItem) => {

    listItem.addEventListener('click', (e) => {
        e.stopPropagation()
        document.querySelector('.dropdown__button').innerText = listItem.innerText;// добавляем кнопке текст из компоненты dropdown
        document.querySelector('.dropdiwn__input-hidden').value = listItem.dataset.value // записываем в инпут значение принадлежащие компоненте dropdown 
        document.querySelector('.dropdown__list').classList.remove('dropdown__list--visible')// закрываем dropdown при выборе компоненты

    } )
});

// закрытие dropdown при клике по странице, не внутри dropdown!!!
document.addEventListener('click', () => {
   
        console.log("document");
  document.querySelector('.dropdown__list').classList.remove('dropdown__list--visible')

})