import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "C:\\Users\\Deepa\\OneDrive\\Documents\\GitHub\\Sigma-Web-Dev-Course\\WEB-DEV"

let files = await fs.readdir(basepath)

for (const item of files) {
    let ext = item.split(".")[item.split(".").length-1]
    if(ext != "js" && ext != "json" && ext != "html" &&  ext != "css" && ext != "ejs" && item.split(".").length > 1){
        if(fsn.existsSync(path.join(basepath, ext))){
            //move this file to this directory
              fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
          }
          else{
              fs.mkdir(ext)
              fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
          }
    }
}
