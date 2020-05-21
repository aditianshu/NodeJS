const fs = require('fs')


function getNotes (title) {
    const notes = locateData();
    if(title == null || title  == undefined){
        console.log(notes);
    }
    else{
        const dataIndex = notes.indexOf(notes.filter(function(note){
            if (note.title === title){
                return true
            }
            else{
                return false
            }
        }))
        if(dataIndex){
        
        console.log(notes.splice(dataIndex,1))}
        else{
            console.log("No such note found");
        }
    }
}

function addNotes (title, desc) {
    const notes = locateData()
    notes.push({
       title: title,
       desc: desc
    })
    saveData(notes)
    console.log(notes)  
}

function removeNotes (title){
    const notes = locateData()
    const dataIndex = notes.indexOf(notes.filter(function(note){
        if (note.title === title){
            return true
        }
        else{
            return false
        }
    }))

    notes.splice(dataIndex,1)
    console.log(notes)

    saveData(notes)
}


const saveData = (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes))


const locateData = function(){
    try{
        const dataBuffer = (fs.readFileSync('notes.json'))
        const datajson = dataBuffer.toString()
        const finalData = JSON.parse(datajson)
        return finalData

    }catch(e){
       return []
    }
}

module.exports =  {
    removeNotes: removeNotes,
    addNotes: addNotes,
    getNotes : getNotes
}