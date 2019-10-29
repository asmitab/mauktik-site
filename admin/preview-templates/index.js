import Section from "/admin/preview-templates/section.js"

// Register the Section component as the preview for entries in each collection
CMS.registerPreviewTemplate("filmmaking", Section);

CMS.registerPreviewStyle("/_includes/assets/css/main.css");
// Register any CSS file on the home page as a preview style
fetch("/")
  .then(response => response.text())
  .then(html => {
    const f = document.createElement("html");
    f.innerHTML = html;
    Array.from(f.getElementsByTagName("link")).forEach(tag => {
      if (tag.rel == "stylesheet" && !tag.media) {
        CMS.registerPreviewStyle(tag.href);
      }
    });
  });
