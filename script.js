
const cardData = [
    {
      image: "img1.jpg",
      title: "Card 1",
      description: "This is the first card"
    },
    {  
      image: "img2.jpg",
      title: "Card 2", 
      description: "This is the second card"
    },
    {
      image: "img3.jpg",
      title: "Card 3",
      description: "This is the third card"  
    }
  ];
  
  const cardsContainer = document.getElementById("cards");
  
  function createCard(data) {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const image = document.createElement("img");
    image.src = data.image;  
    card.appendChild(image);
  
    const title = document.createElement("h2");
    title.textContent = data.title;
    card.appendChild(title);
  
    const description = document.createElement("p");
    description.textContent = data.description;
    card.appendChild(description);  
  
    return card;
  }
  
  cardData.forEach(data => {
    const card = createCard(data);
    cardsContainer.appendChild(card); 
  });


  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js");
    });
  }