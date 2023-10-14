canvas = document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
nasaimages=["https://upload.wikimedia.org/wikipedia/commons/d/dc/PIA17944-MarsCuriosityRover-AfterCrossingDingoGapSanddune-20140209.jpg",
"https://mars.nasa.gov/system/resources/detail_files/25904_1-PIA24546-1200.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROePZN7Nb6krQFZltNVQybsSTCuT8-Wa6fGA&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUkIfhlsLb3PbkWTRifBjdCO1y8FklRDAFMg&usqp=CAU"]
randomnumber=Math.floor(Math.random()*4)
roverwidth=100
roverheight=100
roverx=10
rovery=10
backgroundimage=nasaimages[randomnumber]
roverimage="rover.png"
function add(){
    background_imgTag=new Image()
    background_imgTag.onload=uploadBackground
    background_imgTag.src=backgroundimage
    
    rover_imgTag=new Image()
    rover_imgTag.onload=uploadRover
    rover_imgTag.src=roverimage

}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height)
}
function uploadRover(){
    ctx.drawImage(rover_imgTag,roverx,rovery,roverwidth,roverheight)
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keyPressed= e.keyCode
    if (keyPressed=="38") {
        up()
    }
    if (keyPressed=="40") {
        down()
    }
    if (keyPressed=="37") {
        left()
    }
    if (keyPressed=="39") {
        right()
    }
}
function up()
{
    if (rovery>=0) {
    rovery=rovery-10
        uploadBackground()
        uploadRover()
    }
}
function down()
{
    if (rovery<=500) {
    rovery=rovery+10
        uploadBackground()
        uploadRover()
    }
}
function left()
{
    if (roverx>=0) {
    roverx=roverx-10
        uploadBackground()
        uploadRover()
    }
}
function right()
{
    if (roverx<=700) {
    roverx=roverx+10
        uploadBackground()
        uploadRover()
    }
}