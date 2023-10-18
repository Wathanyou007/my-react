import React from "react";
import "./view.css";

const ShowComponent = ({showFormData,handleShowClick,save}) => {
    return (
        <div className="group">
        <h4>รายการข่าวประชาสัมพันธ์</h4>
        <form onSubmit={save}>
            <div className="input-group">
            <label>ชื่อเรื่อง</label>
            <input
                type="text"
                placeholder="ระบุชื่อรายการของคุณ"
                name="name"
                value={showFormData.name}
                onChange={handleShowClick}
            />
            </div>
            <div className="input-group">
            <label>เนื่อหา</label>
            <input
                type="text"
                placeholder="ระบุชื่อรายการของคุณ"
                name="date"
                value={showFormData.date}
                onChange={handleShowClick}
            />
            </div>
            <div className="input-group">
            <button type="submit">ปิด</button>
            
            </div>
        </form>
        </div>
    );
};
export default ShowComponent;
