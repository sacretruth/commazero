jest.mock('./data.json')
import * as domain from './domain'


describe('Retrieve invoices by supplier', () => {

    test('will correctly retrieve invoices for matching supplier name', () => {

        const invoices = domain.retrieveInvoicesBySupplier('Aaa')
    
        expect(invoices.length).toBe(2)
    })

    test('will correctly retrieve invoices for partially matching supplier name', () => {

        const invoices = domain.retrieveInvoicesBySupplier('bbb')
    
        expect(invoices.length).toBe(3)
    })
    
    test('will gracefully handle unspecified supplier name', () => {
    
        const invoices = domain.retrieveInvoicesBySupplier()
    
        expect(invoices.length).toBe(0)
    })

})

describe('Retrieve invoices by amount', () => {

    test('will correctly retrieve invoices matching amount', () => {

        const invoices = domain.retrieveInvoicesByAmount(400)
    
        expect(invoices.length).toBe(1)
    })

    test('will correctly retrieve invoices less than amount', () => {

        const invoices = domain.retrieveInvoicesByAmount(520)
    
        expect(invoices.length).toBe(2)
    })
    
    test('will gracefully handle non numeric inputs', () => {
    
        const invoices = domain.retrieveInvoicesByAmount("1i")
    
        expect(invoices.length).toBe(0)
    })

})


