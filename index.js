function check()
{
    let firstName = document.getElementById("InputFirstName");
    let SurName = document.getElementById("InputSurName");
    let login = document.getElementById("InputLogin");
    let password = document.getElementById("InputPassword");

    document.getElementById('errowMessageFirstName').innerHTML = "";
        if(firstName.value == '')
        {
        document.getElementById('errowMessageFirstName')
        .innerHTML+= "Пожалуйста, укажите имя<br><br>";
        }

    document.getElementById('errowMessageSurName').innerHTML = "";
        if(SurName.value == '')
        {
        document.getElementById('errowMessageSurName')
        .innerHTML+= "Пожалуйста, укажите фамилию<br><br>";
        }

    document.getElementById('errowMessagelogin').innerHTML = "";
        if(login.value == '')
        {
        document.getElementById('errowMessagelogin')
        .innerHTML+= "Необходимо выбрать логин<br><br>";
        }


    document.getElementById('errowMessagePassword').innerHTML = "";
        if(password.value == '')
        {
        document.getElementById('errowMessagePassword')
        .innerHTML+= "Необходимо выбрать пароль<br><br>";
        }

        else if(password.value.length <=6)
        {
        document.getElementById('errowMessagePassword')
        .innerHTML+= "Ваш пароль слишком короткий<br><br>";
        }


}





// if(password.value == ''){
//     document.getElementById('errowMessage')
//     .innerHTML+= "Ваш пароль не заполнен<br>";
// }

// if(password.value.length <=5){
//     document.getElementById('errowMessage')
//     .innerHTML+= "Ваш пароль слишком короткий<br>";
// }







