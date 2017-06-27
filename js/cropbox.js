class _cropbox
{
    /*
        string lastsrc: last image link to be loaded
    */
    constructor(mult)
    {
        this.img=document.querySelector(".port-img");
        this.portbox=document.querySelector(".port");
        this.srcImg=document.querySelector(".src-img");

        this.mult=mult;
        this.portboxRealWidth=this.portbox.clientWidth;
        this.img.width=this.portboxRealWidth;
        this.img.height=this.portboxRealWidth;
        this.c=this.img.getContext("2d");

        this.srcImg.onload=()=>{this.loadCanvas()};
    }

    loadCanvas()
    {
        var subBoxWidth;

        this.c.clearRect(0,0,this.portboxRealWidth,this.portboxRealWidth);

        if (this.srcImg.width<this.srcImg.height)
        {
            subBoxWidth=this.srcImg.width*this.mult;
        }

        else
        {
            subBoxWidth=this.srcImg.height*this.mult;
        }


        var scale=this.portboxRealWidth/subBoxWidth;

        var sx=Math.floor(Math.random()*(this.srcImg.width-subBoxWidth+1));
        var sy=Math.floor(Math.random()*(this.srcImg.height-subBoxWidth+1));

        this.c.drawImage(this.srcImg,sx,sy,subBoxWidth,subBoxWidth,0,0,this.portboxRealWidth,this.portboxRealWidth);

        this.srcImg.removeAttribute("src");
    }

    reloadImg()
    {
        this.srcImg.src=this.lastsrc;
    }

    loadImg(img)
    {
        this.srcImg.src="./"+img;
        this.lastsrc=img;
    }
}