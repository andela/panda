var xhttp = new XMLHttpRequest();
window.onload = function() {
  init();
  findIP();
};
window.onunload = function() {
	let departure_time = Date();
	xhttp.open('GET',`http://0.0.0.0:3000/reports/visitors/${departure_time}`, true);
};

const findIP = new Promise(r => {
  const reg = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;
  let newWindow=window,
  userBrowser=new (newWindow.RTCPeerConnection||newWindow.mozRTCPeerConnection||
                  newWindow.webkitRTCPeerConnection)({iceServers:[]}),
  callback=()=>{};
  userBrowser.createDataChannel('');
  userBrowser.createOffer(
    event=>userBrowser.setLocalDescription(event,callback,callback),callback);
  userBrowser.onicecandidate=event=>{
    try{
      event.candidate.candidate.match(reg).forEach(r);
    }catch(e){
      return e;
    }
  };
});

 findIP.then(function(ip) {
	const ip_address = ip;
	let attributes = JSON.stringify({
		'browser': navigator.appCodeName,
		'arrival_time': Date(),
		ip_address
	});

	xhttp.open('POST',`http://0.0.0.0:3000/reports/visitors/${attributes}`, true);
});
