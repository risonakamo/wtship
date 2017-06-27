class _answermodule
{
    /*string answer*/
    constructor()
    {
        this.entrybox=document.querySelector(".ibox");
        this.correctEntryipoint=document.querySelector(".correct-entries");

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
        this.correctEntryipoint.insertAdjacentHTML("afterbegin",`
            <div class="entry correct">${this.entrybox.value}</div>
        `);

        this.entrybox.value="";
        window.scrollTo(0,document.body.scrollHeight);

        randomImage();
    }

    incorrect()
    {

    }
}