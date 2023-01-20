import "./Dashbord.css";

export const Dashbord = () => {
  return (
    <div className="main-div">
      <div className="sidebar">
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
        <div className="header">
          <p>Welcome Anil Kumar</p>
          <p>Cardiology</p>
        </div>
        <div className="content">
          <div className="headerbar">
            <img src="./headerbar.png" alt="" />
          </div>
          <div className="headerbar2">
            <div>
              <p>Appointments</p>
              <p>54</p>
            </div>
            <div>
              <p>EMR Finalised</p>
              <p>47</p>
            </div>
            <div>
              <p>Patient Registrations</p>
              <p>120</p>
            </div>
            <div>
              <p>KR4ALL Visits</p>
              <p>30</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <div className="fone">
                <p>Appointments</p>
                <img src="./question.png" alt="" />
              </div>
              <hr />
              <div className="ftwo">
                <img src="./app-con.png" width="100%" height="100%" alt="" />
              </div>
              <hr />
              <div className="fthree">
                <p>View all Appointments</p>
              </div>
            </div>
            <div>
              <div className="sone">
                <p>Schedule</p>
                <img src="./question.png" alt="" />
              </div>
              <hr />
              <div className="stwo">
                <img src="./sec-con.png" width="100%" height="100%" alt="" />
              </div>
              <hr />
              <div className="sthree">
                <p>View all Appointments</p>
              </div>
            </div>
          </div>
          <div className="graph">
            <img src="./graph.png"  width="100%" height="100%" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
