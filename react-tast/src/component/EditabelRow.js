import React from 'react';
const Editable = ({editFormData,handleEditFormChange}) =>{
    return(
        <tr>
            <td>
                
            </td>
            <td>
                <input type="text"
                required = "required"
                name = "name"
                value={editFormData.name}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input type="text"
                required = "required"
                name = "date"
                value={editFormData.date}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button >บันทึก</button> 
            </td>
        </tr>
    //     <div className="group">
    //             <h4>รายการข่าวประชาสัมพันธ์</h4>
    //             <form onSubmit={save}>
    //                 <div className="input-group">
    //                     <label>ชื่อเรื่อง</label>
    //                     <input type="text"
    //                     placeholder="ระบุชื่อรายการของคุณ" 
    //                     name="name" 
    //                     value={editFormData.name}
    //                     onChange={handleEditFormChange}/>
    //                 </div>
    //                 <div className="input-group">
    //                     <label>เนื่อหา</label>
    //                     <input type="text" 
    //                     placeholder="ระบุชื่อรายการของคุณ" 
    //                     name="date" 
    //                     value={editFormData.date}
    //                     onChange={handleEditFormChange}/>
    //                 </div>
    //                 <div className="input-group">
    //                     <button type="submit">ปิด</button>
    //                 </div>
    //             </form>
    // </div>
    )
}
export default Editable