const firebaseConfig = {
    apiKey: "AIzaSyCYJ6OY18lmPHfeIrMDVgyAC2LPtp_UIes",
    authDomain: "login-page-f56cc.firebaseapp.com",
    databaseURL: "https://login-page-f56cc-default-rtdb.firebaseio.com",
    projectId: "login-page-f56cc",
    storageBucket: "login-page-f56cc.firebasestorage.app",
    messagingSenderId: "978592498795",
    appId: "1:978592498795:web:11f6e5553aed4fcebf1d2e"
};

firebase.initializeApp(firebaseConfig);

var loginpageDB = firebase.database().ref("form1");

document.getElementById("form1").addEventListener("submit",submitSignUp);

function submitSignUp(e){
    e.preventDefault();

    var fName = getElementVal("fName");
    var lName = getElementVal("lName");
    var rEmail = getElementVal("rEmail");
    var rPassword = getElementVal("rPassword");
    var rAddress = getElementVal("rAddress");
    var rContact = getElementVal("rContact");

    saveMessages(fName,lName,rEmail,rPassword,rAddress,rContact);
}

const saveMessages = (fName,lName,rEmail,rPassword,rAddress,rContact) => {
    var newform1 = loginpageDB.push();
    newform1.set({
        fName : fName,
        lName : lName,
        rEmail : rEmail,
        rPassword : rPassword,
        rAddress : rAddress,
        rContact : rContact
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};