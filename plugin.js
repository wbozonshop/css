window.onload = function() {
  // Check if the user agent has changed due to an extension
  if (navigator.userAgent !== window.chrome.extension.getBackgroundPage().navigator.userAgent) {
    // Redirect all requests to a target page
    window.location.href = '/target-page';
  }
}
