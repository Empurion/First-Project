

    message.reply("test\ntest")

const discordTitle = "To-do list"

async function add(message){

    todolist = discordTitle + "\n" + message

    var arr = [{id:1,name:'serdar'}, {id:2,name:'alfalfa'},{id:3,name:'joe'}];
removeByAttr(arr, 'id', 1);   
// [{id:2,name:'alfalfa'}, {id:3,name:'joe'}]

removeByAttr(arr, 'name', 'joe');
// [{id:2,name:'alfalfa'}]
}




removeByAttr(arr, 'id', 1);  