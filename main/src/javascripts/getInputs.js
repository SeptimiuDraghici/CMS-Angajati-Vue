function getInputs(form){
if (validateForm()) {
    if(edit == true) {
        const db = firebase.firestore();
        db.collection("angajati").doc(old_email.toString()).delete().then(() => {
            console.log("Document successfully deleted!");
            location.reload();
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
    var ok = true;
    var nume = form.nume.value;
    var prenume = form.prenume.value;
    var email = form.email.value;
    var storageRef = firebase.storage().ref();
    var imageRef = storageRef.child(email);
    x = document.forms["myForm"]["image"].value;
    if (x != "") {
        imageRef.put(file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
    }
    var gender = form.gender.value;
    var data_nasterii = form.data_nasterii.value;
    const db = firebase.firestore();
    const workRef = db.collection('angajati');
    workRef.get()
        .then(doc => {
                doc.forEach(doc => {
                    data = doc.data()
                    console.log(data.email)
                    if(data.email == email){
                        ok = false;
                    }
                })
                if(ok) {
                    let angajat = new Angajat(nume, prenume, email, gender, data_nasterii,'img');
                    console.log(angajat);
                    InsertDB(angajat);
                    populateTable(document.getElementById("myTable"));
                }
                else {
                    alert("Email already taken.");
                }
        });
    }
}