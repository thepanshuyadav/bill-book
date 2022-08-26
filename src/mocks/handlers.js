import { rest } from 'msw'

export const handlers = [
    // Handles a GET /user request
    rest.get('http://127.0.0.1:8080/v1/customer/all', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    "Id": "32ad2a7c-cfc4-498c-9bb3-51cb72ea635b",
                    "Name": "Test 3",
                    "Email": "adam@karina.com",
                    "PhoneNumber": "2342342341",
                    "Address": "Somewhere",
                    "CreatedAt": 1660641972,
                    "UpdatedAt": 1660641972
                },
                {
                    "Id": "3962d7b4-3276-4214-8bdc-5b7baeff0323",
                    "Name": "Test 1",
                    "Email": "Sherwood@rosamond.me",
                    "PhoneNumber": "7510943758",
                    "Address": "Delhi, India",
                    "CreatedAt": 1660640621,
                    "UpdatedAt": 1660640621
                },
                {
                    "Id": "3f5603bb-7fdf-413c-ad8f-7b7577787f2a",
                    "Name": "Test 2",
                    "Email": "padberg@karina.com",
                    "PhoneNumber": "7510943758",
                    "Address": "Somewhere",
                    "CreatedAt": 1660641162,
                    "UpdatedAt": 1660641162
                },
                {
                    "Id": "63922265-3b7f-4443-87c8-514f47add149",
                    "Name": "Dummy User",
                    "Email": "test@user.com",
                    "PhoneNumber": "8967896711",
                    "Address": "Singapore",
                    "CreatedAt": 1661160873,
                    "UpdatedAt": 1661160873
                },
                {
                    "Id": "731298a0-ce3d-4c99-bd2d-dc24f1d6c707",
                    "Name": "Gaurav Kumar",
                    "Email": "gaurav.kumar@example.com",
                    "PhoneNumber": "9123456780",
                    "Address": "Home address",
                    "CreatedAt": 1660288545,
                    "UpdatedAt": 1660288545
                },
                {
                    "Id": "868b3226-ccb5-462c-ad79-356414c9c4f2",
                    "Name": "Kurtis Weissnat",
                    "Email": "Telly.Hoeger@billy.biz",
                    "PhoneNumber": "9876543210",
                    "Address": "McKenziehaven",
                    "CreatedAt": 1660640430,
                    "UpdatedAt": 1660640430
                },
                {
                    "Id": "a89c0aa5-07cb-4bf8-9588-5c4486a43a39",
                    "Name": "Test 4",
                    "Email": "brendon@karina.org",
                    "PhoneNumber": "4353453456",
                    "Address": "Japan",
                    "CreatedAt": 1660641842,
                    "UpdatedAt": 1660641842
                },
                {
                    "Id": "af6f8727-9844-4c23-b96a-971499fe56ed",
                    "Name": "Mrs. Dennis Schulist",
                    "Email": "Karley_Dach@jasper.info",
                    "PhoneNumber": "1234567890",
                    "Address": "South Elvis",
                    "CreatedAt": 1660640382,
                    "UpdatedAt": 1660640382
                },
                {
                    "Id": "bb455dfc-fbb6-441d-9bbe-da20596027b4",
                    "Name": "Deepanshu",
                    "Email": "deepanshu@gmail.com",
                    "PhoneNumber": "1234566541",
                    "Address": "Delhi, India",
                    "CreatedAt": 1660901283,
                    "UpdatedAt": 1660901283
                }
            ])
        )
    }),
    rest.post('http://127.0.0.1:8080/v1/customer/add', (req, res, ctx) => {
        // TODO: Validations
        return res(
            ctx.status(200),
            ctx.json(
                {
                    "Id": "bb455dfc-fbb6-441d-9bbe-da20596027t4",
                    "Name": "Test User 5",
                    "Email": "test_user@test.com",
                    "PhoneNumber": "1234567812",
                    "Address": "Some random address",
                    "CreatedAt": 1660901583,
                    "UpdatedAt": 1660901583
                })
        )
    })
]