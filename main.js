window.onload=main;

function main()
{
    var img=document.querySelector(".port-img");
    var portbox=document.querySelector(".port");
    var srcImg=document.querySelector(".src-img");

    srcImg.src="test1.png";
    var mult=.4;
    var portboxRealWidth=portbox.clientWidth;
    img.width=portboxRealWidth;
    img.height=portboxRealWidth;

    srcImg.onload=()=>{
        var subBoxWidth;

        if (img.width<img.height)
        {
            subBoxWidth=img.width*mult;
        }

        else
        {
            subBoxWidth=img.height*mult;
        }

        var c=img.getContext("2d");
        var scale=portboxRealWidth/subBoxWidth;

        var sx=Math.floor(Math.random()*(srcImg.width-subBoxWidth+1));
        var sy=Math.floor(Math.random()*(srcImg.height-subBoxWidth+1));

        c.drawImage(srcImg,sx,sy,subBoxWidth,subBoxWidth,0,0,portboxRealWidth,portboxRealWidth);

        srcImg.removeAttribute("src");
    };
}
