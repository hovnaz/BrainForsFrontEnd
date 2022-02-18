let dataStorage = {
    aptNumber: "poghos",
    floor: "petros",
    rooms: "mardiros",
    parking: "hmayak",
    location: "Gyumri",
    completedDate: "45ff67",
}
function changeData(storageU=false){
    const input = $("input[data-name]");
    main:
    for (const key in dataStorage) {
        const storage = localStorage.getItem(key);
        const cookie = getCookie(key);
        let value = dataStorage[key];
        let sel = `[data-name="${key}"]`;
        if (storageU == "input"){
            for (const inputItem of input) {
                let value = $(inputItem).val();
                let name = $(inputItem).data("name");
                $(`[data-name="${name}"]`).text(value);
                dataStorage[name] = value;
            }
            break main;
        }
        else if (storageU == "Storage" && (storage || storage == "")) {
            value = storage;
            dataStorage[key] = storage;
        }
        else if (storageU == "Cookie" && (cookie || cookie == "")) {
            value = cookie;
            dataStorage[key] = cookie;
        }
        else sel = ":not(input)"+sel;
        $(sel).text(value).val(value);
    }
}

function setStorage() {
    for (const key in dataStorage) {
        localStorage.setItem(key, dataStorage[key])
    }
}
function setCookiE() {
    for (const key in dataStorage) {
        setCookie(key,dataStorage[key]);
    }
}

window.onload = function (e) {
    changeData("Storage");
    // changeData("Cookie");
};
window.onbeforeunload = function (e) {
    setStorage();
    // setCookiE();
    changeData();
};