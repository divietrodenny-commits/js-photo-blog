/* contenuto del link del prof, visto da Postman
 [
    {
        "id": 1,
        "title": "Skate Park",
        "date": "01-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/1.png"
    },
    {
        "id": 2,
        "title": "Passeggiata",
        "date": "16-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/2.png"
    },
    {
        "id": 3,
        "title": "Alpi",
        "date": "01-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/3.png"
    },
    {
        "id": 4,
        "title": "Sagra",
        "date": "21-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/4.png"
    },
    {
        "id": 5,
        "title": "Watergun",
        "date": "23-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/5.png"
    },
    {
        "id": 6,
        "title": "Riviera",
        "date": "30-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/6.png"
    }
] */
const rowElement = document.querySelector('.row');

fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        data.forEach(foto => {
            const col = document.createElement('div');
            col.className = 'col-md-6 col-lg-4';

            col.innerHTML = `
        <div class="polaroid_inner">
          <img src="${foto.url}" alt="${foto.title}" class="polaroid_img">
          <p class="polaroid_caption">
            <span class="polaroid_date">${foto.date}</span>
            <span class="polaroid_title">${foto.title}</span>
          </p>
        </div>
      `;

            rowElement.appendChild(col);
        });
        
    })


