function OpenModal() {
        document.getElementById("modal").style.display = "flex";
      }

      function CloseModal() {
        document.getElementById("modal").style.display = "none";
      }
      function deletee(){
        alert("Are you sure you want to delete");
      }
      function updatee(){
        alert("Are you sure you want to update");
      }
      function selectt(){
        alert("Are you sure you want to select");
      }

      // inchide cand dai click in afara
      document.getElementById("modal").addEventListener("click", (e) => {
        if (e.target === document.getElementById("modal")) {
          CloseModal();
        }
      });