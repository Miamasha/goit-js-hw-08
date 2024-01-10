const images = [
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
      description: "Hokkaido Flower",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
      description: "Container Haulage Freight",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
      description: "Aerial Beach View",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
      description: "Flower Blooms",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
      description: "Alpine Mountains",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
      description: "Mountain Lake Sailing",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
      description: "Alpine Spring Meadows",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
      description: "Nature Landscape",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
      description: "Lighthouse Coast Sea",
    },
  ];


const gallery = document.querySelector(".gallery");
let galleryMarkup = images
          .map((image) => `
              <li class="gallery-item">
                <a 
                  class="gallery-link" 
                  href="${image.original}"      
                  >
                    <img
                      class="gallery-image"
                      src="${image.preview}"
                      data-source="${image.original}"
                      alt="${image.description}"
                      width="360"
                    />
                </a>
              </li>
              `)
          .join("");
gallery.innerHTML = galleryMarkup;


let currentImgSrc;
// let modalWindow = basicLightbox.create(`<img>`);
let modalWindow = basicLightbox.create(`
    <img src = currentImgSrc>    
`)

gallery.addEventListener("click", (event) => {  
  event.preventDefault() // img само не загружається
  console.log(event.target.nodeName)  
  if (event.target.nodeName === "IMG") {// користувач клікнув саме по img
  
  console.log(event.target.dataset.source)
  currentImgSrc = event.target.dataset.source;
      // const lightBoxImgContainer = modalWindow.element();
      // // Returns the DOM element/node associated with the instance.
      // console.log(lightBoxImgContainer)
      // const img = findImgInContainer(lightBoxImgContainer)
      // img.src = currentImgSrc;
  modalWindow.show()
  const lightBoxImg = document.querySelector(".light-box-img"); //нашла  img лайтбокса аж в Доме
  lightBoxImg.src = currentImgSrc;

  document.addEventListener("keydown", escapeButtonHandler);
} 
})

// function findImgInContainer(container){
//   // TODO: find somehow img from container, use google or chatbot or whatever
//   // to make it beautiful// Made in gallery.js
//   const img = container.children[0].children[0]
//   return img;
// }

function escapeButtonHandler(event) {
  if (event.key === "Escape") {
    console.log("key: ", event.key);
    modalWindow.close();
    document.removeEventListener("keydown", escapeButtonHandler);
  }  
}