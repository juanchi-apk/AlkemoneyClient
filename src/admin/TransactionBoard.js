import React from "react";


export default function TransactionBoard({transactions}){
    return(
        <div>
           <table className="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">Transaction</th>
      <th scope="col">Amount</th>
      <th scope="col">Type</th>
      <th scope="col">Details</th>
    </tr>
  </thead>
  <tbody>
      {
          transactions.map(element => {
            console.log(element.id_transaction)
            let aux;
            let transactionClass;
            if (element.type===0){
                aux = "Income"
                transactionClass= "table-success"
            }else{
                aux = "Outcome"
                transactionClass= "table-danger"

            }
               return (
                <tr className = {transactionClass} key={element.id_transaction}>
                <th  scope="row">{element.id_transaction}</th>
                <td>{element.amount}</td>
                <td>{aux}</td>
                <td>{element.details}</td>
                </tr>
              )
          })
      }
    
  </tbody>
</table>
        </div>
    )

}