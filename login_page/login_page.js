dummy_user_database=[
    {username:'chakra07', email:'chakra@gmail.com', phone:987653210, password:'hello1234'},
    {username:'vasu88', email:'vasu@gmail.com', phone:987612340, password:'bye0987'},
]

login_button= document.getElementById('login-btn');
login_button.addEventListener('click',(e)=>{
    e.preventDefault();
    id=document.getElementById('ids').value;
    password=document.getElementById('pass').value;
    console.log(id,password);
    
    dummy_user_database.forEach(element => {
        if((id==element.username || id==element.email || id==element.phone)&&(password==element.password)){
            console.log("successfully logged in");
            window.open('/landing_page.html','_blank');
            document.getElementsByClassName('error-msg')[0].style.display='none';
        }
        else{
            document.getElementById('ids').value=''
            document.getElementById('pass').value=''
            document.getElementsByClassName('error-msg')[0].style.display='block';
        }
    });
})
