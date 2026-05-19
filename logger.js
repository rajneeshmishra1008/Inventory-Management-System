function getLogs(){
return JSON.parse(localStorage.getItem("logs")) || [];
}

function saveLogs(logs){
localStorage.setItem("logs", JSON.stringify(logs));
}

/* ADD LOG */
function addLog(type, title){

let logs = getLogs();

logs.push({
id: Date.now(),
type: type,
title: title,
time: new Date().toLocaleString()
});

saveLogs(logs);

/* REALTIME UPDATE */
window.dispatchEvent(
new Event("storage")
);

}