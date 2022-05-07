const onload = () => {
    cmd1type();
    quizStart();
}

let cmd1 = document.getElementById("cmd1");

async function cmd1type () {
    while (true) {
        cmd1.innerHTML = "";
        cmd1.innerHTML += "<span></span>";
        await typeToCmd("pwd", cmd1);
        cmd1.innerHTML += "<br>" +
            "/home/root<br>" +
            "<span></span>";
        await typeToCmd("du website", cmd1);
        cmd1.innerHTML += "<br>" +
            "124&nbsp;&#09;website/index.html<br>" +
            "547&nbsp;&#09;website/res/assets/..<br>" +
            "642&nbsp;&#09;website/res/script/..<br>" +
            "789&nbsp;&#09;website/res/style/main.css<br>" +
            "<span></span>";
        await typeToCmd("date", cmd1);
        cmd1.innerHTML += "<br>" +
            new Date() + "<br>" +
            "<span></span>";
        await typeToCmd("cls", cmd1);
    }
}

let menuContainer = document.getElementById('menu-container');
document.getElementById('menu').onclick = async () => {
    if (menuContainer.style.display == 'block') {
        menuContainer.style.opacity = 0;
        await sleep(200);
        menuContainer.style.display = 'none';
    } else {
        menuContainer.style.display = 'block';
        await sleep(200);
        menuContainer.style.opacity = 1;
    }
};

menuContainer.onclick = () => {
    sections.style.display = 'block';
    document.body.style.height = 'auto';
}

let sections = document.getElementById('sections');
document.getElementById('hide-sections').onclick = () => {
    if (sections.style.display == 'none') {
        sections.style.display = 'block';
        document.body.style.height = 'auto';
    } else {
        sections.style.display = 'none';
        document.body.style.height = '100vh';
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeToCmd(text, element) {
    await sleep(2000);
    for (let i = 0; i < text.length; i++) {
        element.innerHTML += text[i];
        await sleep(100);
    }
    await sleep(600);
}