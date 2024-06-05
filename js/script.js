// Show Notification Bar
const showNotification=( msg , type)=>{
    let bgColor;
    switch (type) {
        case "success":
            bgColor = "linear-gradient(to right, #1D976C, #93F9B9)"
            break;
        case "error":
            bgColor = "linear-gradient(to right, #93291e, #ed213a)"
            break;
        default:
            break;
    }

 
// toastify
Toastify({
    text: msg ,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: bgColor,
    },
    onClick: function(){} // Callback after click
  }).showToast(); 
}


// register
const users = [  ]

const inputValue = (id) =>{
    return document.getElementById(id).value;
}

function handleregister() {
    event.preventDefault();

   let email     = inputValue('email');
   let  password = inputValue('password');
   
   
   if(!password){
    showNotification('Please enter password', 'error')
    return
   }

        let user = {
            email,
            password,
            id: Math.random().toString(36).slice(2),
           createdAt: new Date().getTime(),
           status: "Active"
        }
   
  console.log(users)

  

users.push(user)
showNotification('Sccuessfully registerd', 'success')

document.getElementById('register-card').style.display = "none";
document.getElementById('login-card').style.display = "block";
document.getElementById('username').innerHTML = "Login";

    }
 
    // login

    function handlelogin(){
        event.preventDefault();
let logemail = document.getElementById('logemail').value
let logpassword = document.getElementById('logpassword').value

let finduser = users.find (users => users.email === logemail && users.password === logpassword);
if (finduser){

    document.getElementById('login-card').style.display = "none";
    document.getElementById('box1').style.display = "block";
    document.getElementById('username').innerHTML = logemail;
    document.getElementById('bilal').innerHTML = logemail;
        showNotification('Successfully login', 'success') 
    }else {
        showNotification('Invalid login credentials', 'error');
    }
}

// todo

        let todos = [];

        function addTodo() {
            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;
            const date = document.getElementById('date').value;

      
            if (!title || !description || !date) {
                
showNotification('Please fill all the fields.', 'error')
                return;
            }

           
           
            const todo = {
                title,
                description,
                date,
                id: Math.random().toString(36).slice(2),
                createdAt: new Date().getTime(),
                status: "Active"
            };
           
            
            console.log(todo)
            
            todos.push(todo);
            showNotification('Todo successfully added.', 'success')

        }
function Update(){
   
}
        function viewTodos() {
            if (!todos.length) {
                return showNotification ('Single user not available' , 'error');
            }
        
            let tableStartingCode = '<table class="table">';
            let tableHead = '<thead><tr><th class="text-danger fw-bold" scope="col">#</th><th class="text-danger fw-bold" scope="col">Title</th><th class="text-danger fw-bold" scope="col">Description</th><th class="text-danger fw-bold" scope="col">Date</th><th class="text-danger fw-bold" scope="col">id</th><th class="text-danger fw-bold" scope="col">Status</th><th class="text-danger fw-bold" scope="col">Buttons</th></tr></thead>';
            let tableEndingCode = '</table>';
        
            let tableBody = "<tbody>";
        
            for (let i = 0; i < todos.length; i++) {
                tableBody += `<tr>
                                <th scope="row">${i + 1}</th>
                                <td>${todos[i].title}</td>
                                <td>${todos[i].description}</td>
                                <td>${todos[i].date}</td>
                                <td>${todos[i].id}</td>
                                <td>${todos[i].status}</td>
                                <td>
                                    <div>
                                        <button onclick="updateTodo(${todos[i].id})" class="btn btn-danger">Update</button>
                                        <button onclick="deleteTodo(${todos[i].id})" class="btn btn-success">Delete</button>
                                    </div>
                                </td>
                              </tr>`}
        
            tableBody += "</tbody>";
            
            let table = tableStartingCode + tableHead + tableBody + tableEndingCode;
        
            document.getElementById('Showoutput').innerHTML = table;
        
        }
       



// Footer 

window.onload = () =>{
    let year = new Date().getFullYear()
    document.getElementById('year').innerHTML = year ;
}