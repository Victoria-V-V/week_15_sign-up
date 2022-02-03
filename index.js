function signCheck()
    {
    let userAgreement = document.getElementById("userAgreement");
        if(userAgreement.checked)
        {
            document.getElementById("button").disabled = false;
        }

        else {
            document.getElementById("button").disabled = true;
        }
    }

function check()
{
    let firstName = document.getElementById("InputFirstName");
    let surName = document.getElementById("InputSurName");
    let login = document.getElementById("InputLogin");
    let password = document.getElementById("InputPassword");
    let passwordRepeat = document.getElementById("InputPasswordRepeat");
    let tel = document.getElementById("InputTel");
    let phoneValid = /^\d[\d\(\)\ -]{4,14}\d$/;

    document.getElementById('errowMessageFirstName').innerHTML = "";
        if(firstName.value == '')
        {
        document.getElementById('errowMessageFirstName')
        .innerHTML+= "Пожалуйста, укажите имя<br><br>";
        return false;
        }

    document.getElementById('errowMessageSurName').innerHTML = "";
        if(surName.value == '')
        {
        document.getElementById('errowMessageSurName')
        .innerHTML+= "Пожалуйста, укажите фамилию<br><br>";
        return false;
        }

    document.getElementById('errowMessagelogin').innerHTML = "";
        if(login.value == '')
        {
        document.getElementById('errowMessagelogin')
        .innerHTML+= "Необходимо выбрать логин<br><br>";
        return false;
        }


    document.getElementById('errowMessagePassword').innerHTML = "";
        if(password.value == '')
        {
        document.getElementById('errowMessagePassword')
        .innerHTML+= "Необходимо выбрать пароль<br><br>";
        return false;
        }

        else if(password.value.length <=6)
        {
        document.getElementById('errowMessagePassword')
        .innerHTML+= "Ваш пароль слишком короткий<br><br>";
        return false;
        }

        else if(password.value.length >=15)
        {
        document.getElementById('errowMessagePassword')
        .innerHTML+= "Ваш пароль слишком длинный<br><br>";
        return false;
        }

        document.getElementById('errowMessagePasswordRepeat').innerHTML = "";
        if(passwordRepeat.value != password.value)
        {
        document.getElementById('errowMessagePasswordRepeat')
        .innerHTML+= "Пароли не совпадают<br><br>";
        return false;
        }


        document.getElementById('errowMessageTel').innerHTML = "";
        if(tel.value == '')
        {
        document.getElementById('errowMessageTel')
        .innerHTML+= "Пожалуйста, укажите телефон<br><br>";
        return false;
        }

        else if(tel.value.match(phoneValid))
            {
            alert('Добро пожаловать, ' + firstName.value + ' ' + surName.value + '!');
            return true;
            }
            else
            {
            document.getElementById('errowMessageTel')
            .innerHTML+= "Недопустимый формат номера<br><br>";
            }
}









