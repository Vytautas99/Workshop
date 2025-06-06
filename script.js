let html = "";

// const formatai = ['jpg', 'gif', 'png']

for (let i = 1; i <= 32; i++) {
    html += `<li>
                <a href="./img/foto (${i}).jpg" target="_blank"></a>
                <img src="./img/foto (${i}).jpg" alt="image">
            </li>`
}


html += "<li></li>"

document.getElementById(`galerija`).innerHTML = html;


