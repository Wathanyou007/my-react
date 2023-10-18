
import React from 'react';
import './view.css';


const ViewComponent =({handleAddFormSubmit,handleAddFormChange})=>{
return(
    <div className="group">
            <h4>รายการข่าวประชาสัมพันธ์</h4>
            <form onSubmit={handleAddFormSubmit}>
                <div className="input-group">
                    <label>ชื่อเรื่อง</label>
                    <input type="text"
                    placeholder="ระบุชื่อรายการของคุณ" 
                    name="name" 
                    onChange = {handleAddFormChange}/>
                </div>
                <div className="input-group">
                    <label>เนื่อหา</label>
                    <input type="text" 
                    placeholder="ระบุชื่อรายการของคุณ" 
                    name="date" 
                    onChange = {handleAddFormChange}/>
                </div>
                <div className="input-group">
                    <button type="submit">บันทึก</button>
                    
                </div>
            </form>
        </div>
)
}
export default ViewComponent