let console_in = document.getElementById("console")
let input = document.getElementById("input");
let path = document.getElementById("path")
let detail = document.getElementById("profile")
let error_msg = document.getElementById("error")
let hel_cmds = document.getElementById("help_cmd")
let mbody = document.getElementById("mainbody")

document.addEventListener("keypress", keyboard2 => {
    if(detail.style.display == "block"){
        clearTerminal()
    }
    if(keyboard2.key == "Enter"){
        if(input.value == "neofetch"){
            clearTerminal()
            error_msg.style.display = "none"
            detail.style.display = "block"
        }else{
            clearTerminal()
            error_msg.style.display = "block"
        }
        if(input.value == "help"){
            clearTerminal()
            hel_cmds.style.display = "block"
        }
        if(input.value == "clear"){
            clearTerminal()
        }
        if(input.value == "set-theme=dark"){
            clearTerminal()
            mbody.style.background = "url(./Assets/mjave-d.webp)";
            mbody.style.backgroundSize = "cover"
        }
        if(input.value == "set-theme=light"){
            clearTerminal()
            mbody.style.background = "url(./Assets/mjave-l.webp)";
            mbody.style.backgroundSize = "cover"
        }
        
    }
})

function clearTerminal(){
    hel_cmds.style.display = "none"
    detail.style.display = "none";
    error_msg.style.display = "none";
     
}
document.addEventListener("keypress", (keyboard)=> {
    if(input.value == "neofetch"){
        input.style.color = "green";
    }else{
        input.style.color = "white";
    }
    if(input.value == "clear"){
        input.style.color = "green";
    }
    if(input.value == "help"){
        input.style.color = "green";
    }
    if(input.value == "set-theme=dark"){
        input.style.color = "green";
    }
    if(input.value == "set-theme=light"){
        input.style.color = "green";
    }

})