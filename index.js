/*

This is how an item object should look like

{
  id: 1, // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/
let state = {
  storeItems: [
    {
      id: 1,
      name: "beetroot",
      price: 0.35,
      inCart: 1,
      icon: "assets/icons/001-beetroot.svg",
    },
    {
      id: 2,
      name: "carrot",
      price: 0.3,
      inCart: 0,
      icon: "assets/icons/002-carrot.svg",
    },
    {
      id: 3,
      name: "apple",
      price: 0.25,
      inCart: 0,
      icon: "assets/icons/003-apple.svg",
    },
    {
      id: 4,
      name: "apricot",
      price: 0.2,
      inCart: 0,
      icon: "assets/icons/004-apricot.svg",
    },
    {
      id: 5,
      name: "avocado",
      price: 0.85,
      inCart: 0,
      icon: "assets/icons/005-avocado.svg",
    },
    {
      id: 6,
      name: "banana",
      price: 0.55,
      inCart: 0,
      icon: "assets/icons/006-bananas.svg",
    },
    {
      id: 7,
      name: "bell pepper",
      price: 0.45,
      inCart: 0,
      icon: "assets/icons/007-bell-pepper.svg",
    },
    {
      id: 8,
      name: "berry",
      price: 0.4,
      inCart: 0,
      icon: "assets/icons/008-berry.svg",
    },
    {
      id: 9,
      name: "blueberry",
      price: 0.35,
      inCart: 0,
      icon: "assets/icons/009-blueberry.svg",
    },
    {
      id: 10,
      name: "eggplant",
      price: 0.3,
      inCart: 0,
      icon: "assets/icons/010-eggplant.svg",
    },
  ],
};

function renderStoreItems() {
  // Beetroot
  //Creating the elements
  let liEl = document.createElement("li");
  let divEl = document.createElement("div");
  divEl.className = "store--item-icon";
  let imgEl = document.createElement("img");
  imgEl.src = state.storeItems[0].icon;
  imgEl.alt = state.storeItems[0].name;
  let buttonEl = document.createElement("button");
  buttonEl.textContent = "Add to cart";
  //Appending the elements
  divEl.append(imgEl);
  liEl.append(divEl, buttonEl);
  // Carrot
  //Creating the elements
  let liEl1 = document.createElement("li");
  let divEl1 = document.createElement("div");
  divEl1.className = "store--item-icon";
  let imgEl1 = document.createElement("img");
  imgEl1.src = state.storeItems[1].icon;
  imgEl1.alt = state.storeItems[1].name;
  let buttonEl1 = document.createElement("button");
  buttonEl1.textContent = "Add to cart";
  //Appending the elements
  divEl1.append(imgEl1);
  liEl1.append(divEl1, buttonEl1);
  // Apple
  //Creating the elements
  let liEl2 = document.createElement("li");
  let divEl2 = document.createElement("div");
  divEl2.className = "store--item-icon";
  let imgEl2 = document.createElement("img");
  imgEl2.src = state.storeItems[2].icon;
  imgEl2.alt = state.storeItems[2].name;
  let buttonEl2 = document.createElement("button");
  buttonEl2.textContent = "Add to cart";
  //Appending the elements
  divEl2.append(imgEl2);
  liEl2.append(divEl2, buttonEl2);
  // Apricot
  //Creating the elements
  let liEl3 = document.createElement("li");
  let divEl3 = document.createElement("div");
  divEl3.className = "store--item-icon";
  let imgEl3 = document.createElement("img");
  imgEl3.src = state.storeItems[3].icon;
  imgEl3.alt = state.storeItems[3].name;
  let buttonEl3 = document.createElement("button");
  buttonEl3.textContent = "Add to cart";
  //Appending the elements
  divEl3.append(imgEl3);
  liEl3.append(divEl3, buttonEl3);
  // Avocado
  //Creating the elements
  let liEl4 = document.createElement("li");
  let divEl4 = document.createElement("div");
  divEl4.className = "store--item-icon";
  let imgEl4 = document.createElement("img");
  imgEl4.src = state.storeItems[4].icon;
  imgEl4.alt = state.storeItems[4].name;
  let buttonEl4 = document.createElement("button");
  buttonEl4.textContent = "Add to cart";
  //Appending the elements
  divEl4.append(imgEl4);
  liEl4.append(divEl4, buttonEl4);
  // Banana
  //Creating the elements
  let liEl5 = document.createElement("li");
  let divEl5 = document.createElement("div");
  divEl5.className = "store--item-icon";
  let imgEl5 = document.createElement("img");
  imgEl5.src = state.storeItems[5].icon;
  imgEl5.alt = state.storeItems[5].name;
  let buttonEl5 = document.createElement("button");
  buttonEl5.textContent = "Add to cart";
  //Appending the elements
  divEl5.append(imgEl5);
  liEl5.append(divEl5, buttonEl5);
  // Bell Pepper
  //Creating the elements
  let liEl6 = document.createElement("li");
  let divEl6 = document.createElement("div");
  divEl6.className = "store--item-icon";
  let imgEl6 = document.createElement("img");
  imgEl6.src = state.storeItems[6].icon;
  imgEl6.alt = state.storeItems[6].name;
  let buttonEl6 = document.createElement("button");
  buttonEl6.textContent = "Add to cart";
  //Appending the elements
  divEl6.append(imgEl6);
  liEl6.append(divEl6, buttonEl6);
  // Berry
  //Creating the elements
  let liEl7 = document.createElement("li");
  let divEl7 = document.createElement("div");
  divEl7.className = "store--item-icon";
  let imgEl7 = document.createElement("img");
  imgEl7.src = state.storeItems[7].icon;
  imgEl7.alt = state.storeItems[7].name;
  let buttonEl7 = document.createElement("button");
  buttonEl7.textContent = "Add to cart";
  //Appending the elements
  divEl7.append(imgEl7);
  liEl7.append(divEl7, buttonEl7);
  // Blueberry
  //Creating the elements
  let liEl8 = document.createElement("li");
  let divEl8 = document.createElement("div");
  divEl8.className = "store--item-icon";
  let imgEl8 = document.createElement("img");
  imgEl8.src = state.storeItems[8].icon;
  imgEl8.alt = state.storeItems[8].name;
  let buttonEl8 = document.createElement("button");
  buttonEl8.textContent = "Add to cart";
  //Appending the elements
  divEl8.append(imgEl8);
  liEl8.append(divEl8, buttonEl8);
  // Eggplant
  //Creating the elements
  let liEl9 = document.createElement("li");
  let divEl9 = document.createElement("div");
  divEl9.className = "store--item-icon";
  let imgEl9 = document.createElement("img");
  imgEl9.src = state.storeItems[9].icon;
  imgEl9.alt = state.storeItems[9].name;
  let buttonEl9 = document.createElement("button");
  buttonEl9.textContent = "Add to cart";
  //Appending the elements
  divEl9.append(imgEl9);
  liEl9.append(divEl9, buttonEl9);

// Appending the elements
  let storeUl = document.querySelector(".item-list.store--item-list");
  storeUl.append(
    liEl,
    liEl1,
    liEl2,
    liEl3,
    liEl4,
    liEl5,
    liEl6,
    liEl7,
    liEl8,
    liEl9
  );
}

function render() {
  renderStoreItems();
}

render();
