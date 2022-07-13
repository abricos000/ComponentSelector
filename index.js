const region = [
    {name: "Алтайский край", value: 1},
    {name: "Амурская область", value: 2},
    {name: "Архангельская область", value: 3},
    {name: "Астраханская область", value: 4}
    ]

const dropdownZero = document.querySelector('.dropdown-zero')




class Select {
    constructor(array) {
        try {
            if (!Array.isArray(array)) { // проверка параметра на массив
                throw Error('аргумент ' + array + ' не является массивом')
            }
                this.array = array     
        } catch (err) {
            console.error(err)          
          }       
    }

    init(cl){ 
        try{
            if (!(cl instanceof Element) ) {// проверка параметра на массив
                throw Error(cl + ' не является DOM елементом')
            }
            if (Array.isArray(this.array)) {
                let clone = cl.cloneNode(true);// создаю клон DOM элемента
                clone.classList.add('drop')// добавляю клону класс drop, чтобы можно было добавлять текст из элементов списка
                let divWrapper = document.createElement('div');// создаю див обвёрту для клона
                divWrapper.className = "dropdown " // присваиваю обёртке класс dropdown , для того чтобы можно было отслеживать все выпадающие списки
                divWrapper.className += cl.classList + '-wrapper' // присваиваю обёртке еще один класс, индивидуальный, 
                // для того чтобы можно было позиционировать весь элемент на странице
                cl.after(divWrapper)// добавляю после самого параметра элемента DOM обвёртку
                divWrapper.appendChild(clone)// добавляю внутрь обвёртки клонированный DOM элемент
                cl.remove()// удаляю параметр
                divWrapper.innerHTML += `<div class="dropdown__list"></div>`// добавляю внутрь обёртки сам блок выпадающего списка
    
                this.array.forEach((el) => {// прохожу по самому массиву методом forEach
                divWrapper.querySelector('.dropdown__list').innerHTML += `<div class="dropdown__item" >${ el.name}</div>`})// добавляю в блок выпадающего списка сами элемента массива
            }      
        }catch(Err){
            console.error(Err) 
        }        
   }
}




const selectInstanceZero = new Select(region) // создание экземпляра класса, с массивом ввиде аргумента
    
selectInstanceZero.init(dropdownZero) // вызов метода init с аргументом ввиде DOM элемента



// const selectInstance = new Select([
//     {name: "Капля", value: 1},
//     {name: "Лужа", value: 2},
//     {name: "Озеро", value: 3},
//     {name: "Море", value: 4}
//     ])

// selectInstance.init(document.querySelector('.dropdown-one'))


//  const selectInstanceTwo = new Select([
//     {name: "край", value: 1},
//     {name: "область", value: 2},
//     {name: "страна", value: 3},
//     {name: "континент", value: 4}
//     ])

// selectInstanceTwo.init(document.querySelector('.dropdown-two'))


 // const selectInstanceThree = new Select([
 //     {name: "собака", value: 1},
 //     {name: "кошка", value: 2},
 //     {name: "лошадь", value: 3},
 //     {name: "аппельсин", value: 4}
 //     ])
    
 // selectInstanceThree.init(document.querySelector('.dropdown-three'))


 // const selectInstanceFour = new Select([
 //     {name: "тыква", value: 1},
 //     {name: "огурец", value: 2},
 //     {name: "морковь", value: 3},
 //     {name: "свекла", value: 4},
 //     {name: "капуста", value: 5}
 //     ])
    
 // selectInstanceFour.init(document.querySelector('.dropdown-four'))


 // const selectInstanceFive = new Select([
 //     {name: "тттттттттттттттттттттттттттттттт", value: 1},
 //     {name: "ооооооооооооооооооооооооооооооо", value: 2},
 //     {name: "ммммммммммммммммммммммммммммммм", value: 3},
 //     {name: "ссссссссссс", value: 4},
 //     {name: "кккккккккккккккккккккккккккккккккккккккк", value: 5}
 //     ])
        
 // selectInstanceFive.init(document.querySelector('.dropdown-five'))

 
document.querySelectorAll('.dropdown').forEach((dropDownWrapper) => { // отслеживаем все классы dropdown на странице!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    const drop = dropDownWrapper.querySelector('.drop')
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list')
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__item')

    // клик по кнопке, отрыть/закрыть
    dropDownWrapper.addEventListener('click', () => {
        dropDownList.classList.toggle('dropdown__list-visible')
    })
 
    // клик по списку, подстановка текста , закрыть select 
    dropDownListItems.forEach( (listItem) => { 
        listItem.addEventListener('click', (e) => {
            drop.innerText = listItem.innerText;// добавляем элементу с классом drop текст одного из элементов списка
            dropDownList.classList.remove('dropdown__list-visible')// закрываем выпадающий список при выборе елемента списка 
        })
    })
    
    // закрытие dropdown при клике по странице, не внутри dropdown!!!
    document.addEventListener('click', (e) => { 
        if (e.target !== dropDownWrapper.querySelector('.drop')) {//если клик происходит не по елементу DOM с классом drop
             dropDownList.classList.remove('dropdown__list-visible')// то выпадающий список закрывается
        } 
    })
    
    // нажатие на Tab чтобы закрыть dropdown
    document.addEventListener('keydown', (e) => {
        if (e.key = 'Tab') {
            dropDownList.classList.remove('dropdown__list-visible')
        }
    })
})




