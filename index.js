


const modal = $.modal({
    title: 'Nice Modal',
    closable: true,
    content: `
    <p> It's alive!! It's alive</p>
            <p>Lorem ipsum dolor sit.</p>`,
    width:'400px',
    footerButtons: [
        {text:'ok', type: 'primary', handler () {console.log('button clicked')}},
        {text:'опасно!', type: 'danger', handler () {alert('ну вот Все сломал!'), modal.close()}}

    ]
})
