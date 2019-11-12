function validation() {
    var user = document.getElementById('fname').value;
    var userl = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var cpass = document.getElementById('cpass').value;
    var phone = document.getElementById('phone').value;

    if (user == "") {
        document.getElementById('username').innerHTML = "* Mesto za ime je prazno";
        return false;
    } else {
        document.getElementById('username').innerHTML = "";
    }
    if ((user.length <= 2) || (user.length > 20)) {
        document.getElementById('username').innerHTML = "* Neodgovarajući format";
        return false;
    } else {
        document.getElementById('username').innerHTML = "";
    }
    if (!isNaN(user)) {
        document.getElementById('username').innerHTML = "* Dozvoljeni su samo karakteri";
        return false;
    } else {
        document.getElementById('username').innerHTML = "";
    }

    if (userl == "") {
        document.getElementById('userlastname').innerHTML = "* Mesto za prezime je prazno";
        return false;
    } else {
        document.getElementById('userlastname').innerHTML = "";
    }
    if ((userl.length <= 2) || (userl.length > 20)) {
        document.getElementById('userlastname').innerHTML = "* Neodgovarajući format";
        return false;
    } else {
        document.getElementById('userlastname').innerHTML = "";
    }
    if (!isNaN(userl)) {
        document.getElementById('userlastname').innerHTML = "* Dozvoljeni su samo karakteri";
        return false;
    } else {
        document.getElementById('userlastname').innerHTML = "";
    }

    if (email == "") {
        document.getElementById('useremail').innerHTML = "* Mesto za email je prazno";
        return false;
    } else {
        document.getElementById('useremail').innerHTML = "";
    }
    if (email.indexOf('@') <= 0) {
        document.getElementById('useremail').innerHTML = "* Nije dobar format";
        return false;
    }
    if (email.charAt(email.length - 4) != '.') {
        document.getElementById('useremail').innerHTML = "* Nije dobar format";
        return false;
    }

    if (pass == "") {
        document.getElementById('userpass').innerHTML = "* Mesto za lozinku je prazno";
        return false;
    } else {
        document.getElementById('userpass').innerHTML = "";
    }
    if (pass.length <= 8) {
        document.getElementById('userpass').innerHTML = "* Lozinka mora biti duza od 8 slova";
        return false;
    } else {
        document.getElementById('userpass').innerHTML = "";
    }
    if (pass != cpass) {
        document.getElementById('userpass').innerHTML = "* Lozinke se ne poklapaju";
        return false;
    } else {
        document.getElementById('userpass').innerHTML = "";
    }

    if (cpass == "") {
        document.getElementById('usercpass').innerHTML = "* Mesto za potvrdu lozinke je prazno";
        return false;
    } else {
        document.getElementById('usercpass').innerHTML = "";
    }

    if (phone == "") {
        document.getElementById('userphone').innerHTML = "* Mesto za broj telefona je prazno";
        return false;
    } else {
        document.getElementById('userphone').innerHTML = "";
    }
    if (phone.length < 8 && phone.length > 9) {
        document.getElementById('userphone').innerHTML = "* Nije dobar format";
        return false;
    } else {
        document.getElementById('userphone').innerHTML = "";
    }
    if (isNaN(phone)) {
        document.getElementById('userphone').innerHTML = "* Samo brojevi!";
        return false;
    } else {
        document.getElementById('userphone').innerHTML = "";
    }
}