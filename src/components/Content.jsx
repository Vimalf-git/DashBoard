import React from 'react'
import TableCom from './TableCom';
import bellIconLogo from '../image/bell-icon.svg'

function Content() {
  const salesInfo = [
    {
      infoName: "Customer",
      placeholder: "Enter Customer Name"
    },
    {
      infoName: "Invoice ID",
      placeholder: "Enter Invoice Id"
    }, {
      infoName: "Start Date",
      placeholder: "Start Date"
    }, {
      infoName: "End Date",
      placeholder: "End Date"
    }
  ]
  // const salesInfoData = ["Customer", "Invoice ID", "Start Date", "End Date"];
  // const salesInfoFeild = ["Enter Customer Name", "Enter Invoice Id", "Start Date", "End Date"];
  const tableData = [
    {
      inVoice: "#AHGA68",
      inVoice_clr: "#0B63F8",
      date: "23/09/2023",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000"
    },
    {
      inVoice: "#AHGA68",
      inVoice_clr: "#0B63F8",
      date: "23/09/2023",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000"
    }, {
      inVoice: "#AHGA68",
      inVoice_clr: "#0B63F8",
      date: "23/09/2023",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000"
    }, {
      inVoice: "#AHGA68",
      inVoice_clr: "#0B63F8",
      date: "23/09/2023",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000"
    }, {
      inVoice: "#AHGA68",
      inVoice_clr: "#0B63F8",
      date: "23/09/2023",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000"
    }, {
      inVoice: "#AHGA68",
      inVoice_clr: "#0B63F8",
      date: "23/09/2023",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000"
    }, {
      inVoice: "#AHGA68",
      inVoice_clr: "#0B63F8",
      date: "23/09/2023",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000"
    }, {
      inVoice: "#AHGA68",
      inVoice_clr: "#0B63F8",
      date: "23/09/2023",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000"
    }, {
      inVoice: "#AHGA68",
      inVoice_clr: "#0B63F8",
      date: "23/09/2023",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000"
    }
  ]
  return (
    <>
      <div className='con_head'>
        <input type="email" className="form-control con-head-input" placeholder="Search" />

        <img src={bellIconLogo} />
      </div>
      {/* middle */}
      <div className='con-sales-info'>
        <div>
          <h4>Sales Information</h4>
        </div>

        <div className='con-detail-data '>
          {salesInfo.map((e, i) => {
            return (
              <form key={i} >
                <label >{e.infoName}
                <input className='form-control con-detail-input' type='text' placeholder={e.placeholder} />
                </label>
              </form>

            )
          })}
        </div>
      </div>

      {/* table */}
      <TableCom tableData={tableData} />
    </>
  )
}

export default Content