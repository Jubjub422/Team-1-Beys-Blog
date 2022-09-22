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
