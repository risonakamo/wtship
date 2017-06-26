class _facedata
{
    /*  -- other variables --
        object ships: ship data*/
    constructor()
    {
        this.dataready=0;

        this.getdata();
    }

    getdata()
    {
        var xhr=new XMLHttpRequest();
        xhr.open("GET","ships.json");
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
}