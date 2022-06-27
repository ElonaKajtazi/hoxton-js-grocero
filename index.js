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
      icon: "assets/icons/006-banana.svg",
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
  //   <li>
  //   <div class="store--item-icon">
  //     <img src="assets/icons/001-beetroot.svg" alt="beetroot" />
  //   </div>
  //   <button>Add to cart</button>
  // </li>

  let liEl = document.createElement("li");
  let divEl = document.createElement("div");
  divEl.className = "store--item-icon";
  let imgEl = document.createElement("img");
  imgEl.src = state.storeItems[0].icon;
  imgEl.alt = state.storeItems[0].name;
  let buttonEl = document.createElement("button");
  buttonEl.textContent = "Add to cart";

  divEl.append(imgEl);
  liEl.append(divEl, buttonEl);

  let liEl1 = document.createElement("li");
  let divEl1 = document.createElement("div");
  divEl1.className = "store--item-icon";
  let imgEl1 = document.createElement("img");
  imgEl1.src = state.storeItems[1].icon;
  imgEl1.alt = state.storeItems[1].name;
  let buttonEl1 = document.createElement("button");
  buttonEl1.textContent = "Add to cart";
   divEl1.append(imgEl1);
  liEl1.append(divEl1, buttonEl1);

  let storeUl = document.querySelector(".item-list.store--item-list");
  storeUl.append(liEl, liEl1);
 
}
// let liEl1 = document.createElement("li");
// let divEl1 = document.createElement("div");
// divEl1.className = "store--item-icon";
// let carrotImgEl = document.createElement("img");
// carrotImgEl.src = getStoreItemsIcon(2);
// carrotImgEl.alt = "carrot";
// let buttonEl1 = document.createElement("button");
// buttonEl1.textContent = "Add to cart";

function render() {
  renderStoreItems();
}

render();
