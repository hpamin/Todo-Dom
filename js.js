
let todo = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : [];


document.querySelector("#inputTask").addEventListener("change" , (e) => {

    let inputobj = {
        text : e.target.value ,
        Done : false ,
        star : false ,
        
     }

    todo.push(inputobj)

    e.target.value = ""
    localStorage.setItem("task" ,JSON.stringify(todo))
    todoFunc()
})


function todoFunc (){
    document.querySelector("ol").innerHTML = ""
    todo.map((task , index) => {
    
        let ol   =  document.querySelector(".olscreen")
        let li   =  document.createElement("li")
        let div  =  document.createElement("div")
        let line =  document.createElement("div")
        let h5andsdiv = document.createElement("div")
        let h5   =  document.createElement("h5")
        let s    =  document.createElement("s")
 
        let btndel    =  document.createElement("button")
        let imgdel  =  document.createElement("img")
        let btnchange = document.createElement("button")
        let imgchange = document.createElement("img")
        let divicon = document.createElement("div")
        let imgstar = document.createElement("img")
        let btnstar = document.createElement("button")
        
        let inputCheckbox = document.createElement("input")




            /**change create & run*/

        let inputchange = document.createElement("input")
        inputchange.setAttribute("type" , "text")
        inputchange.classList.add("none")
        inputchange.classList.add("input-change")
        inputchange.value = task.text

        div.append(inputchange)

        btnchange.addEventListener("click" , (e) => {
            imgchange.classList.toggle("button-click")
            inputchange.classList.toggle("none")
            h5.classList.toggle("none")
            s.classList.toggle("none")   
        })

        
        inputchange.addEventListener("change" , (e) =>{
            
            change(index , e.target.value)
            e.target.value = ""
            
        })
        



        /**delete create & run*/


        btndel.addEventListener("click" , () => {
            del(index)
        })


        /**check box create & run */
        
        inputCheckbox.addEventListener("input" , () => {
            checked(index)
        })
        
        
        if(task.Done){
            s.innerHTML = task.text
            h5andsdiv.append(s)
            inputCheckbox.setAttribute('checked', 'checked');
        }else{
            h5.innerHTML = task.text 
            h5andsdiv.append(h5)
            inputCheckbox.removeAttribute('checked');
        }
        
        /**append & class name*/

        div.classList.add("task")
        li.classList.add("liScreen")
        line.classList.add("line")
        inputCheckbox.type = "checkbox";
        inputCheckbox.classList.add("checkboxScreen")
        s.classList.add("del")

        divicon.classList.add("divicon")

        btndel.classList.add("button")
        btnchange.classList.add("button")
        btnstar.classList.add("button")

        imgdel.setAttribute("src" , "./icon/del.png")
        imgchange.setAttribute("src" , "./icon/edit.png")
        imgstar.setAttribute("src" , "./icon/star.png")
        

        /**star create & run */

        btnstar.addEventListener("click" , () => {
            impo(index)
            
        })

        if(task.star){
            imgstar.classList.toggle("button-click")
            imgstar.classList.toggle("button-click-star")
        }
        else{
            imgstar.classList.remove("button-click")
            imgstar.classList.remove("button-click-star")
        }


        div.append(h5andsdiv)
        divicon.append(inputCheckbox)
        
        btnchange.append(imgchange)
        btnstar.append(imgstar)
        btndel.append(imgdel)

        divicon.append(btnchange)
        divicon.append(btndel)
        divicon.append(btnstar)
        div.append(divicon)
        

        li.appendChild(div)
        li.append(line)
        ol.appendChild(li)

})
}

function change(item , newtext) {

    const itemchange = todo[item]
    
    todo[item] = {
        text : newtext,
        Done : itemchange.Done,
        star : itemchange.star
    }

    localStorage.setItem("task" ,JSON.stringify(todo))

    todoFunc()
}


function del(item){
    
    todo.splice(item, 1)
    todoFunc()
    localStorage.setItem("task" , JSON.stringify(todo))
}


function checked(item){
    const itemtask = todo[item]

    todo[item] = {
        text : itemtask.text,
        Done : !itemtask.Done,
        star : itemtask.star
    }
    
    localStorage.setItem("task" ,JSON.stringify(todo))
    
    todoFunc()
}

todoFunc()


/****************************************/


let todostar = localStorage.getItem('taskStar') ? JSON.parse(localStorage.getItem('taskStar')) : [];

let star = document.querySelector(".button-star")

function impo(item){

    let taskstar = todo[item]
    
    taskstar.star = !taskstar.star

    localStorage.setItem("task" ,JSON.stringify(todo))

    localStorage.setItem("taskStar" ,JSON.stringify(todostar))

        TsakStar()
        todoFunc()    
}

star.addEventListener("click" , () => {
    document.querySelector(".screen-star").classList.toggle("screen-star-show")
    TsakStar()
})

function TsakStar() {

    document.querySelector(".star").innerHTML = ""

    todo.filter(item => item.star===true).map((item , index)=>{

        
        let olstar   =  document.querySelector(".star")
        let listar   =  document.createElement("li")
        let divstar  =  document.createElement("div")
        let linestar =  document.createElement("div")
        let h5star   =  document.createElement("h5")

        h5star.innerHTML = item.text
        

        h5star.classList.add("h5star")
        divstar.classList.add("task")
        linestar.classList.add("liScreen")
        listar.classList.add("liScreen")
        linestar.classList.add("line")
        

        /**star create & run */

        divstar.append(h5star)
        listar.appendChild(divstar)
        listar.append(linestar)
        olstar.appendChild(listar)

    })

}

function delstar(index){
    todostar.splice(index, 1)
    localStorage.setItem("taskStar" ,JSON.stringify(todostar))
    TsakStar()
}
TsakStar()