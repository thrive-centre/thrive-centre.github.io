function selectMediaItem(element) {
  // Update active class
  const items = document.querySelectorAll('.media-gallery__list-item');
  items.forEach(item => item.classList.remove('active'));
  element.classList.add('active');
  
  // Get data attributes
  const type = element.getAttribute('data-type');
  const url = element.getAttribute('data-url');
  const title = element.getAttribute('data-title');
  const description = element.getAttribute('data-description');
  
  // Update title and description
  document.getElementById('item-title').textContent = title;
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
          <h2 class="media-gallery__item-title" id="item-title">${title}</h2>
          <div class="media-gallery__item-description" id="item-description">${description}</div>
        </div>
      `;
    } else {
      // Just update the iframe source
      document.getElementById('video-player').src = `https://www.youtube.com/embed/${youtubeId}`;
    }
  } else {
    // It's an image
    const display = document.getElementById('media-display');
    
    // Check if we need to replace video with image
    if (!document.getElementById('image-display')) {
      display.innerHTML = `
        <div class="media-gallery__image-container">
          <img 
            src="${url}" 
            alt="${title}" 
            class="media-gallery__image" 
            id="image-display"
          />
        </div>
        <div class="media-gallery__item-info">
          <h2 class="media-gallery__item-title" id="item-title">${title}</h2>
          <div class="media-gallery__item-description" id="item-description">${description}</div>
        </div>
      `;
    } else {
      // Just update the image source
      document.getElementById('image-display').src = url;
      document.getElementById('image-display').alt = title;
    }
  }
}
