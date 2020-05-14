const WORKDAYS_YEAR = 250;

const onClickOnButton = () => {
    const inputCuota = document.getElementById('cuota');
    const inputInactividad = document.getElementById('inactividad');
    const inputSalario = document.getElementById('salario');
    const inputIrpf = document.getElementById('irpf');

    const cuota = parseInt(inputCuota.value);
    const inactividad = parseInt(inputInactividad.value);
    const salario = parseInt(inputSalario.value);
    const irpf = parseInt(inputIrpf.value);

    const salarioBrutoAnual = (salario + cuota) * 12;
    const horasATrabajar = (WORKDAYS_YEAR - inactividad) * 8;
    const precioHora = salarioBrutoAnual / horasATrabajar;
    const precioHoraConIrpf = (precioHora / (1 - (irpf) / 100));

    const resultBox = document.getElementById('result');
    resultBox.innerText = precioHoraConIrpf.toFixed(2);
}

const button = document.getElementById('calc-button');
button.onclick = onClickOnButton;