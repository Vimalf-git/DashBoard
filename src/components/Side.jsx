import React from 'react'
import List from './List'
import dashboradLogo from '../image/dashboard.svg'
function Side() {
    const data = [
        {
            tittle: "Dashboard",
            color: "#0B63F8",
            img:dashboradLogo
        }, {
            tittle: "Lab Test",
            color: "#131313",
            img: "src/image/labtest.svg"
        }, {
            tittle: "Appointment",
            color: "#131313",
            img: "./src/image/appoinment.svg"
        }, {
            tittle: "Medicine Order",
            color: "#131313",
            img: "src/image/medicineOrder.svg"
        }, {
            tittle: "Message",
            color: "#131313",
            img: "src/image/sms.svg"
        }, {
            tittle: "Payment",
            color: "#131313",
            img: "../src/image/payment.svg"

        }, {
            tittle: "Settings",
            color: "#131313",
            img: "src/image/setting.svg"
        },
        {
            tittle: "Help",
            color: "#131313",
            img: "src/image/Question.svg"
        },
    ]
    return (
        <>
            <div className='tittle'>
                <h4 className='tittle-con' style={{color:'#013CC6'}}>Medico Sales</h4>
            </div>

            <div className='side-data'>
                    {
                        <List data={data} />
                    }
            </div>



        </>
    )
}

export default Side