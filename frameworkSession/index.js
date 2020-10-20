let customers = [
  { name: "John", age: "20" },
  { name: "kumar", age: "30" },
  { name: "Saleem", age: "40" }
];

/* function renderCustomers() {
  let customerListDOM = document.getElementById("customerList");

  customers.forEach((customer) => {
    var divElement = document.createElement("div");
    divElement.classList.add("customerItem");
    divElement.textContent = customer.name;
    customerListDOM.appendChild(divElement);
    divElement.addEventListener("click", (event) => {
      alert(customer.name);
    });
  });
}

function renderViewList(
  modelItems,
  parentDOM,
  componentType,
  propName,
  eventType,
  className,
  actionListener
) {
  modelItems.forEach((model) => {
    var domElement = document.createElement(componentType);
    domElement.classList.add(className);
    domElement.textContent = model[propName];
    parentDOM.appendChild(domElement);
    domElement.addEventListener(eventType, (event) => {
      actionListener(model[propName]);
    });
  });
} */
function templateRenderViewList(
    modelItems,
    parentDOM,
    componentBuilder,
    propName,
    eventType,
    className,
    actionListener
  ) {
 
    modelItems.forEach((model) => {
      var domElement = componentBuilder(model);
      domElement.classList.add(className);
      //domElement.textContent = model[propName];
      parentDOM.appendChild(domElement);
      domElement.addEventListener(eventType, (event) => {
        actionListener(model[propName]);
      });
    });
  }
  
  function myActionListener(value) {
    alert(value);
  }
  
  let specialCustomerDOM = document.getElementById("specialCustomers");
  //renderViewList(customers, specialCustomerDOM,'li', 'age',
  //'mousedown','customerItem', myActionListener);
  
  const componentBuilder = (model) => {
    const u1 = document.createElement("ul");
    const l1 = document.createElement("li");
    l1.textContent = model.name;
    const l2 = document.createElement("li");
    l2.textContent = "300";
    u1.appendChild(l1);
    u1.appendChild(l2);
    return u1;
  };
  templateRenderViewList(
    customers,
    specialCustomerDOM,
    componentBuilder,
    "age",
    "mousedown",
    "customerItem",
    myActionListener
  );
  //renderCustomers();