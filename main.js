window.onload=main;

var ships=new _facedata;
var cropbox;

function main()
{
    cropbox=new _cropbox(.5);

    randomImage();
}

function randomImage()
{
    var r=ships.getRandom();

    if (r<0)
    {
        setTimeout(()=>{randomImage()},100);
        return;
    }

    console.log(r);
    cropbox.loadImg(`ships/${r[1]}`);
}