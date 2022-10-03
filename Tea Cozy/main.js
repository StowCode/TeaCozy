

const blendTab1 = document.getElementById('blend1')
const blendInfo1 = document.getElementById('info_tile_1')

const blendTab2 = document.getElementById('blend2')
const blendInfo2 = document.getElementById('info_tile_2')

const blendTab3 = document.getElementById('blend3')
const blendInfo3 = document.getElementById('info_tile_3')

const blendTab4 = document.getElementById('blend4')
const blendInfo4 = document.getElementById('info_tile_4')

const blendTab5 = document.getElementById('blend5')
const blendInfo5 = document.getElementById('info_tile_5')


blendTab1.addEventListener('mouseover', function blend1() {
    blendInfo1.style.display = 'block'
})

blendTab1.addEventListener('mouseout', function blend1() {
    blendInfo1.style.display = 'none'
})

blendTab2.addEventListener('mouseover', function blend2() {
    blendInfo2.style.display = 'block'
})

blendTab2.addEventListener('mouseout', function blend2() {
    blendInfo2.style.display = 'none'
})

blendTab3.addEventListener('mouseover', function hover() {
    blendInfo3.style.display = 'block'
})

blendTab3.addEventListener('mouseout', function out() {
    blendInfo3.style.display = 'none'
})

blendTab4.addEventListener('mouseover', function hover() {
    blendInfo4.style.display = 'block'
})

blendTab4.addEventListener('mouseout', function out() {
    blendInfo4.style.display = 'none'
})

blendTab5.addEventListener('mouseover', function hover() {
    blendInfo5.style.display = 'block'
})

blendTab5.addEventListener('mouseout', function out() {
    blendInfo5.style.display = 'none'
})