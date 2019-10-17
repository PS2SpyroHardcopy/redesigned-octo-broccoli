var list = [
  {
    name: "Bob",
    color: "red"
  },
  {
    name: "Bobber",
    color: "orange"
  },
  {
    name: "Bobbette",
    color: "green"
  },
  {
    name: "Bobbers",
    color: "blue"
  },
  {
    name: "Boberino",
    color: "purple"
  }
];


  for (var i = 0; i < list.length; i++) {
    var wrapDiv = document.createElement("div");
    var nameEle = document.createElement("h1");
    

    nameEle.style.backgroundColor = list[i].color;
    nameEle.style.color = "white";
    nameEle.style.width = "20%"

    nameEle.addEventListener("click", function() {
      if(this.style.border !== "4px solid black"){
        this.style.border = "4px solid black"
      }else{
        this.style.border = "none"//end if
      }
    });

    nameEle.append("Name:  " + list[i].name);
    wrapDiv.appendChild(nameEle);
    document.body.appendChild(wrapDiv);
  } //end for loop