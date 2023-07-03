// Define an array of gallery items as JavaScript objects
var galleryItems = [
    {
      src: "images/flowers-pink",
      alt: "Pink Flowers",
      caption: "Pink flowers in a garden",
      isActive: true
    },
    {
      src: "images/flowers-purple",
      alt: "Purple Flowers",
      caption: "Purple flowers blooming in the field",
      isActive: false
    },
    {
      src: "images/flowers-red",
      alt: "Red Flowers",
      caption: "Red flowers with green leaves",
      isActive: false
    },
    {
      src: "images/flowers-white",
      alt: "White Flowers",
      caption: "White flowers in full bloom",
      isActive: false
    },
    {
      src: "images/flowers-yellow",
      alt: "Yellow Flowers",
      caption: "Yellow flowers against a blue sky",
      isActive: false
    }
  ];
  
  // Get references to the featured image, caption, and thumbnail list
  var featuredImage = document.querySelector("#gallery figure img");
  var caption = document.querySelector("#gallery figure figcaption");
  var thumbnailList = document.querySelector("#gallery ul");
  
  // Function to create a thumbnail list item
  function createThumbnailListItem(item) {
    var listItem = document.createElement("li");
    var thumbnail = document.createElement("img");
    thumbnail.src = item.src + "-small.jpg";
    thumbnail.alt = item.alt;
    thumbnail.width = 240;
    thumbnail.height = 160;
    if (!item.isActive) {
      thumbnail.classList.add("inactive");
    }
    listItem.appendChild(thumbnail);
    return listItem;
  }
  
  // Function to update the featured image and caption
  function updateFeaturedImage(item) {
    featuredImage.src = item.src + "-large.jpg";
    featuredImage.alt = item.alt;
    caption.textContent = item.caption;
    // Remove active class from all thumbnails
    var thumbnails = thumbnailList.querySelectorAll("img");
    thumbnails.forEach(function (thumbnail) {
      thumbnail.classList.remove("active");
      thumbnail.classList.add("inactive");
    });
    // Add active class to the current thumbnail
    var currentThumbnail = thumbnailList.querySelector(
      'img[src="' + item.src + '-small.jpg"]'
    );
    currentThumbnail.classList.remove("inactive");
    currentThumbnail.classList.add("active");
  }
  
  // Build the thumbnail list dynamically
  galleryItems.forEach(function (item) {
    var thumbnailListItem = createThumbnailListItem(item);
    thumbnailListItem.addEventListener("click", function () {
      updateFeaturedImage(item);
    });
    thumbnailList.appendChild(thumbnailListItem);
  });
  
  // Set the initial featured image and caption
  updateFeaturedImage(galleryItems[0]);
  