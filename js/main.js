window.onload=main;

var ships=new _facedata;
var cropbox;

function main()
{
    cropbox=new _cropbox(.5);
    question=new _answermodule;

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

    cropbox.loadImg(`./ships/${r[1]}`);
    question.loadAnswer(r[0]);
}