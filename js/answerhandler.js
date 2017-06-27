class _answermodule
{
    /*string answer*/
    constructor()
    {
        this.entrybox=document.querySelector(".ibox");
        this.correctEntryipoint=document.querySelector(".correct-entries");
        this.inputArea=document.querySelector(".input-area");
        this.hint=document.querySelector(".hint");
        this.strikeElement=document.querySelector(".strikes");

        this.score=0;
        this.strikes=0;
        this.iboxEvents();
    }

    setStrikes()
    {
        switch (this.strikes)
        {
            case 0:
            this.strikeElement.innerHTML="○ ○ ○";
            break;

            case 1:
            this.strikeElement.innerHTML="&#10006; ○ ○";
            break;

            case 2:
            this.strikeElement.innerHTML="&#10006; &#10006; ○";
            break;

            case 3:
            this.strikeElement.innerHTML="&#10006; &#10006; &#10006; !!!";
            break;

            case 0:

            break;
        }
    }

    genHint()
    {
        var rdex=Math.floor(Math.random()*this.answer.length);
        var r="";
        for (var x=0,l=this.answer.length;x<l;x++)
        {
            if (x==rdex)
            {
                r+=this.answer[x];
            }

            else
            {
                r+="_ ";
            }
        }

        this.hint.innerHTML=r;
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
        this.setStrikes();
        cropbox.reloadImg();
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

    loadAnswer(answer)
    {
        this.answer=answer;
        this.genHint();
        this.strikes=0;
        this.setStrikes();
    }
}