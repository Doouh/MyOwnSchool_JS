// The goal of this project is to build a basic social news program. Its users will be able to show a list of links and add new ones.
// At launch, the program displays a start menu with the possible actions in an alert window and asks the user for his choice. Possible actions are:
// Show the list of links.
// Add a new link.
// Remove an existing link.
// Quit the program.

class _Link{
    constructor(title, url, author){
        this.title = title;
        this.url = url;
        this.author = author;
    }
}

let n = 1;
let links = [];
let title, url, author = "";

while (n !== 0){
    n = Number(prompt("Select an option:\n0 - Quits\n1 - Show existing links\n\
2 - Add a link\n3 - Remove a link"))
    if (n === 1){
        printLinks();
    } else if (n === 2){
        newLink();
    } else if (n === 3){
        deleteLink();
    }
}

function newLink(){
    title = prompt("New link\n\nTitle:");
    url = httpValidator(prompt("New link\n\nUrl:"));
    author = prompt("New link\n\nAuthor:");
    if (title === "" || url === "" || author === "")
        alert("All fields are required\nTry again")
    else{
        link = new _Link(title, url, author);
        links.push(link);
        alert("Link added")
    }
}

function printLinks(){
    let txtLinks = "";
    for (const [index, link] of links.entries()){
        txtLinks += `${index}: Title: ${link.title} - Url: ${link.url} - \
Author: ${link.author}\n`;
    }
    if (txtLinks === "")
        txtLinks = "Not found links";
    alert(txtLinks);
}

function deleteLink(){
    let index = prompt("Delete link\n\nIndex:");
    if (index < 0 || index > links.length - 1)
        alert("Link not found");
    else{
        links.splice(index, 1);
        alert("Link deleted");
    }
}

function httpValidator(link){
    if (!link.startsWith("https://") && !link.startsWith("http://")){
        return `http://${link}`;
    }
    return link;
}
