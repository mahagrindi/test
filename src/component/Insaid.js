import { FaFlag ,FaCalendarMinus , FaUser, FaUsers } from 'react-icons/fa';
import React, { Component } from 'react';


class Insaid extends Component {
  render () { 
    return (
<div id ="Cartss">
<diw class ="row">
<div clas ="col-md-2 c ">
<div class ="cadrs1">
     <div class= "icon">
     <FaFlag />
     </div>
     <div class =" title-Ic">
     tLeader <br /> in 10 countries
     </div>
     <div class ="text">
     Poland, Turkey, Spain, Italy,<br /> Czech Republic, Mexico, Brazil,<br/> Colombia, Argentina and Chile
     </div> </div>
</div>


<div clas ="col-md-2 c">
<div class ="cadrs2">
     <div class= "icon">
     <FaCalendarMinus />
     </div>
     <div class =" title-Ic">
     1.5 <br/>million appointments
     </div>
     <div class ="text">
     booked last month
     </div></div>
</div>
</diw>

<diw class ="row">
<div clas ="col-md-2 c">
<div class ="cadrs3">
     <div class= "icon">
    <FaUsers />
     </div>
     <div class =" title-Ic">
     30 million unique <br/>patients
     </div>
     <div class ="text">
     visit us every month
     </div>
     </div>
</div>
<div clas ="col-md-2 c">
<div class ="cadrs">
     <div class= "icon">
     <FaUser />
     </div>
     <div class =" title-Ic">
     2 million active <br/> doctors
     </div>
     <div class ="text">
     trust in our solutions
     </div>
</div></div>


</diw>

</div>



    );
  }
}

export default Insaid ;
  

