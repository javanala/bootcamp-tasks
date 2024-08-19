import ProjectsPage from "./ProjectsPage";

function ProjectTable({projects}) {
 
  return (
    <div className="project-table">
      <table>
        <thead>
          <tr className="table-title">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.title}</td>
              <td>{item.budget}</td>
              <td>{new Date(item.deadline).toLocaleDateString("fa-IR", {year:'numeric',month:'2-digit', day:'2-digit'})}</td>
              <td>
                <div className={`table-condition ${item.status}`}>{item.status === 'OPEN' ? 'باز': 'بسته' }</div>
              </td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;
