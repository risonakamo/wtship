class _cropbox
{
    constructor(mult)
    {
        this.img=document.querySelector(".port-img");
        this.portbox=document.querySelector(".port");
        this.srcImg=document.querySelector(".src-img");

        this.mult=mult;
        this.portboxRealWidth=this.portbox.clientWidth;
        this.img.width=this.portboxRealWidth;
        this.img.height=this.portboxRealWidth;

        this.srcImg.onload=()=>{this.loadCanvas()};
    }

    loadCanvas()
    {
        var subBoxWidth;

        if (this.srcImg.width<this.srcImg.height)
        {
            subBoxWidth=this.srcImg.width*this.mult;
        }

        else
        {
            subBoxWidth=this.srcImg.height*this.mult;
        }

        var c=this.img.getContext("2d");
        var scale=this.portboxRealWidth/subBoxWidth;

        var sx=Math.floor(Math.random()*(this.srcImg.width-subBoxWidth+1));
        var sy=Math.floor(Math.random()*(this.srcImg.height-subBoxWidth+1));

        c.drawImage(this.srcImg,sx,sy,subBoxWidth,subBoxWidth,0,0,this.portboxRealWidth,this.portboxRealWidth);

        this.srcImg.removeAttribute("src");
    }

    loadImg(img)
    {
        this.srcImg.src=img;
    }
}