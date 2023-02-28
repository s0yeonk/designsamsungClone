'use strict'
const $searchOpenBtn=document.querySelector('.widget-search');
const $searchContainer=document.querySelector('.search-container');
$searchOpenBtn.addEventListener('click',()=>{
  $searchContainer.classList.add('isActive')
})