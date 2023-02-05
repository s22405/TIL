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