window.onload=main;

function main()
{
    var img=document.querySelector(".port-img");
    var portbox=document.querySelector(".port");

    img.src="test1.png";
    var mult=.5;

    img.onload=()=>{
        var imgMinDim;

        if (img.width<img.height)
        {
            imgMinDim=img.width;
        }

        else
        {
            imgMinDim=img.height;
        }

        var boxwidth=Math.ceil(imgMinDim*mult);
        var scale=200/boxwidth;

        var tx=-Math.floor(Math.random()*(img.width-boxwidth+1));
        var ty=-Math.floor(Math.random()*(img.height-boxwidth+1));

        img.style.transform=`translate(${tx}px,${ty}px) scale(${scale})`;
    };
}
