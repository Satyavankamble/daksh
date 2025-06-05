// Gallery

function openLightbox(imageSrc, captionText) {
  document.getElementById('lightbox-img').src = imageSrc;
  document.getElementById('lightbox-caption').textContent = captionText;
  document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}


 // Disable right click
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    });

    // Disable specific key combinations
    document.addEventListener('keydown', function(e) {
      // F12
      if (e.keyCode === 123) {
        e.preventDefault();
      }
      // Ctrl + Shift + I
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
      }
      // Ctrl + U, Ctrl + C, Ctrl + S
      if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'c')) {
        e.preventDefault();
      }
    });


    //Loadeer

   function hideLoader() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
  }

  window.addEventListener('load', function() {
    hideLoader();
  });

  setTimeout(hideLoader, 15000);


  //Internet Connection Check


   const statusDiv = document.getElementById('statusMessage');
    const statusIcon = document.getElementById('statusIcon');
    const statusText = document.getElementById('statusText');
    let onlineTimeout;
    let initialLoad = true;

    function showMessage(text, className, duration = null) {
      clearTimeout(onlineTimeout);
      statusDiv.className = ''; // reset classes
      statusDiv.classList.add(className, 'show');

      statusText.textContent = text;
      if (className === 'online') {
        statusIcon.src = 'Online.png'; // online icon
        statusIcon.alt = 'Online';
      } else if (className === 'offline') {
        statusIcon.src = 'Offline.png'; // offline icon
        statusIcon.alt = 'Offline';
      } else {
        statusIcon.src = '';
        statusIcon.alt = '';
      }

      if (duration) {
        onlineTimeout = setTimeout(() => {
          statusDiv.classList.remove('show');
        }, duration);
      }
    }

    function updateStatus() {
      if (navigator.onLine) {
        if (initialLoad) {
          statusDiv.classList.remove('show'); // सुरुवातीला मेसेज न दाखवायचा
        } else {
          showMessage("इंटरनेट चालू आहे.", "online", 3000);
        }
      } else {
        showMessage("कृपया इंटरनेट चालू करा.", "offline");
      }
      initialLoad = false;
    }

    window.addEventListener('load', updateStatus);
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);