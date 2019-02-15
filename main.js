const admin = require('firebase-admin');
const serviceAccount = require('./hackjunction-tokyo');

admin.initializeApp( {
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://hackjunction-tokyo.firebaseio.com" //datavase URL
} );

const db = admin.database();
const ref = db.ref("data1"); //looking data1

/*　data1 async callback */
ref.on("value", function(snapshot) {
    /* here is some functions */
    console.log(snapshot.val());
}, 
function(errorObject) {
    console.log("The read failed: " + errorObject.code);
} );

// update data1
// ref.update( {
//   "humidity": 10 
// } );

