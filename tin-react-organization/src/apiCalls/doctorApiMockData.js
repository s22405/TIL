// TODO check if you can set it to null like this

export const doctorList = [
    {
        "_id": 1,
        "name": "BarryTheChopper",
        "dateJoin": "5500-04-01",
        "dateLeave": "5500-04-10",
    }
]

export const doctorDetailsList = [
    {
        "_id": 1,
        "name": "BarryTheChopper",
        "dateJoin": "5500-04-01T00:00:00.000Z",
        "dateLeave": "5500-04-10T00:00:00.000Z",
        "operations": [
            {
                "_id": 1,
                "idWillingOrganDonor": 1,
                "idDoctor": 1,
                "idOrgan": 1,
                "successful": true,
                "bedNumber": 1,
                "operationTimestamp": '5500-04-05T00:00:00.000Z',
                "willingOrganDonor": {
                    "_id": 1,
                    "name": "Jonathan Mother",
                    "cellNumber": 1,
                    "patientFrom": "5500-04-05T00:00:00.000Z",
                    "patientTill": "5500-04-06T00:00:00.000Z",
                },
                "organ": {
                    "_id": 1,
                    "name": "Heart",
                    "price": "99.99",
                },
            }
        ]
    }
]