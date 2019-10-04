// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const articles = response.data.articles
        const topics = Object.keys(articles)
        const cardHolder = document.querySelector('.cards-container');
        topics.forEach(item =>{
            let topics = articles[item];
            topics.forEach(article =>{
                cardHolder.appendChild(newCard(article));
            })
        })
        console.log(topics)
        console.log(response.data.articles);
        console.log(response)
        topics.forEach(element => {
            newCard(element);
        });

    })
    .catch(error => {
        console.log("The data was not returned", error);
    });



function newCard(item) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');



    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(authorName);

card.classList.add('card')
headline.classList.add('headline')
author.classList.add('author')
imgContainer.classList.add('img-container')

headline.textContent = item.headline
img.src = item.authorPhoto
authorName.textContent = `By: ${item.authorName}`


const cards = document.querySelector('.cards-container')
cards.appendChild(card)
return card;
}