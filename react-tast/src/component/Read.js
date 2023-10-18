import React, { useState } from "react"
import ShowComponent from "./show"

const ReadRow = ({ newRow,handleEditClick,handleDeleteClick,handleShowClick,show,dispatch}) =>{
// const [count,setCount] = useState(0)
    return(
        // <div className="group">
        //         <h4>รายการข่าวประชาสัมพันธ์</h4>
        //         <form onSubmit={handleEditFormChange}>
        //             <div className="input-group">
        //                 <label>ชื่อเรื่อง</label>
        //                 <input type="text"
        //                 placeholder="ระบุชื่อรายการของคุณ" 
        //                 name="name" 
        //                 value={editFormData.name}handleEditFormChange/>
        //             </div>
        //             <div className="input-group">
        //                 <label>เนื่อหา</label>
        //                 <input type="text" 
        //                 placeholder="ระบุชื่อรายการของคุณ" 
        //                 name="date" 
        //                 value={editFormData.date}handleEditFormChange/>
        //             </div>
        //             <div className="input-group">
        //                 <button type="submit">ปิด</button>
        //             </div>
        //         </form>
        //     </div>
        <tr>
            <td>{newRow.id}</td>
            <td>{newRow.name}</td>
            <td>{newRow.date}</td>
            <td>
            <button className='view'>
                <img src='https://as2.ftcdn.net/v2/jpg/02/08/74/43/1000_F_208744384_gSh2TR7wByIu81nYR0k8OToiieDcIBMp.jpg' 
                height="10px" 
                width="10px" 
                onClick={(event)=>handleShowClick (event,newRow)}/>
                </button> 
            <button className='edit'> 
            <img src='https://cdn-icons-png.flaticon.com/256/1828/1828270.png' 
            height="10px" 
            width="10px" 
            onClick={(event)=>handleEditClick (event,newRow)}/>
            </button> 
            <button className='delete'>
                <img src='https://cdn-icons-png.flaticon.com/256/6861/6861362.png' 
                height="10px" width="10px"
                onClick={()=>handleDeleteClick (newRow.id)}     /> 
                </button> 
            </td>
        </tr>                  
    )   
                
}
export default ReadRow

