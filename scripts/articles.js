import { getArticles } from "./database.js"

let articles = getArticles()

export const articleList = () => {
    let html = "<ol>"

    for (const article of articles) {
        html += `<li id="articles--${article.id}">${article.headline}</li>`
    }
    html +="</ol>"
    return html
}