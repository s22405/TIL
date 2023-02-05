import { willingOrganDonorList, willingOrganDonorDetailsList } from './willingOrganDonorApiMockData'

export function getWillingOrganDonorsApiCall() {
    return willingOrganDonorList;
}

export function getWillingOrganDonorByIdApiCall(idWillingOrganDonor) {
    const willingOrganDonor = willingOrganDonorDetailsList.find(willingOrganDonor => willingOrganDonor._id === idWillingOrganDonor)
    return willingOrganDonor;
}