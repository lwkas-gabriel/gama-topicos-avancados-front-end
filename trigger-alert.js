const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const login = document.getElementById('exampleInputEmail1')
const senha = document.getElementById('exampleInputPassword1');

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible fade show" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        if(login.value == "" || senha.value == ""){
            alert('Atenção ao logar no sistema!', 'dark')
        }else{
            alert('Usuário logado!', 'success')
        }
    })
}

const resetTrigger = document.getElementById('resetBtn')
if (resetTrigger){
    resetTrigger.addEventListener('click', () => {
        if( login.value != "" || senha.value != "" ){
            login.value = ""
            senha.value = ""
            alert('dados resetados!', 'danger');
        }else{
            alert('insira algum dado preu resetar', 'warning');
        }
      })
}