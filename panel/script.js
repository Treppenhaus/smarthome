
let objects = 0;
let btnObj = "<div class='obj ${data-color}' onclick='objBtnClick(\"${value-send}\", \"${action-send}\");'>\n"+
             "   <div class='obj-top'>\n"+
                   " <h3 class='obj-name'>\n"+
                    "${name}\n"+
                        "</h3>\n"+
                    "</div>\n"+
                "<div class='obj-btm'>\n"+
                    "<h4 class='btn-text'>\n"+
                    "${text}\n"+
                        "</h4>\n"+
                "</div>\n"+
            "</div>"

xmlreq = (reqUrl, callback) => {
    if(window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", reqUrl, false);
    xmlhttp.send();
}

createBtnString = (data) => {
    return btnObj
        .replace("${data-color}", "data-" + data.color)
        .replace("${name}", data.name)
        .replace("${text}", data.desc)
        .replace("${value-send}", data.value)
        .replace("${action-send}", data.action)
}

instantAddEmptyObject = () => document.getElementById("content").innerHTML += "<div class='free'></div>";


addObject = (data) => {
    if(data.type == "button") {
        let content = document.getElementById("content");
        content.innerHTML += createBtnString(data);

        objects++;
        if(objects % 2 == 1) instantAddEmptyObject();
    }
    else return;
}

objBtnClick = (value, action) => {
    // buttons are usually just toggle object
    // so we just send a request to the provided ip / webserver
    // provieded "sendValue" should be a valid IP which should toggle something

    xmlreq("buttonPressed.php?value=" + value + "&type=button&action=" + action, (res) => {
        //data = JSON.parse(res);
        // todo: ? add method to work with new gotton data
        console.log(res);
        alert("click processed: " + res);
    })
}

addObject({
    type: "button",
    name: "PC",
    desc: "toggle",
    color: "green",
    action: "webRequest",
    value: "http://10.0.0.27/smarthome/panel/ping",
});
