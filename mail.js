
const firebaseConfig = {
    apiKey: "AIzaSyCu3q0t34PKH7ImFZOKtP1kMX7hxVnVc7M",
    authDomain: "contactform-ab1b0.firebaseapp.com",
    databaseURL: "https://contactform-ab1b0-default-rtdb.firebaseio.com",
    projectId: "contactform-ab1b0",
    storageBucket: "contactform-ab1b0.appspot.com",
    messagingSenderId: "411803391660",
    appId: "1:411803391660:web:259c0988271e9dc3e6f109"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };