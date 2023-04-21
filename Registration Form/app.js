let users = []
function renderUsers(){
    let userContainer = document.getElementById('users');
    userContainer.innerHTML = ''
    
    users.map((user)=>{
        let div = document.createElement('div');
        let userName = document.createElement('p');
        let userEmail = document.createElement('p');
        let userWebsite = document.createElement('p');
        let userGender = document.createElement('p');
        let userSkills = document.createElement('p');
       
        div.classList.add('user');
        
        userName.innerText = user.name;
        userEmail.innerText = user.email;
        userWebsite.innerText = user.website;
        userGender.innerText = user.gender;
        userSkills.innerText = user.skills;
       

        userContainer.appendChild(div);
       
        div.appendChild(userName);
        div.appendChild(userEmail);
        div.appendChild(userWebsite);
        div.appendChild(userGender);
        div.appendChild(userSkills);
   
    })
}

function successAlert(){
    let alert = document.getElementById('alert');
    alert.classList.add('success');
    alert.innerText = 'User added successfully!'
    setTimeout(()=>{
        alert.classList.remove('success');
        alert.innerText = ''
    }, 2000)
}
function failAlert(){
    let alert = document.getElementById('alert');
    alert.classList.add('danger');
    alert.innerText = 'Email already exists!'
    setTimeout(()=>{
        alert.classList.remove('danger');
        alert.innerText = ''
    }, 2000)
}

function register(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let website = document.getElementById('website');
    let gender = document.getElementById('gender');
    
    let allCheckebox = document.querySelectorAll('.checkbox');
    let skills = []
    allCheckebox.forEach((checkbox)=>{
         if(checkbox.checked){
            skills.push(checkbox.value);
        }
    })
    
    let tempUser = {
        name: name.value,
        email: email.value,
        website: website.value,
        gender: gender.value,
        skills : skills
    }
   
    let userEmailCount = users.filter((user)=>{
        return user.email == email.value;
    })
    if(userEmailCount.length == 0){
        users.push(tempUser);
        successAlert();
    }
    else{
        failAlert();
    }
    renderUsers();
    name.value = '';
    email.value = '';
    website.value = '';
    gender.value = '';
    document.getElementById("skill1").checked = false;
    document.getElementById("skill2").checked = false;
    document.getElementById("skill3").checked = false;
    document.getElementById("skill4").checked = false;
}