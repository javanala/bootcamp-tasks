import { useEffect, useState } from "react";
import "./App.css";
import ProjectHeader from "./components/ProjectHeader";
import ProjectTable from "./components/ProjectTable";

const projects = [
  {
    _id: 1,
    title: "طراحی اپلیکیشن سفر آنلاین",
    description: "طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین",
    status: "CLOSED",
    category: {
      id: 1,
      title: "طراحی UI/UX",
      englishTitle: "design-ui/ux",
    },
    budget: 10000,
    tags: ["Ui/UX", "Figma"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 2,
    title: " توسعه سایت فروشگاهی",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "OPEN",
    category: {
      id: 2,
      title: "  web برنامه نویسی وب ",
      englishTitle: "web development",
    },
    budget: 50000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-12-25T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 3,
    title: " UI/UX طراحی اپلیکیشن سفر آنلاین",
    description: "طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین",
    status: "OPEN",
    category: {
      id: 3,
      title: "طراحی UI/UX",
      englishTitle: "design-ui/ux",
    },
    budget: 10000,
    tags: ["Ui/UX", "Figma"],
    deadline: "2022-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 4,
    title: "2 توسعه سایت فروشگاهی",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "CLOSED",
    category: {
      id: 4,
      title: "برنامه نویسی ",
      englishTitle: "web development",
    },
    budget: 50000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2021-12-25T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 5, // or any other unique ID
    title: "طراحی سایت آموزشی",
    description: "یک سایت آموزشی کامل با پنل ادمین و امکانات آموزشی",
    status: "OPEN", // or "IN_PROGRESS", "COMPLETED", etc.
    category: {
      id: 5, // or any other unique category ID
      title: "طراحی وب",
      englishTitle: "web design",
    },
    budget: 60000, // adjust as necessary
    tags: ["HTML", "CSS", "JavaScript", "online education"],
    deadline: "2024-12-31T23:59:59.999Z", // adjust as necessary
    createdAt: "2024-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  //  خودتون میتونید دیتاهای دیگه رو اضافه کنید.
];

const orderList = ["جدیدترین", "قدیمی ترین"];

function App() {
  const [isShow, setIsShow] = useState(false);
  const [category, setCategory] = useState([]);
  const [projectlist, setProjectList] = useState(projects);
  const [projectStatus, setProjectStatus] = useState(projectlist);
  const [projectCat, setProjectCat] = useState(projectlist);
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [order, setOrder] = useState("");
  console.log(isShow);

  const handleSelectedStatus = (status) => {
    setStatusFilter(status);
  };

  const handelSelectedCategory = (e) => {
    // console.log(e.target.value);

    const selectedCategory = e.target.value;
    setCategoryFilter(selectedCategory);
  };

  const handelSelectedOrder = (e) => {
    const selectedOrder = e.target.value;
    // Update state and filter projects in one go
    setOrder(selectedOrder);

    // console.log("terget order",e.target.value);
    // console.log("order b",order);
    // setOrder(()=>e.target.value);
    // console.log("order a",order);
    // filterProjects(statusFilter, categoryFilter, order);
  };

  const filterProjects = (status, category, order) => {
    let filtered = projects;

    if (status !== "ALL") {
      console.log("cv", status);
      filtered = filtered.filter((item) => item.status === status);
    }

    if (category) {
      filtered = filtered.filter(
        (item) => item.category.englishTitle === category
      );
    }

    if (order) {
      console.log("Sorting by order:", filtered);
      // filtered = filtered.filter((item) => item.status === status);
      if (order === "جدیدترین") {
        console.log(order);
        // Sort by newest (assuming 'deadline' is a date string)
        filtered = filtered.sort(
          (a, b) => new Date(b.deadline) - new Date(a.deadline)
        );
      } else if (order === "قدیمی ترین") {
        // Sort by oldest
        filtered = filtered.sort(
          (a, b) => new Date(a.deadline) - new Date(b.deadline)
        );
      } else if (order === "مرتب سازی") {
        // Sort by oldest
        filtered = filtered.sort((a, b) => a._id - b._id);
      }
      filtered = filtered.filter((item) => true);
    }

    setProjectList(filtered);
  };

  useEffect(() => {
    filterProjects(statusFilter, categoryFilter, order);
  }, [statusFilter, categoryFilter, order]);

  useEffect(() => {
    if (projects && projects.length > 0) {
      const categories = projects.map((project) => project.category);

      const categorie = categories.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.title === item.title)
      );

      setCategory(categorie);
      console.log(categorie); // Log the unique categories
    } else {
      console.log("Projects are not defined or empty.");
    }
  }, [projects]); // Add `projects` to the dependency array

  useEffect(() => {
    console.log(category); // Log the updated category
  }, [category]);

  return (
    <div className="app">
      <Main isShow={isShow} setIsShow={setIsShow}>
        <div>
          <ProjectHeader
            onSelectStatus={handleSelectedStatus}
            onSelectCategory={handelSelectedCategory}
            onSelectOrder={handelSelectedOrder}
            category={category}
            orderList={orderList}
          />
          <ProjectTable projects={projectlist} />
        </div>
      </Main>
    </div>
  );
}

export default App;

function Main({ isShow, setIsShow, children }) {
  return isShow ? (
    <div>{children}</div>
  ) : (
    <div>
      <h1 className="text-3xl title ">لیست پروژه ها</h1>
      <button className="btn-project-list" onClick={() => setIsShow(!isShow)}>
        نشان دادن پروژه ها
      </button>
    </div>
  );
}
