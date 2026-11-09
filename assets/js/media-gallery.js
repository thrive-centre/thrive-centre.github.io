function selectMediaItem(element) {
  // Update active class
  const items = document.querySelectorAll('.media-gallery__list-item');
  items.forEach(item => item.classList.remove('active'));
  element.classList.add('active');
  
  // Get data attributes
  const type = element.getAttribute('data-type');
  const url = element.getAttribute('data-url');
  const images = JSON.parse(element.getAttribute('data-images') || '[]');
  const imageUrls = images.length ? images : [url];
  const title = element.getAttribute('data-title');
  const description = element.getAttribute('data-description');
  
  // Update description
  document.getElementById('item-description').innerHTML = description;
  
  // Update content based on type
  if (type === 'video') {
    const youtubeId = element.getAttribute('data-youtube-id');
    const display = document.getElementById('media-display');
    
    // Check if we need to replace image with video
    if (!document.getElementById('video-player')) {
      display.innerHTML = `
        <div class="media-gallery__video-container">
          <iframe 
            src="https://www.youtube.com/embed/${youtubeId}" 
            frameborder="0" 
            allowfullscreen
            class="media-gallery__video"
            id="video-player"
          ></iframe>
        </div>
        <div class="media-gallery__item-info">
          <h2 class="media-gallery__item-title" id="item-title">
            <a href="${url}" target="_blank">${title}</a>
          </h2>
          <div class="media-gallery__item-description" id="item-description">${description}</div>
        </div>
      `;
    } else {
      // Just update the iframe source and title
      document.getElementById('item-title').innerHTML = `<a href="${url}" target="_blank">${title}</a>`;
      document.getElementById('video-player').src = `https://www.youtube.com/embed/${youtubeId}`;
    }
  } else {
    // It's an image
    const display = document.getElementById('media-display');
    const link = element.getAttribute('data-link');
    let imageContainer = display.querySelector('.media-gallery__image-container');
    
    if (!imageContainer) {
      display.innerHTML = `
        <div class="media-gallery__item-info">
          <h2 class="media-gallery__item-title" id="item-title">
            <a href="${link}" target="_blank">${title}</a>
          </h2>
          <div class="media-gallery__item-description" id="item-description">${description}</div>
        </div>
      `;
      imageContainer = document.createElement('div');
      imageContainer.className = 'media-gallery__image-container';
      display.insertBefore(imageContainer, display.firstChild);
    }

    imageContainer.replaceChildren();
    imageContainer.classList.toggle('media-gallery__image-container--multiple', imageUrls.length > 1);
    imageUrls.forEach((imageUrl, index) => {
      const image = document.createElement('img');
      image.src = imageUrl;
      image.alt = title;
      image.className = 'media-gallery__image';
      if (index === 0) image.id = 'image-display';
      imageContainer.appendChild(image);
    });
    document.getElementById('item-title').innerHTML = `<a href="${link}" target="_blank">${title}</a>`;
  }
}
