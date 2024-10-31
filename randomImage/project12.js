let imageURLS = ["https://plus.unsplash.com/premium_photo-1718198501646-a95f049e39b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_vector-1712678583306-5405c81b345f?bg=FFFFFF&q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1718139207078-0f55b2a8a34d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1714051661316-4432704b02f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1587732608058-5ccfedd3ea63?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1718002127392-92a7eef514ad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1718417286278-b383b8a8ad6d?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1717705422478-0b42e89e06b7?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1707707927508-b8d1ae1d1cc9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1718046438807-1ba666a16576?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://cdn.pixabay.com/photo/2017/07/16/09/11/road-2508733_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/08/24/10/49/mountain-source-2676322_1280.jpg",
    "https://cdn.pixabay.com/photo/2013/05/25/17/43/code-113611_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/05/18/04/51/watercolor-8769573_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/11/03/11/14/water-515047_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/12/30/00/40/heart-5872037_1280.png",
    "https://cdn.pixabay.com/photo/2024/02/01/22/25/dahlia-8546849_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/12/08/23/46/cat-8438334_1280.jpg",
    "https://cdn.pixabay.com/photo/2013/12/17/20/10/bubbles-230014_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/10/19/21/08/ai-generated-8327632_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/01/13/14/58/snake-7716269_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/10/12/06/44/flowers-8309995_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/04/23/16/22/chihuahua-8715674_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/05/27/16/08/flowers-8021795_1280.jpg",
]

//The div element where the images will be appended
let content = document.querySelector(".content")

//numbers of images to display
const row = 8;

//it will generate random image URL from imageURLS array
function getRandomImage() {
    //this will check if all URLS have been used, if yes than reset the array
    if (imageURLS.length === 0) {
        imageURLS = [...imageURLS]; // Reset the array when all elements have been used
    }

    //generate a random index based on the length of the imageURLS array
    const randomIndex = Math.floor(Math.random() * imageURLS.length);

    //selecting the image url using randomIndex
    const selectedImage = imageURLS[randomIndex];

    //remove the used image url from array
    imageURLS.splice(randomIndex, 1);
    return selectedImage;
}

//create and append an img element for each row
for (let i = 0; i < row; i++) {

    //create new img element
    let IMG = document.createElement("img");

    //set source of image to random image URLS
    IMG.src = getRandomImage();

    //append the element to the content
    content.appendChild(IMG);
}