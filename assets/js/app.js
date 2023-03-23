 //alert(hii....!!!)
 
 let cl = console.log;
 
 const digitalClock = document.getElementById("digitalClock");
 
 const setZero = (val) => {
	 if (val < 10){
		 return "0" + val
	 } else{
		 return val
	 }
 }
 
 function creatdigitalClock(){
	 let d = new Date();
 
 let hr = d.getHours();
 let min = d.getMinutes();
 let sec = d.getSeconds();
 let session = "AM";
 
 if(hr >= 12){
	 session = "PM"
 }
 
 if(hr > 12){
	 hr = hr - 12
 }
 
 hr = setZero(hr);
 min = setZero(min);
 sec = setZero(sec);
 // if(hr < 10){
	 // hr = "0" + hr
 // }
 
 // if(min < 10){
	 // min = '0' + min
 // }
 
 // if(sec < 10){
	 // sec = '0' + sec
 // }
 
 let result = `${hr} : ${min} : ${sec} ${session}`;
 digitalClock.innerHTML = result;
 cl(hr, min, sec)
 setTimeout(creatdigitalClock, 1000);
 }
 
 creatdigitalClock();