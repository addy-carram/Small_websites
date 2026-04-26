
const productsData = [
    {label:"Mar", number:"20 lei/kg"},
    {label:"Mar", number:"20 lei/kg"},
    {label:"Mar", number:"20 lei/kg"},
    {label:"Mar", number:"20 lei/kg"},
    {label:"Mar", number:"20 lei/kg"},
    {label:"Mar", number:"20 lei/kg"},
    {label:"Mar", number:"20 lei/kg"},
    {label:"Mar", number:"20 lei/kg"},
    {label:"Mar", number:"20 lei/kg"},
    {label:"Mar", number:"20 lei/kg"},
    {label:"Mar", number:"20 lei/kg"},
    {label:"Mar", number:"20 lei/kg"},
    {label:"Mar", number:"20 lei/kg"}
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
    <h3 >${data.number}</h3>
    `;
    container.appendChild(card);
})

console.log('products card are created succesuffuluy');
}
 

window.addEventListener('DOMContentLoaded',createProductCards);