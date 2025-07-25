import React from "react";
import Event from './Event';
const Calendar = () => {
    return (
        <div className="Calendar">
                <table>
                    <thead>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </thead>
<tbody>
<tr>
  <td className="time">8am</td>
  <Event event='Dinner' color='green'/>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr><tr>
  <td className="time">9am</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr><tr>
  <td className="time">10am</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <Event event='Dinner' color='green'/>
  <td></td>
  <td></td>
</tr><tr>
  <td className="time">11am</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr><tr>
  <td className="time">12am</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr><tr>
  <td className="time">1pm</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr><tr>
  <td className="time">2pm</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr><tr>
  <td className="time">3pm</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr><tr>
  <td className="time">4pm</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr><tr>
  <td className="time">5pm</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
</tbody>
                </table>
            </div>
        
    )
}
export default Calendar;
// This is a simple Calendar component that can be used in a React application.~