
const productsData = [
    {label:"Solo", number:"20 lei/kg"},
    {label:"Solo", number:"20 lei/kg"},
    {label:"Solo", number:"20 lei/kg"},
    {label:"Solo", number:"20 lei/kg"},
    {label:"Solo", number:"20 lei/kg"},
    {label:"Solo", number:"20 lei/kg"},
    {label:"Solo", number:"20 lei/kg"},
    {label:"Solo", number:"20 lei/kg"},
    {label:"Solo", number:"20 lei/kg"},
    {label:"Solo", number:"20 lei/kg"},
    {label:"Solo", number:"20 lei/kg"},
    {label:"Solo", number:"20 lei/kg"},
    {label:"Solo", number:"20 lei/kg"}
];
//preparing the main div for objects
function createProductCards(){
    const container= document.getElementById('mainProduct');
    if(!container){
        console.error('Products container not found');
        return;
    }

container.innerHTML='';
productsData.forEach(data =>{
    const card= document.createElement('div');
    card.className='product';
    card.innerHTML=`
    <h2 >${data.label}</h2>
    <p >${data.number}</h3>
    `;
    container.appendChild(card);
})

console.log('products card are created succesuffuluy');
}
 

window.addEventListener('DOMContentLoaded',createProductCards);