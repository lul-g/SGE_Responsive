document.querySelector('.contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    // document.querySelector('.footer').style.background = 'red';

    const name = document.querySelector('.name').value;
    const cmp_name = document.querySelector('.cmp_name').value;
    const email = document.querySelector('.email').value;
    const phone = document.querySelector('.phone').value;
    const subject = document.querySelector('.subject').value;
    const message = document.querySelector('.message').value;
    // console.log(`${message}`);

    document.querySelector('.contact-form').reset();

    Email.send({
        Host: "smtp.gmail.com",
        Username: "lulsegedwork@gmail.com",
        Password: "mycgcxbhjijqfkiq",
        To: "lulsegedwork@gmail.com",
        From: "lulsegedwork@gmail.com"
        // Subject: `${name} has sent you a message`,
        // Body: `Name: ${name} <br/> 
        //         Company Name: ${cmp_name} <br/>
        //         Email: ${email} <br/>
        //         Phone: ${phone} <br/>
        //         Subject: ${subject} <br/> 
        //         Message: ${message}`,
    }).then((message) => alert('Email has been sent!'));
}
