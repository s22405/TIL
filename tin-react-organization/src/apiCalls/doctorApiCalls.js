import { doctorList, doctorDetailsList } from './doctorApiMockData'

export function getDoctorsApiCall() {
    return doctorList;
}

export function getDoctorByIdApiCall(idDoctor) {
    const doctor = doctorDetailsList.find(doctor => doctor._id === idDoctor)
    return doctor;
}