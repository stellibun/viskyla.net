console.log("Loading Init.");

window.onload=()=>{
    fetch("/assets/temps/nav.html")
    .then(data=>{
        return data.text();
    })
    .then(data=>{
        document.getElementById("nav").innerHTML = data;
    });

    document.insertBefore(document.getElementById("container"),new(Node).innerHTML = "<p style=\"height: auto;background: var(--accent-2);color: var(--text-colour);text-align: center;text-anchor: middle;padding: 2px;margin-bottom: 010px;\"><b>Announcement message across entire website</b></p>");
}