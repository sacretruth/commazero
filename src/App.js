import { useState } from 'react';
import { companies, retrieveInvoicesByAmount, retrieveInvoicesBySupplier } from './domain'

function App() {
  const [selectedCompanyName, setSelectedCompanyName] = useState("")
  const [selectedAmount, setSelectedAmount] = useState("")

  const shownInvoices = selectedAmount > 0 ? retrieveInvoicesByAmount(selectedAmount) : retrieveInvoicesBySupplier(selectedCompanyName)
  return (
    <div className="App">
      <input 
        placeholder="Filter by amount" 
        type="number"
        value={selectedAmount}
        onChange={e => { 
          setSelectedCompanyName(""); 
          setSelectedAmount(e.target.value);
      }}/>

      <div>
        <select 
          value={selectedCompanyName} 
          onChange={e => {
            setSelectedAmount("")
            setSelectedCompanyName(e.target.value);
          }}>
          <option value="">Filter by company name</option>

          {companies().map(company => (
            <option key={company.id} value={company.name}>
              {company.name} - {company.id}
            </option>
          ))}

        </select>
      </div>      

      <table>
        <thead>
          <tr>
            <th>
              ID
            </th>
            <th>
              Amount
            </th>
            <th>
              Due date
            </th>
            <th>
              Supplier ID
            </th>
          </tr>
        </thead>
        <tbody>
          {shownInvoices.map(invoice => (
            <tr key={invoice.id}>
              <td>
                {invoice.id}
              </td>
              <td>
                {invoice.amount}
              </td>
              <td>
                {invoice.dueDate}
              </td>
              <td>
                {invoice.supplierId}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
