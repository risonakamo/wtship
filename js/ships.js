class _facedata
{
    /*  -- other variables --
        object ships: ship data
        array winimg: array of win image links
    */
    constructor()
    {
        this.dataready=0;

        this.getdata();
        this.getWin();
    }

    getdata()
    {
        var xhr=new XMLHttpRequest();
        xhr.open("GET","./data/ships.json");
        xhr.responseType="json";

        xhr.onreadystatechange=()=>{
            if (xhr.readyState==4)
            {
                this.ships=xhr.response.ships;
                this.dataready=1;
            }
        };

        xhr.send();
    }

    getRandom()
    {
        if (this.dataready==0)
        {
            return -1;
        }

        return this.ships[Math.floor(Math.random()*this.ships.length)];
    }

    getWin()
    {
        var xhr=new XMLHttpRequest();
        xhr.open("GET","./poise/poise.json");
        xhr.responseType="json";

        xhr.onreadystatechange=()=>{
            if (xhr.readyState==4)
            {
                this.winimg=xhr.response.images;
            }
        };

        xhr.send();
    }

    getwin()
    {
        return this.winimg[Math.floor(Math.random()*this.winimg.length)];
    }
}