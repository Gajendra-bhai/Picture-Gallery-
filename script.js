const accessKey = 'UmWTx4YaXBfON90ItOrTdz6uezuC6ZDRWAy4HrDxJSM';

async function searchPictures() {
  const category = document.getElementById('categoryInput').value;
  const url = `https://api.unsplash.com/search/photos?page=1&query=${category}&client_id=${accessKey}`;

  try 
  {
    const response = await fetch(url);
    const data = await response.json();

    display(data.results);
  } 
  catch (error)
   {
    console.error('Error to load an Image', error);
  }
}

function display(pictures) {
  const pictureGrid = document.getElementById('pictureGrid');
  pictureGrid.innerHTML = '';

  pictures.forEach((pic) => {
    const pictureElement = document.createElement('div');
    pictureElement.classList.add('picture');

    const img = document.createElement('img');
    img.src = pic.urls.small;
    img.alt = pic.alt_description;

    const author = document.createElement('p');
    author.innerText = `Author: ${pic.user.name}`;

    const description = document.createElement('p');
    description.innerText = `Description: ${pic.description || 'N/A'}`;

    const link = document.createElement('a');
    link.href = pic.links.html;
    link.innerText = 'View on Unsplash';
    link.target = '_blank';

    pictureElement.appendChild(img);
    pictureElement.appendChild(author);
    pictureElement.appendChild(description);
    pictureElement.appendChild(link);

    pictureGrid.appendChild(pictureElement);
  });
}

