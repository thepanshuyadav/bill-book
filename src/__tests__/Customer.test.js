import {act, fireEvent, render, screen} from "@testing-library/react"
import {Provider} from "react-redux"
import "@testing-library/jest-dom"
import store from "../store/store"
import CustomerList from "../views/customer/CustomerList"
import userEvent from "@testing-library/user-event"
import {Customer} from "../views/customer/Customer";


test("customer header", async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => render(
        <Provider store={store}>
            <Customer/>
        </Provider>));

    const header = screen.getByTestId("header")
    const heading = screen.getByTestId("heading")
    const button = screen.getByRole("button", {name: "Add customer"})

    expect(header).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    expect(header).toContainElement(heading)
    expect(header).toContainElement(button)

    expect(heading).toHaveTextContent("Customers")

    expect(button).toContainHTML('<p>Add customer</p>')
    expect(button).toContainElement(screen.getByTestId("AddIcon"))
})

test("add customer abandon", async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => render(
        <Provider store={store}>
            <Customer/>
        </Provider>));

    const button = screen.getByRole("button", {name: "Add customer"})
    userEvent.click(button)

    const closeButton = screen.getByRole("button", {name: "X"})
    const submit = screen.getByRole("button", {name: "Submit"})
    const modalBg = screen.getByTestId("modal")
    const form = screen.getByTestId("form")

    const inputName = screen.getByTestId("name")
    const inputEmail = screen.getByTestId("email")
    const inputPhone = screen.getByTestId("contact")
    const inputAddress = screen.getByTestId("address")

    expect(modalBg).toBeInTheDocument()
    expect(modalBg).toContainElement(form)
    expect(modalBg).toContainElement(closeButton)

    expect(form).toContainElement(inputName)
    expect(form).toContainElement(inputEmail)
    expect(form).toContainElement(inputPhone)
    expect(form).toContainElement(inputAddress)
    expect(form).toContainElement(submit)

    // Close form
    userEvent.click(closeButton)
    expect(form).not.toBeInTheDocument()
    expect(modalBg).not.toBeInTheDocument()

})

test("add customer valid", async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => render(
        <Provider store={store}>
            <Customer/>
        </Provider>));

    const button = screen.getByRole("button", {name: "Add customer"})
    userEvent.click(button)

    const submit = screen.getByRole("button", {name: "Submit"})
    const modalBg = screen.getByTestId("modal")
    const form = screen.getByTestId("form")

    const inputName = screen.getByTestId("name")
    const inputEmail = screen.getByTestId("email")
    const inputPhone = screen.getByTestId("contact")
    const inputAddress = screen.getByTestId("address")

    userEvent.type(inputName, "Test User")
    expect(inputName).toHaveValue("Test User")

    userEvent.type(inputPhone, "1234567812")
    expect(inputPhone).toHaveValue("1234567812")

    userEvent.type(inputAddress, "Some random address")
    expect(inputAddress).toHaveValue("Some random address")

    userEvent.type(inputEmail, "user@test.com")
    expect(inputEmail).toHaveValue("user@test.com")

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
        userEvent.click(submit)
    })

    // form closes and all customers including latest added are shown
    expect(form).not.toBeInTheDocument()
    expect(modalBg).not.toBeInTheDocument()

    const table = screen.getByRole("table")
    const tableDataRows = screen.getAllByTestId("data-row")

    expect(table).toBeInTheDocument()
    expect(tableDataRows).toHaveLength(10)
    tableDataRows.forEach((dataRow) => {
        expect(table).toContainElement(dataRow)
    })

})

test("add customer invalid", async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => render(
        <Provider store={store}>
            <Customer/>
        </Provider>));

    const button = screen.getByRole("button", {name: "Add customer"})
    userEvent.click(button)

    const submit = screen.getByRole("button", {name: "Submit"})
    const modalBg = screen.getByTestId("modal")
    const form = screen.getByTestId("form")

    const inputName = screen.getByTestId("name")
    const inputEmail = screen.getByTestId("email")
    const inputPhone = screen.getByTestId("contact")
    const inputAddress = screen.getByTestId("address")

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act (async () => {
        fireEvent.change(inputName, {
            target: {value: 'Test'},
        });
    })
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act (async () => {
        fireEvent.change(inputAddress, {
            target: {value: 'Some random address'},
        });
    })
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act (async () => {
        fireEvent.change(inputEmail, {
            target: {value: ''},
        });
    })
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act (async () => {
        fireEvent.change(inputPhone, {
            target: {value: '1234567812'},
        });
    })

    expect(screen.getByText("Invalid email address")).toBeInTheDocument();

    window.alert = () => "validation error"
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
        userEvent.click(submit)

        // TODO: console.error ; Error: Not implemented: window.alert
        // window.alert = () => "validation error"
    })

    expect(form).toBeInTheDocument()
    expect(modalBg).toBeInTheDocument()
})

test("customer data fetched", async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => render(
        <Provider store={store}>
            <CustomerList/>
        </Provider>));
    // Test all customers fetched and displayed
    const table = screen.getByRole("table")
    const tableDataRows = screen.getAllByTestId("data-row")

    const tableHeadingRow = screen.getByRole("row", {name: "Name Phone Email Address Created On"})

    expect(table).toBeInTheDocument()
    expect(table).toContainElement(tableHeadingRow)
    expect(tableDataRows).toHaveLength(9)
    tableDataRows.forEach((dataRow) => {
        expect(table).toContainElement(dataRow)
    })

    // Test pagination
    const paginationSelector = screen.getByTestId("pagination-count-selector")
    expect(paginationSelector).toHaveDisplayValue("All")
    expect(await screen.findByRole("option", {name: "2"})).toBeInTheDocument()
    expect(await screen.findByRole("option", {name: "5"})).toBeInTheDocument()
    expect(await screen.findByRole("option", {name: "10"})).toBeInTheDocument()
    expect(await screen.findByRole("option", {name: "50"})).toBeInTheDocument()
    expect(await screen.findByRole("option", {name: "100"})).toBeInTheDocument()

    userEvent.selectOptions(paginationSelector, "2");
    expect(paginationSelector).toHaveValue("2");
    let paginatedRowsDisplayed = screen.getAllByTestId("data-row")
    expect(paginatedRowsDisplayed).toHaveLength(2)

    userEvent.selectOptions(paginationSelector, "5");
    expect(paginationSelector).toHaveValue("5");
    paginatedRowsDisplayed = screen.getAllByTestId("data-row")
    expect(paginatedRowsDisplayed).toHaveLength(5)
})

test("customer search field", async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => render(
        <Provider store={store}>
            <CustomerList/>
        </Provider>));

    const select = screen.getByTestId("search-field-selector")
    const search = screen.getByRole("textbox")

    expect(select).toHaveDisplayValue("Name")
    expect(search).toHaveDisplayValue("")
    expect(await screen.findByRole("option", {name: "Name"})).toBeInTheDocument()
    expect(await screen.findByRole("option", {name: "Phone"})).toBeInTheDocument()
    expect(await screen.findByRole("option", {name: "Email"})).toBeInTheDocument()

    userEvent.selectOptions(select, "Name");
    expect(select).toHaveValue("name");
})

test("customer search by name", async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => render(
        <Provider store={store}>
            <CustomerList/>
        </Provider>));

    const select = screen.getByTestId("search-field-selector")
    const search = screen.getByRole("textbox")

    userEvent.selectOptions(select, "Name");
    expect(select).toHaveValue("name");

    userEvent.type(search, "Test")
    expect(search).toHaveValue("Test")

    const table = screen.getByRole("table")
    const tableDataRows = screen.getAllByTestId("data-row")

    expect(table).toBeInTheDocument()
    expect(tableDataRows).toHaveLength(4)
    // eslint-disable-next-line testing-library/no-node-access
    const tableDataCells = table.getElementsByClassName("name")
    expect(tableDataCells).toHaveLength(4)
})

test("customer search by phone", async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => render(
        <Provider store={store}>
            <CustomerList/>
        </Provider>));

    const select = screen.getByTestId("search-field-selector")
    const search = screen.getByRole("textbox")

    userEvent.selectOptions(select, "Phone")
    expect(select).toHaveValue("contact")

    userEvent.type(search, "123")
    expect(search).toHaveValue("123")

    const table = screen.getByRole("table")
    expect(table).toBeInTheDocument()

    // eslint-disable-next-line testing-library/no-node-access
    const tableDataCells = table.getElementsByClassName("contact")
    expect(tableDataCells).toHaveLength(3)
})

test("customer search by email", async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => render(
        <Provider store={store}>
            <CustomerList/>
        </Provider>));

    const select = screen.getByTestId("search-field-selector")
    const search = screen.getByRole("textbox")

    userEvent.selectOptions(select, "Email");
    expect(select).toHaveValue("email");

    userEvent.type(search, "karina")
    expect(search).toHaveValue("karina")

    const table = screen.getByRole("table")


    expect(table).toBeInTheDocument()

    // eslint-disable-next-line testing-library/no-node-access
    const tableDataCells = table.getElementsByClassName("email")
    expect(tableDataCells).toHaveLength(3)
})

test("customer search data absent", async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => render(
        <Provider store={store}>
            <CustomerList/>
        </Provider>));

    const select = screen.getByTestId("search-field-selector")
    const search = screen.getByRole("textbox")

    userEvent.selectOptions(select, "Name");
    expect(select).toHaveValue("name");

    userEvent.type(search, "god")
    expect(search).toHaveValue("god")
    const noDataHeading = screen.getByRole("heading", {level: 2})
    expect(noDataHeading).toBeInTheDocument()
    expect(noDataHeading).toHaveTextContent("No data")

    // Table absent
    const table = screen.queryByRole("table")
    expect(table).toBeNull()
})