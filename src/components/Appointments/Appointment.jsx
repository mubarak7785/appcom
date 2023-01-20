import "./Appointment.css";

export const Appointment = () => {
  return (
    <div>
      <div className="main-div2">
        <div className="sidebar2">
          <div>
            <img className="first" src="./Vector.png" alt="" />
            <img className="sec" src="./Queu.png" alt="" />
            <img className="sec" src="./cal.png" alt="" />
            <img className="sec" src="./Rupee.png" alt="" />
            <img className="sec" src="./bill.png" alt="" />
            <img className="sec" src="./setting.png" alt="" />
          </div>
        </div>
        <div>
        <div className="header2">
          <p>Appointments</p>
          <p>List of booked appointments</p>
          <hr />
          <div className="con-div">
            <div className="row1">
                <div> <p> ORDER ID</p></div>
                <div> <p>PATIENT</p> </div>
                <div> <p>CONSULTATION</p>  </div>
                <div> <p> TEAM</p></div>
                <div><p>DOCTOR</p></div>
                <div><p>SLOT</p></div>
                <div> <p>SATUS</p> </div>
                <div><p>INVOICE</p></div>
                <div><p>ACTION</p></div>   
            </div>
            <div className="row2">
                <div> <p> <span> 2422562</span> </p></div>
                <div> <p>Risha Mahin <br /><br />26,F</p> </div>
                <div> <p> <span> Video</span><br /><br /> First Consultation</p></div>
                <div> <p> </p></div>
                <div><p>Anil Kumar</p></div>
                <div><p>Jul 3, 2021 <br /><br />8:53 AM</p></div>
                <div> <p className="border1">Cancelled</p> </div>
                <div><p className="border1">Refunded</p></div>
                <div><h2 className="icon">⋮</h2></div>   
            </div>
            <div className="row2">
                <div> <p> <span> 2425674</span> </p></div>
                <div> <p>Raju K <br /><br />32,M</p> </div>
                <div> <p> <span> Video</span><br /><br /> Follow-Up</p></div>
                <div> <p>Medical Camp </p></div>
                <div><p>Greg Ferguson</p></div>
                <div><p>Jul 3, 2021 <br /><br />8:53 AM</p></div>
                <div> <p className="border1">No Show</p> </div>
                <div><p className="border1">Unpaid</p></div>
                <div><h2 className="icon">⋮</h2></div>   
            </div>
            <div className="row2">
                <div> <p> <span> 2456778</span> </p></div>
                <div> <p>Prajeesh <br /><br />47,M</p> </div>
                <div> <p> Anytime Consult </p></div>
                <div> <p></p></div>
                <div><p>Pankaj Dhir</p></div>
                <div><p>Jul 3, 2021 <br /><br />8:53 AM</p></div>
                <div> <p className="border1">Completed</p> </div>
                <div><p className="border1">Paid</p></div>
                <div><h2 className="icon">⋮</h2></div>   
            </div>
            <div className="row2">
                <div> <p> <span> 2456751</span> </p></div>
                <div> <p>Nikita Gandhi<br /><br />29,F</p> </div>
                <div> <p> <span> Video</span><br /><br /> First Consultation</p></div>
                <div> <p>Medical Camp</p></div>
                <div><p>Sujata Mohan</p></div>
                <div><p>Jul 3, 2021 <br /><br />8:53 AM</p></div>
                <div> <p className="border1">Booked</p> </div>
                <div><p className="border1">Paid</p></div>
                <div><h2 className="icon">⋮</h2></div>   
            </div>
            <div className="row2">
                <div> <p> <span> 2456755</span> </p></div>
                <div> <p>Darshan Singh<br /><br />36,M</p> </div>
                <div> <p> <span> In-person</span><br /><br /> Second Opinion</p></div>
                <div> <p></p></div>
                <div><p>Ram Dayanand</p></div>
                <div><p>Jul 3, 2021 <br /><br />8:53 AM</p></div>
                <div> <p className="border1">Booked</p> </div>
                <div><p className="border1">Unpaid</p></div>
                <div><h2 className="icon">⋮</h2></div>   
            </div>
            <div className="row2">
                <div> <p> <span> 2421751</span> </p></div>
                <div> <p> Risha Mahin<br /><br />19,F</p> </div>
                <div> <p> <span> Video</span><br /><br /> First Consultation</p></div>
                <div> <p></p></div>
                <div><p>Prakash Jhanti</p></div>
                <div><p>Jul 3, 2021 <br /><br />8:53 AM</p></div>
                <div> <p className="border1">Completed</p> </div>
                <div><p className="border1">Paid</p></div>
                <div><h2 className="icon">⋮</h2></div>   
            </div>
          </div>
        </div>
       
      
        </div>
       
      </div>
    </div>
  );
};
