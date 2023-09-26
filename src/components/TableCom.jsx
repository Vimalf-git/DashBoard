import React from 'react'
import { Table } from 'react-bootstrap';

function TableCom({ tableData }) {
    return (
        <>
        <div className='table_data'>
        <Table >
                    <thead>
                        <tr>
                            <th>
                                <input type='checkbox' />
                            </th>
                            <th>Invoice ID</th>
                            <th>Date</th>
                            <th>Customer</th>
                            <th>Amount</th>
                            <th>Paid Amount</th>
                            <th>Due</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((e, i) => {
                                return (
                                    <tr key={i}>
                                        <td><input type='checkbox' />
                                        </td>
                                        <td style={{color:e.inVoice_clr}}>{e.inVoice}</td>
                                        <td>{e.date}</td>
                                        <td>{e.customer}</td>
                                        <td>{e.payableAmount}</td>
                                        <td>{e.paidAmount}</td>
                                        <td>{e.due}</td>
                                    </tr>)
                            })}
                    </tbody>
                </Table>
        </div>
                
        </>
    )
}

export default TableCom