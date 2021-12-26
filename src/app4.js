import $ from 'jquery'
import './app4.css'

const html =`
<section id="app4">
        <div class="circle"></div>
    </section>
`

const $element = $(html).appendTo($('body>.page'))

const $circle = $('.circle')

$circle.on('mouseenter',()=>{
    $circle.addClass('active')
}).on('mouseleave',()=>{
    $circle.removeClass('active')
})