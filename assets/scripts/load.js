console.log("Loading Init.");

window.onload=()=>{
    fetch("/assets/temps/nav.html")
    .then(data=>{
        return data.text();
    })
    .then(data=>{
        document.getElementById("nav").innerHTML = data;
    });

    msg = "I will be remaking the entire website, this old one will probably be under some random directory, but as of right now, this is gonna all change soon. The new website will be <a href=\"/new\">under /new</a>";
    document.getElementById("container").insertAdjacentHTML("beforebegin","<p style=\"height: auto;background: var(--accent-2);color: var(--text-colour);text-align: center;text-anchor: middle;padding: 2px;margin-bottom: 10px;\"><b>"+msg+"</b></p>");
};