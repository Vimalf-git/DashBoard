import React from 'react'
import List from './List'
import dashboradLogo from '../image/dashboard.svg'
import labTestLogo from '../image/labtest.svg'
import appointment from '../image/appoinment.svg'
import medicineOrder from '../image/medicineOrder.svg'
import messageLogo from '../image/sms.svg'
import paymentLogo from '../image/payment.svg'
import settingLogo from '../image/setting.svg'
import helpLogo from '../image/Question.svg'
function Side() {
    const data = [
        {
            tittle: "Dashboard",
            color: "#0B63F8",
            img:dashboradLogo
        }, {
            tittle: "Lab Test",
            color: "#131313",
            img: labTestLogo
        }, {
            tittle: "Appointment",
            color: "#131313",
            img: appointment
        }, {
            tittle: "Medicine Order",
            color: "#131313",
            img:medicineOrder
        }, {
            tittle: "Message",
            color: "#131313",
            img: messageLogo
        }, {
            tittle: "Payment",
            color: "#131313",
            img: paymentLogo

        }, {
            tittle: "Settings",
            color: "#131313",
            img: settingLogo
        },
        {
            tittle: "Help",
            color: "#131313",
            img: helpLogo
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