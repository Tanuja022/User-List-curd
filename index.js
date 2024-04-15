let form=document.getElementById("form")
let input=document.getElementById("input")
let msg=document.getElementById("msg")
let posts=document.getElementById("posts")


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("btn clicked")
    formValidattion();
})

let formValidattion=()=>{
    if(input.value===""){
        msg.innerHTML="please add your name";
        console.log("failed")
    }
    else{
        console.log("success");
        msg.innerHTML="";
        acceptdata();
    }
}

// save data

let data={};


let acceptdata=()=>{
    data["text"]=input.value;
    console.log(data)
    createpost()
}


let createpost=()=>{
    posts.innerHTML +=`
    <div>
                    <p>${data.text}</p>
                    <span class="options">
                        <i onClick="editpost(this)" class="fa fa-edit"></i>
                        <i onClick="deletepost(this)" class="fa fa-trash-alt"></i>
                    </span>
                </div>
    `;
    input.value="";
}

let deletepost=(e)=>{
    e.parentElement.parentElement.remove();
}

let editpost=(e)=>{
    input.value=e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}