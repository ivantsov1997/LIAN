const imgSelect = document.querySelector('#gallery-selected')
const imgPrev = document.querySelector('#gallery-previews')
const imgs = [
    '../img/1.jpg',
    '../img/2.jpg',
    '../img/3.jpg',
    '../img/4.jpg'
]
const currentSrc = imgSelect.getAttribute('src')
const currentSrcIndex = imgs.indexOf(currentSrc)
imgSelect.setAttribute('src', imgs[0])

for(let img in imgs){
    const previewItem = document.createElement('img')
    previewItem.setAttribute('src', imgs[img])
    previewItem.classList.add('gallery-preview-item')
    if(img == 0 ){
        previewItem.classList.add('gallery-preview-item-select')
    }
    previewItem.addEventListener('click', e =>{
        const previewItems = document.querySelectorAll('.gallery-preview-item')
        previewItems.forEach(item=>item.classList.remove('gallery-preview-item-select'))
        previewItem.classList.add('gallery-preview-item-select')
        imgSelect.setAttribute('src', imgs[img])

    } )
    imgPrev.appendChild(previewItem)
}

