class _answermodule
{
    /*string answer*/
    constructor()
    {
        this.entrybox=document.querySelector(".ibox");
        this.correctEntryipoint=document.querySelector(".correct-entries");
        this.inputArea=document.querySelector(".input-area");

        this.score=0;
        this.strikes=0;
        this.iboxEvents();
    }

    iboxEvents()
    {
        this.entrybox.addEventListener("keypress",(e)=>{
            if (e.key=="Enter")
            {
                if (this.entrybox.value==this.answer)
                {
                    this.correct();
                }

                else
                {
                    this.incorrect();
                }
            }
        });
    }

    correct()
    {
        this.score++;
        this.strikes=0;

        if (this.score==2)
        {
            this.entrybox.parentNode.removeChild(this.entrybox);

            this.correctEntryipoint.insertAdjacentHTML("afterbegin",`
                <div class="entry correct">${this.entrybox.value}✔</div>
            `);

            this.animateout();

            return;
        }

        this.correctEntryipoint.insertAdjacentHTML("afterbegin",`
            <div class="entry correct">${this.entrybox.value}✔</div>
        `);

        this.entrybox.value="";
        window.scrollTo(0,document.body.scrollHeight);

        randomImage();
    }

    incorrect()
    {
        this.strikes++;
    }

    animateout()
    {
        var entries=document.querySelectorAll(".correct");

        entries.forEach((x,i)=>{
            setTimeout(()=>{
                x.classList.add("completing");
            },i*100);
        });
    }
}