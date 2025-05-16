// Kiểm tra đầu vào hợp lệ của form
const form_contact = document.querySelector('.frm-contact');
const input_name = document.getElementById('name');
const input_phone = document.getElementById('phone');
const input_email = document.getElementById('email');
const input_subject = document.getElementById('subject');
const input_message = document.getElementById('message');
const btn_submit = document.getElementById('btn-submit');

input_name.addEventListener('change', function () {
    if (input_name.value) {
        const check = /^[\p{L}\s]+$/u.test(input_name.value);
        if (!check) {
            input_name.setCustomValidity('Tên không được chứa kí tự đặc biệt');
        }
        else {
            input_name.setCustomValidity('');
        }
    } else if (input_name.value == '') {
        input_name.setCustomValidity('Vui lòng nhập tên của bạn!');
    }
});

input_phone.addEventListener('change', function () {
    if (input_phone.value) {
        const check = /^(03|05|07|08|09)[0-9]{8}$/.test(input_phone.value);
        if (!check) {
        input_phone.setCustomValidity('Số điện thoại có đầu là 03, 05, 07, 08 hoặc 09 và có 10 số!');
        }
        else {
            input_phone.setCustomValidity('');
        }
    } else if (input_phone.value == '') {
        input_phone.setCustomValidity('Vui lòng nhập số điện thoại của bạn');
    }
});

input_subject.addEventListener('change', function () {
    if (input_subject.value) {
        const check = /^[\p{L}\s]+$/u.test(input_subject.value);
        if (!check) {
        input_subject.setCustomValidity('Tiêu đề không được chứa kí tự đặc biệt!');
        }
        else {
            input_subject.setCustomValidity('');
        }
    } else if (input_subject.value == '') {
        input_subject.setCustomValidity('Vui lòng nhập tiêu đề!');
    }
});

input_email.addEventListener('change', function () {
  if (input_email.value) {
    const check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input_email.value);
    if (!check) {
      input_email.setCustomValidity(`Cần một kí tự '@' trong email của bạn`);
    }
    else {
      input_email.setCustomValidity('');
    }
  } else if (input_email.value == '') {
    input_email.setCustomValidity('Vui lòng nhập email của bạn');
  }
});

input_message.addEventListener('change', function () {
    if (input_message.value.trim().length < 10) {
        input_message.setCustomValidity('Lời nhắn phải có ít nhất 10 ký tự!');
    } else {
        input_message.setCustomValidity('');
    }
});

form_contact.addEventListener('submit', function (e) {
    e.preventDefault(); 

    input_name.dispatchEvent(new Event('change'));
    input_phone.dispatchEvent(new Event('change'));
    input_email.dispatchEvent(new Event('change'));
    input_subject.dispatchEvent(new Event('change'));
    input_message.dispatchEvent(new Event('change'));

    if (form_contact.checkValidity()) {
        alert('Gửi thành công');
        form_contact.reset(); 
    } else {
        form_contact.reportValidity();
    }
});