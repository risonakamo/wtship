#attempts to load facedata and assign a name to ids in the ship folder,
#outputting a json.  all images in the ship folder must be named to id

import os;
import json;

def main():
    facedata="";
    with open("facedata.json","r",encoding="utf8") as infile:
        facedata=json.load(infile);

    parseface={};

    for x in facedata:
        for y in facedata[x]:
            parseface[y]=x;

    with open("ships-out.json","w",encoding="utf8") as ofile:
        os.chdir("ships");
        for x in os.scandir():
            ofile.write('''["{}","{}"],\n'''.format(parseface[int(x.name[:-4])],x.name));


main();