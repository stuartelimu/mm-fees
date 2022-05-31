const AMOUNTELM = document.querySelector('#amount');
const AMOUNTHELP = document.querySelector('#amountHelp');

const FORM = document.querySelector('#form');

const TABLE = document.querySelector('.table');
const TAX = document.querySelector('#tax');
const TOTAL = document.querySelector('#total');

const CHARGE = document.querySelector('#charge');

const LINKS = document.querySelectorAll('.nav-link');

FORM.addEventListener('submit', e => e.preventDefault());

const WITHDRAW = [
    {
        "min": 0,
        "max": 2500,
        "rate": 330
    },
    {
        "min": 2501,
        "max": 5000,
        "rate": 440
    },
    {
        "min": 5001,
        "max": 15000,
        "rate": 700
    },
    {
        "min": 15001,
        "max": 30000,
        "rate": 880
    },
    {
        "min": 30001,
        "max": 45000,
        "rate": 1210
    },
    {
        "min": 45001,
        "max": 60000,
        "rate": 1500
    },
    {
        "min": 60001,
        "max": 125000,
        "rate": 1925
    },
    {
        "min": 125001,
        "max": 250000,
        "rate": 3575
    },
    {
        "min": 250001,
        "max": 500000,
        "rate": 7000
    },
    {
        "min": 500001,
        "max": 7000000,
        "rate": 12500
    }
]

AMOUNTELM.focus();

AMOUNTELM.addEventListener('keypress', e => {
    // return (e.charCode !=8 && e.charCode ==0 || (e.charCode >= 48 && e.charCode <= 57))
})

AMOUNTELM.addEventListener('input', e => {
    
    let amount = e.target.value;
    let am = amount.replaceAll(',', '');
    AMOUNTELM.value = am.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    AMOUNTHELP.textContent = "";
    AMOUNTHELP.className = 'form-text';
    AMOUNTELM.className = 'form-control';


    if(e.target.value !== '') {
        TABLE.classList.remove('d-none');
        GETCHARGE(am);
        
        if(parseInt(am) > WITHDRAW[WITHDRAW.length - 1].max || parseInt(am) <= WITHDRAW[0].min) {
            AMOUNTHELP.textContent = "Invalid Amount";
            AMOUNTHELP.classList.add('invalid-feedback');
            AMOUNTELM.classList.add('is-invalid');
            TABLE.classList.add('d-none');
            
        }

    } else {
        TABLE.classList.add('d-none');
    }
})

const GETCHARGE = amount => {

    CHARGE.textContent = 0;
    TAX.textContent = 0;
    TOTAL.textContent = 0;

    WITHDRAW.forEach(element => {
        if(parseInt(amount) > element.min && parseInt(amount) <= element.max) {
            CHARGE.textContent = element.rate;
            TAX.textContent = parseInt(amount) * 0.005;
            TOTAL.textContent = parseInt(CHARGE.textContent) + parseInt(TAX.textContent);
            TOTAL.textContent = TOTAL.textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
    })
}

LINKS.forEach((link,key) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(key);
        link.classList.toggle("active");
        LINKS.forEach((el, els) => {
            if(key != els) {
                el.classList.remove("active");
            }
        })
    })
})