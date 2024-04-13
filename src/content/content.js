console.log("ready");

chrome.runtime.sendMessage({ "type": "bannerReady" });

chrome.runtime.onMessage.addListener((mes, sender, response) => {
    if (mes.type != "render")
        return;
    console.log("ALERT INJECTED");
    console.log(mes.tab1.domain);
    Array.from(document.getElementsByClassName("wrong-domain")).forEach(elem => elem.innerHTML = mes.tab1.domain);
    document.getElementById("wrong-img").src = "https://www.google.com/s2/favicons?domain=" + mes.tab1.domain;
    document.getElementById('leave').addEventListener("click", () => {
        chrome.runtime.sendMessage({ "type": "userconfirm", "id": mes.id, "url": mes.tab1.domain, "response": false });
    });
    document.getElementById('stay').addEventListener("click", () => {
        chrome.runtime.sendMessage({ "type": "userconfirm", "id": mes.id, "url": mes.tab1.domain, "response": true });
        window.location.href = mes.tab1.url;
    });
});
