#attempts to rename all ships in ship directory by removing anything
#that is not a number. pretty bad

#MUST MANUALLY RENAME ALL SHIPS WITH NUMBERS IN THEIR NAME
#I.E. SUBMARINES

import os;
import re;

def main():
    os.chdir("ships");
    for x in os.scandir():
        newname=re.sub("([^0-9])","",x.name);

        os.rename(x.name,newname+".png");

main();