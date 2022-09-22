/*
Create an authorList function that returns an html representation of the authors to be displayed on the browser.
*/

import { getAuthors } from "./database.js";
const authors = getAuthors();

export const authorHTML = () => {
  let html = "<ul>";
  for (const author of authors) {
    html += `<li id="author--${author.id}">${author.name}</li>`;
  }

  html += "</ul>";

  return html;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("author")) {
    const [, authorPrimaryKey] = itemClicked.id.split("--");
    for (const author of authors) {
      if (author.id === parseInt(authorPrimaryKey)) {
        window.alert(`${author.bio}`);
      }
    }
  }
});
