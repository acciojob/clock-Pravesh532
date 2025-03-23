//your JS code here. If required.
 function updateTime(){
	 let time = new Date().toLocalString();
	 document.getElementById("timer").textContent = time;
 }
setInterval(updateTime,1000);
updateTime();