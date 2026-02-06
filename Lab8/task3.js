const fetching = async (url = "https://fakestoreapi.com/users") => {
  const result = await fetch(`${url}`);
  const data = await result.json();
  return data;
};

fetching()
  .then((data) => {
    const table = document.createElement("table");
    table.style.border = "1px solid black";
    table.style.width = "100%";
    table.style.textAlign = "center";
    table.style.borderCollapse = "collapse";

    for (let i = 0; i < data.length; i++) {
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      const td4 = document.createElement("td");
      td1.style.border = "1px solid black";
      td2.style.border = "1px solid black";
      td3.style.border = "1px solid black";
      td4.style.border = "1px solid black";
      td1.innerHTML = data[i].id;
      td2.innerHTML = data[i].name.firstname + " " + data[i].name.lastname;
      td3.innerHTML = data[i].username;
      td4.innerHTML = data[i].email;
      tr.append(td1, td2, td3, td4);
      table.append(tr);
    }
    document.body.append(table);
  })
  .catch((err) => {
    console.log(err);
  });
