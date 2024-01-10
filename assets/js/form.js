function validation() {

    const email = document.registration.email.value
    const firstName = document.registration.first_name.value
    const lastName = document.registration.last_name.value
    const gender = document.registration.gender.value
    const country = document.registration.country.value

    if (email.endsWith('@dci-student.org') == false){
        alert('Email should end with @dci-student.org')
        return false
    }

    if(firstName.length < 8){
        alert('First Name should be at least 8 characters')
        return false
    }

    if(lastName.length == 0){
        alert('Last Name should be provided')
        return false
    }

    if(country == 'usa' && gender != 'female'){
        alert('we only register females in USA')
        return false
    }

}
