let files = document.getElementById("files");

let encrypt = (plainText, password) => {
    return CryptoJS.AES.encrypt(plainText, password, "{ mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }");
}

let decrypt = (cipherString, password) => {
    return CryptoJS.AES.decrypt(cipherString, password, "{ mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }").toString(CryptoJS.enc.Utf8);
}

files.addEventListener('change',function(){
    let img = document.createElement("img");
    img.src = "data:image/png;base64,"+ decrypt(fetch(this.value).then(data=>{return data.text()}),"lesbian");
    files.parentNode.insertBefore(img,files.nextSibling);
});