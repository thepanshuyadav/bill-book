import {regex} from "./constants";

export const sanitizeCustomerData = (data) => {
    return data.map((customer) => {
        return {
            id: customer.Id,
            name: customer.Name,
            contact: customer.PhoneNumber,
            email: customer.Email,
            address: customer.Address,
            created_at: customer.CreatedAt
        }
    })
}

export const sanitizeItemData = (data) => {
    return data.map((item) => {
        return {
            id: item.Id,
            name: item.Name,
            description: item.Description,
            stock: item.Stock,
            amount: item.Price,
            created_at: item.CreatedAt
        }
    })
}

export const sanitizeInvoiceData = (data) => {
    return data.map((invoice) => {
        return {
            id: invoice.Id,
            reference_no: invoice.ReferenceNumber,
            customer: invoice.CustomerId,
            status: invoice.Status,
            amount: invoice.Amount,
            issued_at: invoice.IssueDate
        }
    })
}

export const structureCustomerResponseData = (data) => {
    return {
        id: data["Id"],
        name: data["Name"],
        contact: data["PhoneNumber"],
        email: data["Email"],
        address: data["Address"],
        created_at: data["CreatedAt"]
    }
}

export const structureCustomerRequestData = (formFields) => {
    return {
        "name" : formFields.name,
        "email" : formFields.email,
        "phone_number" : formFields.contact,
        "address" : formFields.address
    }
}

export const validateCustomerFields = (customerFields) => {
    return regex.name.test(customerFields.name) &&
        regex.email.test(customerFields.email) &&
        regex.name.test(customerFields.address) &&
        regex.phone.test(customerFields.phone_number)
}
export const validateItemFields = (itemFields) => {
    return regex.name.test(itemFields.name) &&
        regex.name.test(itemFields.description) &&
        regex.number.test(itemFields.stock) &&
        regex.number.test(itemFields.amount)
}

export const structureItemResponseData = (data) => {
    return {
        id: data["Id"],
        name: data["Name"],
        description: data["Description"],
        stock: data["Stock"],
        amount: data["Price"],
        created_at: data["CreatedAt"]
    }
}

export const structureItemRequestData = (formFields) => {
    return {
        "name" : formFields.name,
        "description": formFields.description,
        "stock": formFields.stock,
        "price": formFields.amount,
        "isActive": true
    }
}