class _facedata
{
    /*  -- other variables --
        object facedata: all facedata
        array keys: cached keys of facedata*/
    constructor()
    {
        this.dataready=0;

        this.getdata();
    }

    getdata()
    {
        var xhr=new XMLHttpRequest();
        xhr.open("GET","facedata.json");
        xhr.responseType="json";

        xhr.onreadystatechange=()=>{
            if (xhr.readyState==4)
            {
                this.facedata=xhr.response;
                this.keys=Object.keys(this.facedata);
                this.dataready=1;
            }
        };

        xhr.send();
    }

    getRandom()
    {
        if (this.dataready==0)
        {
            setTimeout(()=>{this.getRandom()},100);
            return;
        }

        var randomkey=this.keys[Math.floor(Math.random()*this.keys.length)];

        var randomid=this.facedata[randomkey];
        randomid=randomid[Math.floor(Math.random()*randomid.length)];

        console.log([randomkey,randomid]);
    }
}