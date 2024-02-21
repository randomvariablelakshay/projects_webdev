const qrinput = document.getElementById('qr-text');
const qrimg = document.getElementById('img-generator');
const qrbutton = document.getElementById('qr-button');

console.log(qrinput, qrimg, qrbutton);
qrbutton.addEventListener('click', () => {
    const inputvalue = qrinput.value;
    console.log(inputvalue);
    if(!inputvalue){
        alert('please enter a valid url');
        return;
    }

else{
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
    qrimg.alt = `QR Code for ${inputvalue}`;
}

})