window.onload = function() {
  chrome.runtime.getBackgroundPage(function(backgroundPage) {
  if (navigator.userAgent !== backgroundPage.navigator.userAgent) {
    // Redirect all requests to a target page
    window.location.href = '/target-page';
  }
});
}
