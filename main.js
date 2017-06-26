window.onload=main;

function main()
{
    var cropbox=new _cropbox(.4);
    var facedata=new _facedata;

    facedata.getRandom();
    cropbox.loadImg("test3.png");
}
