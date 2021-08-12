canvas=document.getElementById("myCanvas");

 pen=canvas.getContext("2d");
    pen.beginPath();
    pen.strokeStyle="grey";
    pen.lineWidth=7;
    pen.rect(150,143,430,200,);
    pen.stroke();

     
    pen.beginPath();
     pen.strokeStyle="blue";
     pen.lineWidth=8;
     pen.arc(235,210,40,0,2*Math.PI);
     pen.stroke();

     pen.beginPath();
     pen.strokeStyle="black";
     pen.lineWidth=8;
     pen.arc(356,210,40,0,2*Math.PI);
     pen.stroke();

     pen.beginPath();
     pen.strokeStyle="red";
     pen.lineWidth=8;
     pen.arc(465,210,40,0,2*Math.PI);
     pen.stroke();

     pen.beginPath();
     pen.strokeStyle="yellow";
     pen.lineWidth=8;
     pen.arc(295,237,40,0,2*Math.PI);
     pen.stroke();

     pen.beginPath();
     pen.strokeStyle="green";
     pen.lineWidth=8;
     pen.arc(410,237,40,0,2*Math.PI);
     pen.stroke();

 