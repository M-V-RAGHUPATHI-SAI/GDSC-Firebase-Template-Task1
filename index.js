const firebaseConfig = {
    apiKey: "AIzaSyBpWdwM2pyOb7jEOlRsz_GX3FSYJjjPU7Y",
    authDomain: "loginpage-492ae.firebaseapp.com",
    databaseURL: "https://loginpage-492ae-default-rtdb.firebaseio.com",
    projectId: "loginpage-492ae",
    storageBucket: "loginpage-492ae.appspot.com",
    messagingSenderId: "580997536832",
    appId: "1:580997536832:web:4b22a29dd7eed8206a53a5",
    measurementId: "G-C75JB3J136"
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var loginpageDB = firebase.database().ref("loginpage");

document.getElementById("loginpage").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var rollNumber = getElementVal("rollNumber");

    console.log(name , rollNumber);

    saveMessages(name, rollNumber);

    document.querySelector(".alert").style.display = "block";

    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    document.getElementById("loginpage").reset();
}

const saveMessages = (name, rollNumber) => {
    var newLoginPage = loginpageDB.push();

    newLoginPage.set({
        name: name,
        rollNumber: rollNumber
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};