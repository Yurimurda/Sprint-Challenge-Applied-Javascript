// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsArray = [];




axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    Array.from(response);
  console.log(response);
  const qTab = document.querySelector('.topics');
  const otherQTab = newTab(response.data);
  qTab.appendChild(otherQTab);
  
})
.catch(error => {
  console.log("The data was not returned", error);
});







function newTab (obj){
    let tab = document.createElement('div');
    
    tab.classList.add('tab');
    
    tab.textContent = obj.tab;
    
    return tab;
}
