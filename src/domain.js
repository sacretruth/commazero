import data from './data.json'

/*
- one function that given the name of the supplier returns all the invoices
- one function that given an amount of money returns an optimal list of invoices that can be paid with that amount of money
 */

export const companies = () => data.companies

export const invoices = () => data.invoices

export const retrieveInvoicesBySupplier = function(name) {
    if(!name) 
        return [];

    const allCompanies = 
        companies()
            .filter(company => company.name.toLowerCase().includes(name.toLowerCase()))

    if(!allCompanies.length)
        return []
    
    return allCompanies
                .flatMap(company => 
                        invoices()
                            .filter(invoice => invoice.supplierId === company.id)
                    )
}

export const retrieveInvoicesByAmount = function(amount) {
    const cleanedAmount = Number(amount)

    if(isNaN(cleanedAmount))
        return []
    
    return invoices().filter(invoice => Number(invoice.amount) <= cleanedAmount)
}