import React from 'react'
import './Table.css'
function Table({Data}) {
    if(Data == ""){
        var Id = "";
        var Name = "";
        var Bg = "";
    }
    else {
        var Name = "Name";
        var Bg = "Blood Group";
        var contact ="Mobile Number"
    }
  return (
    <>
    <table>
        <tbody>
            <tr>
                <th>{Name}</th>
                <th>{Bg}</th>
                <th>{contact}</th>
            </tr>
                {
                    Data.map((item) => (
                        <tr>
                            <td>{item.Name}</td>
                            <td>{item.BG}</td>
                            <td>{item.mb}</td>
                        </tr>
                    ))
                }
        </tbody>
    </table>
    <img src="/assest/event/blooddonation.jpg" alt="" />
    </>
  )
}

export default Table
