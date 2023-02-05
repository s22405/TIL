const doctorsBaseUrl = 'http://localhost:3000/api/doctors';

export function getDoctorsApiCall() {
    const promise = fetch(doctorsBaseUrl);
    return promise;
}

export function getDoctorByIdApiCall(idDoctor) {
    const url = `${doctorsBaseUrl}/${idDoctor}`;
    const promise = fetch(url);
    return promise;
}

export function addDoctorApiCall(doctor) {
    const doctorString = JSON.stringify(doctor)
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: doctorString
    }
    const promise = fetch(doctorsBaseUrl, options);
    return promise;
}

export function updateDoctorApiCall(idDoctor, doctor) {
    const url = `${doctorsBaseUrl}/${idDoctor}`
    const doctorString = JSON.stringify(doctor)
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: doctorString
    }
    const promise = fetch(url, options);
    return promise;
}