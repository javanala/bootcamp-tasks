// http://localhost:3000/transactions
const searchInput = document.querySelector(".header-search");
const searchIcon = document.querySelector(".fa-magnifying-glass");
const transactionTable = document.querySelector(".transactions-table");
const transactionTableC = document.querySelector(".transactin-table_contents");
const btn = document.querySelector("button");
const inputContainer = document.querySelector(".input-container");
const transactions = document.querySelector(".transactions");
const selectPrice = document.querySelector(".price-select");
const selectDate = document.querySelector(".date-select");
// const b = document.querySelector(".select")

// const select = document.getElementById(".select");
const selectArrow = document.querySelector(".select-arrow");
const selectArrowD = document.querySelector(".select-arrowd");

let allProductsdata = [];

const filters = {
  searchItems: "",
};

document.addEventListener("DOMContentLoaded", () => {
  btn.addEventListener("click", () => {
    transactions.classList.remove("hidden");
    btn.classList.add("hidden");
    inputContainer.classList.remove("hidden");

    axios
      .get("http://localhost:3000/transactions")
      .then((res) => {
        allProductsdata = res.data;

        // render products un dome
        renderProducts(res.data, filters);
      })
      .catch((err) => console.log(err));
  });
});

// http://localhost:3000/transactions?refId_like=14
// http://localhost:3000/transactions?sort=price&_order=asc
// sort=price&_order=asc

function renderProducts(_products, _filters) {
  //   const filteredProducts = _products.filter((p) => {
  //     console.log(p.refId);
  //     console.log(_filters.searchItems);
  //     return p.refId.toString().includes(_filters.searchItems);
  //   });
  //   console.log(filteredProducts);
  transactionTableC.innerHTML = "";
  _products.forEach((item) => {
    //create

    const productsDiv = document.createElement("div");

    productsDiv.classList.add("transactin-table_content");

    productsDiv.innerHTML = ` <div class="transaction-table_crow">${
      item.id
    }</div>
              <div class="transaction-table_ctype ${
                item.type == "افزایش اعتبار" ? "green" : "red"
              }">${item.type}</div>
              <div class="transaction-table_cprice">${item.price}</div>
              <div class="transaction-table_ccode">${item.refId}</div>
              <div class="transaction-table_cdate">${new Date(
                item.date
              ).toLocaleString("fa", {
                dateStyle: "short",
              })}&nbsp ساعت &nbsp${new Date(item.date).toLocaleString("fa", {
      timeStyle: "short",
    })}</div>`;
    //content
    //append to products
    transactionTableC.appendChild(productsDiv);
  });

  searchIcon.addEventListener("click", (e) => {
    console.log(searchInput.value);
    filters.searchItems = searchInput.value;
    axios
      .get(`http://localhost:3000/transactions?refId_like=${searchInput.value}`)
      .then((res) => {
        allProductsdata = res.data;

        // render products un dome
        renderProducts(res.data, filters);
      })
      .catch((err) => console.log(err));
  });
}

selectPrice.addEventListener("change", sortPrice);
selectDate.addEventListener("change", sortDate);
// const style =getComputedStyle(select);

function sortPrice(e) {
  console.log(e.target.value);
  const sort = e.target.value;
  // console.log(b);

  switch (sort) {
    case "price-asc": {
      console.log("asscccc");

      axios
        .get(`http://localhost:3000/transactions?_sort=price`)
        .then((res) => {
          allProductsdata = res.data;

          // render products un dome
          renderProducts(res.data, filters);
        })
        .catch((err) => console.log(err));
      break;
    }
    case "price-desc": {
      console.log("asscccc");

      axios
        .get(`http://localhost:3000/transactions?_sort=price&_order=desc`)
        .then((res) => {
          allProductsdata = res.data;

          // render products un dome
          renderProducts(res.data, filters);
        })
        .catch((err) => console.log(err));
      break;
      break;
    }
    default:
      axios
        .get(`http://localhost:3000/transactions`)
        .then((res) => {
          allProductsdata = res.data;

          // render products un dome
          renderProducts(res.data, filters);
        })
        .catch((err) => console.log(err));
  }

  //   http://localhost:3000/transactions?_sort=price&_order=desc
}

function sortDate(e) {
  console.log(e.target.value);
  const sort = e.target.value;

  switch (sort) {
    case "date-asc": {
      console.log("asscccc");

      axios
        .get(`http://localhost:3000/transactions?_sort=date`)
        .then((res) => {
          allProductsdata = res.data;

          // render products un dome
          renderProducts(res.data, filters);
        })
        .catch((err) => console.log(err));
      break;
    }
    case "date-desc": {
      console.log("asscccc");

      axios
        .get(`http://localhost:3000/transactions?_sort=date&_order=desc`)
        .then((res) => {
          allProductsdata = res.data;

          // render products un dome
          renderProducts(res.data, filters);
        })
        .catch((err) => console.log(err));
      break;
      break;
    }
    default:
      axios
        .get(`http://localhost:3000/transactions`)
        .then((res) => {
          allProductsdata = res.data;

          // render products un dome
          renderProducts(res.data, filters);
        })
        .catch((err) => console.log(err));
  }

  //   http://localhost:3000/transactions?_sort=price&_order=desc
}

selectPrice.addEventListener("click", function () {
  selectPrice.focus(); // Ensure the select element loses focus after clicking

  // Rotate the arrow
  if (!selectPrice.classList.contains("active")) {
    selectArrow.style.transform = "rotate(180deg)";
    selectPrice.classList.add("active");
  } else {
    selectArrow.style.transform = "rotate(0deg)";
    selectPrice.classList.remove("active");
  }
});

selectDate.addEventListener("click", function () {
  selectDate.focus(); // Ensure the select element loses focus after clicking

  // Rotate the arrow
  if (!selectDate.classList.contains("active")) {
    selectArrowD.style.transform = "rotate(180deg)";
    selectDate.classList.add("active");
  } else {
    selectArrowD.style.transform = "rotate(0deg)";
    selectDate.classList.remove("active");
  }
});
