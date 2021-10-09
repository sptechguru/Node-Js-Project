  //api data fecth

  const fetchdata = fetch("https://ghibliapi.herokuapp.com/people");

  //const fetchdata = fetch("http://127.0.0.1:5500/src/public/data/alldata.json");

  fetchdata.then(res => {
      console.log(res);
      return res.json();
  })

      .then(data => {

          console.log(data);

          if (data.length > 0) {
              let temp = "";

              data.forEach((u) => {
                  temp += "<tr>";
                  temp += "<td>" + u.name + "</td>";
                  temp += "<td>" + u.age + "</td>";
                  temp += "<td>" + u.gender + "</td>";
                  temp += "<td>" + u.eye_color + "</td> </tr>";
              })

              document.getElementById('data').innerHTML = temp;

          }

      })

      .catch((error) => {
          console.log(` Data are not matched .. ${error}`);
          // alert(` Data are not matched .. ${error}`);

      });





  //sarch function add functionality
  const searchFun = () => {

      let filter = document.getElementById('myinput').value.toUpperCase();

      let mytable = document.getElementById('mytable');

      let tr = mytable.getElementsByTagName('tr');

      for (let i = 0; i < tr.length; i++) {

          let td = tr[i].getElementsByTagName('td')[0];
          // let td = tr[i].getElementsByTagName('td')[1];
          // let td = tr[i].getElementsByTagName('td')[2];
          // let td = tr[i].getElementsByTagName('td')[3];



          if (td) {

              let textvalue = td.textContent || td.innerHTML;

              if (textvalue.toUpperCase().indexOf(filter) > -1) {

                  tr[i].style.display = "";

              }

              else {
                  tr[i].style.display = "none";
                  //alert("Your Query is Not found");
              }

          }
      }

  }