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
        this.failpane=document.querySelector(".port-message");
        this.winpane=document.querySelector(".win-box");
        this.winimg=document.querySelector(".win-box img");

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

        this.failpane.addEventListener("click",(e)=>{
            window.location.reload();
        });

        this.winimg.addEventListener("click",(e)=>{
            window.location.href=e.currentTarget.src;
        });
    }

    correct()
    {
        this.score++;
        this.strikes=0;

        if (this.score==8)
        {
            this.win();
            return;
        }

        this.correctEntryipoint.insertAdjacentHTML("afterbegin",`
            <div class="entry correct">${this.entrybox.value}✔</div>
        `);

        this.entrybox.value="";

        randomImage();
    }

    incorrect()
    {
        this.strikes++;

        if (this.strikes>3)
        {
            this.lose();
            return;
        }

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

        setTimeout(()=>{this.winpane.classList.add("show")},(entries.length)*150);
    }

    loadAnswer(answer)
    {
        this.answer=answer;
        this.genHint();
        this.strikes=0;
        this.setStrikes();
    }

    lose()
    {
        this.entrybox.parentNode.removeChild(this.entrybox);

        this.correctEntryipoint.insertAdjacentHTML("afterbegin",`
            <div class="entry correct">${this.answer}✖</div>
        `);

        this.failpane.classList.add("show");
    }

    win()
    {
        this.entrybox.parentNode.removeChild(this.entrybox);

        this.correctEntryipoint.insertAdjacentHTML("afterbegin",`
            <div class="entry correct">${this.entrybox.value}✔</div>
        `);

        this.winimg.src=ships.getwin();
        this.animateout();
    }
}