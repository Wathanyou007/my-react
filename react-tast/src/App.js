
import './App.css';
import { Fragment, useState } from 'react';
import data from './data.json';
import './component/form.css';
import ReadRow from './component/Read';
import Editable from './component/EditabelRow';
import ViewComponent from './component/view';
import { nanoid } from 'nanoid'
//import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { useReducer } from 'react';
import ShowComponent from './component/view';

const App = () => {
  const [news,setNews] = useState(data)
  const [addFormData, setAddFormData]= useState({
        id:"",
        name:"",
        data:"",
  });
  const [editFormData, setEditFormData]= useState({
        id:"",
        name:"",
        data:"",
  })
  const [showFormData, setShowFormData]= useState({
    id:"",
    name:"",
    data:"",
})
  const[editData,setEditData] = useState(null);
      
  const handleAddFormChange = (event) =>{
          event.preventDefault();
          const fieldName = event.target.getAttribute("name" );
          const fieldValue = event.target.value;
          const newsFormData = {...addFormData};
          newsFormData[fieldName] = fieldValue;

          setAddFormData(newsFormData)
  };

  const handleEditFormChange = (event) => {
          event.preventDefault();
          const fieldName = event.target.getAttribute("name" );
          const fieldValue = event.target.value;

          const newFormData = {...editFormData};
          newFormData[fieldName] = fieldValue;
          setEditFormData(newFormData)
  }
        const handleEditClick = (event,newRow) =>{
        event.preventDefault();
        setEditData(newRow.id)
        const formValue = {
                name: newRow. name,
                date: newRow. date,
        }
        setEditFormData (formValue)
      };
////////////////////////////////////////////////////////////////
    
        const handleShowFormChange = (event) => {
          event.preventDefault();

          const fieldName = event.target.getAttribute("name");
          const fieldValue = event.target.value;

          const newFormData = {...showFormData};
          newFormData[fieldName] = fieldValue;
          setShowFormData(newFormData)
          console.log({newFormData})
          
        }
        const handleShowClick = (event,newRow) =>{
          event.preventDefault();
          setEditData(newRow.id)
          const formValue = {
                  name: newRow. name,
                  date: newRow. date,
          }
          setShowFormData (formValue)
        };

      const handleAddFormSubmit = (event) =>{
          event.preventDefault();
          const NewContent ={
              id:nanoid(),
              name: addFormData. name,
              date: addFormData. date,
          };
          const newContents =[...news,NewContent]
          setNews(newContents)
    };


    const save = (event) => {
      event.preventDefault();
      const editedContent ={
              id:editData,
              name: editFormData. name,
              date: editFormData. date,
      }

      const newContents = [...news];
      const index = news.findIndex((news)=>news.id === editData)
      newContents[index] = editedContent

      setNews(newContents)
      setEditData(null)
    };

    const handleDeleteClick = (editData) => {
      const newContents =[...news]
      const index = news.findIndex((news)=>news.id === editData)
      newContents.splice(index,1);
      
      setNews(newContents)
  };


  
    const [showReport,setShowReport]= useState(false)
    const reducer = (state,action)=>{
      switch(action.type) {
        case "SHOW":
          return setShowReport(true)
        case "HIDE":
          return setShowReport(false)
      }
    }
    const [result,dispatch]= useReducer(reducer,showReport)
    
    const [show,setShow]= useState(false)
    const reducers = (state,action)=>{
      switch(action.type) {
        case "SHOW":
          return setShow(true)
        case "HIDE":
          return setShow(false)
      }
    }
    const [results,dispatchs]= useReducer(reducers,show)

  return (

    <div className="App">
            <h2>ข่าวประชาสัมพันธ์</h2>
            
              <p>
                <button onClick={()=>dispatch({type:"SHOW"})} 
                className='add' >
                  <img src='https://cdn-icons-png.flaticon.com/256/992/992651.png' 
                  height="15px" width="15px" /> 
                  เพิ่มข่าว</button>
              </p>
            <h4>รายการข่าวประชาสัมพันธ์</h4>
            
          <form onSubmit={save}>
          <table class="table">
                <thead>
                <tr>
                    <th >ลำดับ</th>
                    <th >ชื่อเรื่อง</th>
                    <th >วันที่สร้าง</th>
                    <th >จัดการ</th>
                </tr>
                </thead>
                <tbody>
                    {news.map((newRow) => (
                        <Fragment>
                          {editData === newRow.id ? (
                          <Editable 
                          editFormData={editFormData } 
                          
                          handleEditFormChange={handleEditFormChange}
                          /> 
                          ):(
                            <ReadRow 
                            newRow={newRow}
                            
                            handleEditClick={handleEditClick}
                            handleDeleteClick={handleDeleteClick }
                            />
                          )
                          }
                          
                        </Fragment>
                    ))}
                </tbody>
            </table>
            </form>

              {show && <ShowComponent 
              showFormData={showFormData}
              handleShowClick={handleShowClick}
              handleShowFormChange={handleShowFormChange}
              
              />
              }

              {showReport && <ViewComponent 
                
                addFormData={addFormData}  
                handleAddFormChange={handleAddFormChange}
                handleAddFormSubmit={handleAddFormSubmit}/>
                }
    </div>
  );
}
export default App;
