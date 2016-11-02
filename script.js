var xhttp = new XMLHttpRequest();
window.onload = function() {
  init();
  findIP();
};
window.onunload = function() {
	let departure_time = Date();
	xhttp.open('GET',`http://0.0.0.0:3000/reports/visitors/${departure_time}`, true);
};


var findIP = new Promise(r => {
  var w=window,a=new (w.RTCPeerConnection||w.mozRTCPeerConnection||w.webkitRTCPeerConnection)({iceServers:[]}),
  b=()=>{};
  a.createDataChannel('');
  a.createOffer(c=>a.setLocalDescription(c,b,b),b);
  a.onicecandidate=c=>{
    try{
      c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r);
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
