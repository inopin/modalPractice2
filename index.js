const langs = [
    {
        id: 1,
        title: 'angular',
        rating: 300,
        img: 'https://avatars.mds.yandex.net/i?id=4e5fa31a8e50d2a71772ce42a4315ace-5911267-images-thumbs&n=13'
    },
    {id: 2, title: 'react', rating: 400, img: 'https://www.phpro.be/media/440/download/react%404x.png?v=2'},
    {
        id: 3,
        title: 'vue',
        rating: 500,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
    },
]

const toHTML = lang => `
<div class="col">
   <div class="card" >
       <img src="${lang.img}" class="card-img-top" alt="${lang.title}">
       <div class="card-body">
           <h5 class="card-title">${lang.title}</h5>
           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <a href="#" class="btn btn-primary" data-btn="rating" data-id="${lang.id}">Go somewhere</a>
       </div>
   </div>
       </div>
`

function render() {
    const html = langs.map(toHTML).join('')
    document.querySelector('#lang').innerHTML = html
}
render()

const modal = $.modal({
    title: 'web rating',
    closable: true,
    width: '400px',
    footerButtons: [
        {
            text: 'close', type: 'primary', handler() {
                modal.close()
            }
        }

    ]
})

document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id

    if (btnType === 'rating') {
        const lang = langs.find(l => l.id === id)
        modal.setContent(`
        <p>Рейтинг ${lang.title} среди обитателей села Степанчиково: <strong>${lang.rating}</strong></p>
        `)
       modal.open()
        console.log( id, lang)
    }

})
