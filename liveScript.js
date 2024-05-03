/*

let btnScreen = document.getElementById('btnScreen');
btnScreen.addEventListener('click', ()=>{

    btnScreen.setAttribute('class', 'btn btn-success disabled');
// Handle errors.
let handleError = function(err){
    console.log("Error: ", err);
};



// Query the container to which the remote stream belong.
let remoteContainer = document.getElementById("remote-container");

// Add video streams to the container.
function addVideoStream(elementId){
    // Creates a new div for every stream
    let streamDiv = document.createElement("div");
    // Assigns the elementId to the div.
    streamDiv.id = elementId;
    // Takes care of the lateral inversion
    streamDiv.style.transform = "rotateY(180deg)";
    // Adds the div to the container.
    remoteContainer.appendChild(streamDiv);
};

// Remove the video stream from the container.
function removeVideoStream(elementId) {
    let remoteDiv = document.getElementById(elementId);
    if (remoteDiv) remoteDiv.parentNode.removeChild(remoteDiv);
};



let client = AgoraRTC.createClient({
    mode: "rtc",
    codec: "vp8",
});

client.init("65b306bf28ac4269a1e3018c27b0e4fb");

, function() {
    console.log("client initialized");
}, function(err) {
    console.log("client init failed ", err);
});


// Join a channel
client.join(null, "any-channel", null, (uid)=>{


    let localStream = AgoraRTC.createStream({
        video: false,
        audio: false,
         screen: true,
    });
    // Initialize the local stream
    localStream.init(()=>{
        // Play the local stream
        localStream.play("localStream");
        // Publish the local stream
        client.publish(localStream, handleError);
    }, handleError);

    // Create a local stream
  }, handleError);




  // Subscribe to the remote stream when it is published
client.on("stream-added", function(evt){
    client.subscribe(evt.stream, handleError);
});
// Play the remote stream when it is subscribed
client.on("stream-subscribed", function(evt){
    let stream = evt.stream;
    let streamId = String(stream.getId());
    addVideoStream(streamId);
    stream.play(streamId);
});



// Remove the corresponding view when a remote user unpublishes.
client.on("stream-removed", function(evt){
    let stream = evt.stream;
    let streamId = String(stream.getId());
    stream.close();
    removeVideoStream(streamId);
});
// Remove the corresponding view when a remote user leaves the channel.
client.on("peer-leave", function(evt){
    let stream = evt.stream;
    let streamId = String(stream.getId());
    stream.close();
    removeVideoStream(streamId);
});

})




// For vidio streaming

 let btnLive = document.getElementById('btnLive');
 btnLive.addEventListener('click', ()=>{

    btnLive.setAttribute('class', 'btn btn-primary disabled');
// Handle errors.
let handleError = function(err){
    console.log("Error: ", err);
};



// Query the container to which the remote stream belong.
let remoteContainer = document.getElementById("remote-container");

// Add video streams to the container.
function addVideoStream(elementId){
    // Creates a new div for every stream
    let streamDiv = document.createElement("div");
    // Assigns the elementId to the div.
    streamDiv.id = elementId;
    // Takes care of the lateral inversion
    streamDiv.style.transform = "rotateY(180deg)";
    // Adds the div to the container.
    remoteContainer.appendChild(streamDiv);
};

// Remove the video stream from the container.
function removeVideoStream(elementId) {
    let remoteDiv = document.getElementById(elementId);
    if (remoteDiv) remoteDiv.parentNode.removeChild(remoteDiv);
};


let client = AgoraRTC.createClient({
    mode: "rtc",
    codec: "vp8",
});

client.init("65b306bf28ac4269a1e3018c27b0e4fb");

, function() {
    console.log("client initialized");
}, function(err) {
    console.log("client init failed ", err);
});


// Join a channel
client.join(null, "any-channel", null, (uid)=>{


    let localStream = AgoraRTC.createStream({
        video: true,
        audio: true,
    });
    // Initialize the local stream
    localStream.init(()=>{
        // Play the local stream
        localStream.play("localStream");
        // Publish the local stream
        client.publish(localStream, handleError);
    }, handleError);

    // Create a local stream
  }, handleError);




  // Subscribe to the remote stream when it is published
client.on("stream-added", function(evt){
    client.subscribe(evt.stream, handleError);
});
// Play the remote stream when it is subscribed
client.on("stream-subscribed", function(evt){
    let stream = evt.stream;
    let streamId = String(stream.getId());
    addVideoStream(streamId);
    stream.play(streamId);
});



// Remove the corresponding view when a remote user unpublishes.
client.on("stream-removed", function(evt){
    let stream = evt.stream;
    let streamId = String(stream.getId());
    stream.close();
    removeVideoStream(streamId);
});
// Remove the corresponding view when a remote user leaves the channel.
client.on("peer-leave", function(evt){
    let stream = evt.stream;
    let streamId = String(stream.getId());
    stream.close();
    removeVideoStream(streamId);
});

 })


*/

let btn = document.getElementById('button');
btn.addEventListener('click', camera )

let btn1 = document.getElementById('button1');
btn1.addEventListener('click', screenRecord )



function screenRecord(params) {
    let handleError = function(err){
        console.log("Error: ", err);
    };
    
    
    
    // Query the container to which the remote stream belong.
    let remoteContainer = document.getElementById("remote-container");
    
    // Add video streams to the container.
    function addVideoStream(elementId){
        // Creates a new div for every stream
        let streamDiv = document.createElement("div");
        // Assigns the elementId to the div.
        streamDiv.id = elementId;
        streamDiv.style.transform = "rotateY(180deg)";
        // Adds the div to the container.
        remoteContainer.appendChild(streamDiv);
    };
    
    // Remove the video stream from the container.
    function removeVideoStream(elementId) {
        let remoteDiv = document.getElementById(elementId);
        if (remoteDiv) remoteDiv.parentNode.removeChild(remoteDiv);
    };
    
    
    let client = AgoraRTC.createClient({
        mode: "rtc",
        codec: "vp8",
    });
    
    client.init("65b306bf28ac4269a1e3018c27b0e4fb");
    
    /*, function() {
        console.log("client initialized");
    }, function(err) {
        console.log("client init failed ", err);
    });
    */
    
    // Join a channel
    client.join(null, "any-channel", null, (uid)=>{
    
    
        let localStream = AgoraRTC.createStream({
            video: false,
            audio: true,
            screen: true
        });
        // Initialize the local stream
        localStream.init(()=>{
            // Play the local stream
             localStream.play("localStream");
            // Publish the local stream
            client.publish(localStream, handleError);
        }, handleError);
    
        // Create a local stream
      }, handleError);
    
    
    
    
      // Subscribe to the remote stream when it is published
    client.on("stream-added", function(evt){
        client.subscribe(evt.stream, handleError);
    });
    // Play the remote stream when it is subscribed
    client.on("stream-subscribed", function(evt){
        let stream = evt.stream;
        let streamId = String(stream.getId());
        addVideoStream(streamId);
        stream.play(streamId);
    });
    
    
    
    // Remove the corresponding view when a remote user unpublishes.
    client.on("stream-removed", function(evt){
        let stream = evt.stream;
        let streamId = String(stream.getId());
        stream.close();
        removeVideoStream(streamId);
    });
    // Remove the corresponding view when a remote user leaves the channel.
    client.on("peer-leave", function(evt){
        let stream = evt.stream;
        let streamId = String(stream.getId());
        stream.close();
        removeVideoStream(streamId);
    });
}


function camera(params) {
    let handleError = function(err){
        console.log("Error: ", err);
    };
    
    
    
    // Query the container to which the remote stream belong.
    let remoteContainer = document.getElementById("remote-container");
    
    // Add video streams to the container.
    function addVideoStream(elementId){
        // Creates a new div for every stream
        let streamDiv = document.createElement("div");
        // Assigns the elementId to the div.
        streamDiv.id = elementId;
        streamDiv.style.transform = "rotateY(180deg)";
        // Adds the div to the container.
        remoteContainer.appendChild(streamDiv);
    };
    
    // Remove the video stream from the container.
    function removeVideoStream(elementId) {
        let remoteDiv = document.getElementById(elementId);
        if (remoteDiv) remoteDiv.parentNode.removeChild(remoteDiv);
    };
    
    
    let client = AgoraRTC.createClient({
        mode: "rtc",
        codec: "vp8",
    });
    
    client.init("65b306bf28ac4269a1e3018c27b0e4fb");
    
    /*, function() {
        console.log("client initialized");
    }, function(err) {
        console.log("client init failed ", err);
    });
    */
    
    // Join a channel
    client.join(null, "any-channel", null, (uid)=>{
    
    
        let localStream = AgoraRTC.createStream({
            video: true,
            audio: true,
        });
        // Initialize the local stream
        localStream.init(()=>{
            // Play the local stream
             localStream.play("localStream");
            // Publish the local stream
            client.publish(localStream, handleError);
        }, handleError);
    
        // Create a local stream
      }, handleError);
    
    
    
    
      // Subscribe to the remote stream when it is published
    client.on("stream-added", function(evt){
        client.subscribe(evt.stream, handleError);
    });
    // Play the remote stream when it is subscribed
    client.on("stream-subscribed", function(evt){
        let stream = evt.stream;
        let streamId = String(stream.getId());
        addVideoStream(streamId);
        stream.play(streamId);
    });
    
    
    
    // Remove the corresponding view when a remote user unpublishes.
    client.on("stream-removed", function(evt){
        let stream = evt.stream;
        let streamId = String(stream.getId());
        stream.close();
        removeVideoStream(streamId);
    });
    // Remove the corresponding view when a remote user leaves the channel.
    client.on("peer-leave", function(evt){
        let stream = evt.stream;
        let streamId = String(stream.getId());
        stream.close();
        removeVideoStream(streamId);
    });
}
 



