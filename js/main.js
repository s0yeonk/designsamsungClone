'use strict'
const $searchOpenBtn=document.querySelector('.widget-search');
const $searchContainer=document.querySelector('.search-container');
$searchOpenBtn.addEventListener('click',()=>{
  $searchContainer.classList.add('isActive')
})

const $mbMenu=document.querySelector('#mb-menu');
const $mbBtn=document.querySelector('.widget-navbtn');
$mbBtn.addEventListener('click',()=>{
  $mbMenu.classList.remove('d-none')
})