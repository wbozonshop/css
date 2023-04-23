browser.runtime.getBackgroundPage().then(function(backgroundPage) {
  if (navigator.userAgent !== backgroundPage.navigator.userAgent) {
    // Redirect all requests to a target page
    window.location.href = '/404';
  }
});

