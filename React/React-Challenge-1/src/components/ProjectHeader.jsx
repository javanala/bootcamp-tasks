import { useState } from "react";

function ProjectHeader({ onSelectStatus, category, orderList,onSelectCategory, onSelectOrder}) {
  const [statusTab, setStatusTab] = useState("ALL");

  const handleActiveTab = (Tab) => {
    setStatusTab(Tab);
    console.log(Tab);
  };
  return (
    <div>
      <div className="project-header">
        <div className="header-title">لیست پروژه ها</div>
        <div className="header-filter">
          <div className="condition">
            <span className="condition-title">وضعیت</span>
            <div className="condition-list">
              <button
                className={`condition-list-item ${
                  statusTab === "ALL" ? "active" : ""
                }`}
                onClick={() => {
                  onSelectStatus("ALL");
                  handleActiveTab("ALL");
                }}
              >
                همه
              </button>
              <button
                className={`condition-list-item ${
                  statusTab === "OPEN" ? "active" : ""
                }`}
                onClick={() => {
                  onSelectStatus("OPEN");
                  handleActiveTab("OPEN");
                }}
              >
                باز
              </button>
              <button
                className={`condition-list-item ${
                  statusTab === "CLOSED" ? "active" : ""
                }`}
                onClick={() => {
                  onSelectStatus("CLOSED");
                  handleActiveTab("CLOSED");
                }}
              >
                بسته
              </button>
            </div>
          </div>
          <div>
            <select className="order-list" onChange={onSelectOrder}  name="" id="">
            <option value="مرتب سازی" >مرتب سازی</option>
              {orderList.map((item, index) => ( 
                
                <option key={index} value={item}>مرتب سازی ( {item})</option>
              ))}
              
            </select>
          </div>
          <div>
            <select className="classification-list" onChange={onSelectCategory} name="" id="">
              <option value="">دسته بندی (همه)</option>
              {category.map((item, index) => (
                <option key={index}  value={item.englishTitle}>{item.title}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;
