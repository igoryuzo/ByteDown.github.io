$(function() {
  pageView();
  twitterClick();
  linkedInClick();
  githubClick();
  mediumClick();
  resumeClick();
});

function pageView() {
  mixpanel.track("Page Viewed");
}

function twitterClick() {
  $("#twitter").on("click", function() {
    mixpanel.track("Clicked Twitter");
  });
}

function linkedInClick() {
  $("#linkedin").on("click", function() {
    mixpanel.track("Clicked LinkedIn");
  });
}

function githubClick() {
  $("#github").on("click", function() {
    mixpanel.track("Clicked Github");
  });
}

function mediumClick() {
  $("#medium").on("click", function() {
    mixpanel.track("Clicked Medium");
  });
}

function resumeClick() {
  $("#resume-link").on("click", function() {
    mixpanel.track("Clicked Resume");
  });
}

