import $ from 'jquery'
import './app2.css'

const $tabBar = $('#app2 .tabBar')
const $tabContent = $('#app2 .tabContent')
const index = localStorage.getItem('app2-index')||0

$tabBar.on('click','li',(e)=>{
    const $li = $(e.currentTarget)
    $li
    .addClass('selected')
    .siblings()
    .removeClass('selected')
    const index = $li.index()
    localStorage.setItem('app2-index',index)
    console.log(index)
    $tabContent
    .children()
    .eq(index)
    .addClass('active')
    .siblings()
    .removeClass('active') 
})

$tabBar.children().eq(index).trigger('click')