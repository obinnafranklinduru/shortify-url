const shortenButton = document.getElementById('shortenButton');
const loadingAnimation = document.getElementById('loadingAnimation');
const shortUrlContainer = document.getElementById('shortUrlResult');
const shortUrlInput = document.getElementById('shortUrl');

shortenButton.addEventListener('click', async () => {
  const longUrlInput = document.getElementById('longUrlInput');
  const longUrl = longUrlInput.value.trim();

  if (!isValidUrl(longUrl)) {
    alert('Please enter a valid URL.');
    return;
  }

  // Disable the button and show loading animation
  shortenButton.disabled = true;
  loadingAnimation.style.display = 'block';

  try {
    // Send the long URL to the server for shortening
    const response = await fetch('/v1/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ longUrl }),
    });

    if (!response.ok) {
      throw new Error('Failed to shorten URL.');
    }

    const data = await response.json();
    const shortUrl = data.shortUrl;

    // Display the shortened URL and enable the button
    shortUrlInput.value = shortUrl;
    shortUrlContainer.style.display = 'block';
    shortenButton.disabled = false;
    loadingAnimation.style.display = 'none';
  } catch (error) {
    alert('An error occurred while shortening the URL. Please try again later.');
    shortenButton.disabled = false;
    loadingAnimation.style.display = 'none';
  }
});

// Copy the shortened URL to clipboard
const copyButton = document.getElementById('copyButton');
copyButton.addEventListener('click', async () => {
  const textToCopy = shortUrlInput.value;
  try {
    await navigator.clipboard.writeText(textToCopy);
    alert('Shortened URL copied to clipboard!');
  } catch (error) {
    alert('Failed to copy the URL to clipboard.');
  }
});

// Function to validate the URL format
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}