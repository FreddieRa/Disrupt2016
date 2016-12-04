pubnub = new PubNub({
        publishKey : 'pub-c-eb9de64e-eb5b-47f0-9d14-ebf34028f9a5',
        subscribeKey : 'sub-c-1e49b0dc-b9d2-11e6-963b-0619f8945a4f'
    })


pubnub.subscribe({
    channels: ['my_channel'],
    withPresence: true // also subscribe to presence instances.
})


    pubnub.addListener({
        status: function(statusEvent) {
            if (statusEvent.category === "PNConnectedCategory") {
                publishSampleMessage();
            }
        },
        message: function(message) {
            console.log("New Message!!", message);
        },
        presence: function(presenceEvent) {
            // handle presence
        }
    })      


          pubnub.publish({channel: 'my_channel'}, function(status, response) {
            console.log(status, response);
        }