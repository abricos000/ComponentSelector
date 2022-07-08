






class Select {
    constructor(array) {
      this.array = array 
    }
  
    init(cl){ 
    this.array.forEach((el) => {
    cl.innerHTML += `<li class="dropdown__item" >${ el.name}</li>`
    })

    }
}





const selectInstance = new Select([
    {name: "Алтайский край", value: 1},
    {name:"Амурская область", value: 2},
    {name:"Архангельская область", value: 3},
    {name:"Астраханская область", value: 4}
    ])

  selectInstance.init(document.querySelector('.dropdown-one'))

 

 const selectInstanceTwo = new Select([
    {name: " край", value: 1},
    {name:" область", value: 2},
    {name:"страна", value: 3},
    {name:"континент", value: 4}
    ])

    selectInstanceTwo.init(document.querySelector('.dropdown-two'))


    const selectInstanceThree = new Select([
        {name: " собака", value: 1},
        {name:" кошка", value: 2},
        {name:"лошадь", value: 3},
        {name:"аппельсин", value: 4}
        ])
    
    selectInstanceThree.init(document.querySelector('.dropdown-three'))







document.querySelectorAll('.dropdown').forEach((dropDownWrapper) => {

    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button')
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list')
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__item')

// клик по кнопке, отрыть/закрыть
    dropDownBtn.addEventListener('click', () => {
        dropDownList.classList.toggle('dropdown__list--visible')
    })
    
    
    
    // клик по списку, подстановка текста , закрыть select 
    dropDownListItems.forEach( (listItem) => {
    
        listItem.addEventListener('click', (e) => {
            e.stopPropagation()
            dropDownBtn.innerText = listItem.innerText;// добавляем кнопке текст из компоненты dropdown
            dropDownList.classList.remove('dropdown__list--visible')// закрываем dropdown при выборе компоненты
    
        } )
    });
    
    // закрытие dropdown при клике по странице, не внутри dropdown!!!
    document.addEventListener('click', (e) => { 
    if(e.target !== dropDownBtn){
        dropDownList.classList.remove('dropdown__list--visible')
    }
    
    })
    
    // нажатие на Tab чтобы закрыть dropdown
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Tab'){
            dropDownList.classList.remove('dropdown__list--visible')
        }
    })

})




