function expandChapters() {
  chapters = document.querySelectorAll('[id^="u90-accordion-panel-title--"]');

  for (let i=0; i<chapters.length; i++) {
    chapters[i].click();
  }
}


function checkLectures() {
  var ids = document.querySelectorAll('[id^="u90-checkbox--"]');
  var checkboxes = [];

  Object.entries(ids).forEach(id => {
    currId = id[1].id;
    if (currId.startsWith('u90-checkbox--'))
      checkboxes.push(id[1].id);
  });

  for (let i=0; i<checkboxes.length; ++i) {
    document.getElementById(checkboxes[i]).click();
  }
}

function completeCourse() {
  expandChapters();
  checkLectures();
}
