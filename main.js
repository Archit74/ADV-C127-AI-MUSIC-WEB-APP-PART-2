song = "";

function preload() {
    song = loadSound("music.mp3", "music2.mp3");
}

function setup()
{
   canvas = createCanvas(500, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 500, 300);
}