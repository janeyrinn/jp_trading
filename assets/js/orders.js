//EmailJS SDK Code: Sends emails to business owner through order form
// Code learned and customized from code used by Matt Rudge in "Using EmailJS" CI Tutuorial

function sendMail(contactForm) {
    emailjs.send("orders_jptrading","orders_jptrading", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "product": contactForm.product.value,
        "quantity": contactForm.quantity.value,
        "phone": contactForm.phone.value,
        "order_notes": contactForm.ordernotes.value
    })
        .then(
            function (response) {
                window.alert('YOUR MESSAGE WAS SENT, SOME ONE WILL CONTACT YOU SHORTLY')
                console.log("SENT", response);
            },
            function (error) {
                window.alert('YOUR MESSAGE FAILED TO SEND')
                console.log("NOT SENT", error);
            });
    return false;
}

//Pulls Product name from clicked link & auto populates in order form