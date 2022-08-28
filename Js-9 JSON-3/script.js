let listItems = document.querySelectorAll('img');
if (localStorage.imageURL) {
    // listItems[i].classList.add('active')
    document.body.style.backgroundImage = `url(${JSON.parse(localStorage.imageURL)})`
}
for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function (event) {
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i] == event.target) {
                listItems[i].classList.add('active')
                let activeImageURL = listItems[i].getAttribute('src')
                document.body.style.backgroundImage = `url(${activeImageURL})`
                localStorage.imageURL = JSON.stringify(activeImageURL)
                console.log(activeImageURL)
            } else {
                listItems[i].classList.remove('active')
            }
        }
        
    })
}