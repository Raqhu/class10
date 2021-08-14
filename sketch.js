var weight = [17,25,39,44,56]
function avrg() {
  var sum1 = 0;
  for(var i = 0; i<4; i = i+1){
   sum1 = sum+weight [i];
  }
   var avg = sum/weight.length;
   console.log(avg);
  
}

function setup() 
{
  createCanvas(400,400);
  //avrg();
  var sum = weight[0] + weight[1] + weight[2] + weight[3] + weight[4];
  var avg1 = sum/ weight.length;

  console.log(avg1);
}

function draw() 
{
  background(51);

}

