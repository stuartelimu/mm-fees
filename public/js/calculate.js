const AMOUNTELM = document.querySelector('#amount');

const FORM = document.querySelector('#form')

FORM.addEventListener('submit', e => e.preventDefault());



AMOUNTELM.focus();

AMOUNTELM.addEventListener('keypress', e => {
    // return (e.charCode !=8 && e.charCode ==0 || (e.charCode >= 48 && e.charCode <= 57))
})

AMOUNTELM.addEventListener('input', e => {
    console.log(e.target.value)
    
    let amount = e.target.value;
    let am = amount.replaceAll(',', '');
    AMOUNTELM.value = am.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
})