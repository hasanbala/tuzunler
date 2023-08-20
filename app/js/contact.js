export class Contact {
  constructor() {
    this.formName = document.querySelector(".formName");
    this.formEmail = document.querySelector(".formEmail");
    this.formSubject = document.querySelector(".formSubject");
    this.formMessage = document.querySelector(".formMessage");
  }

  sendFormDataToServer(e) {
    e.preventDefault();
    const name = this.formName.value.trim();
    const email = this.formEmail.value.trim();
    const subject = this.formSubject.value.trim();
    const message = this.formMessage.value.trim();

    if (name && email && subject && message) {
      const data = { name, email, subject, message };

      fetch("/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then(() => alert("Mesajınız başarılı bir şekilde gönderilmiştir"))
        .catch((error) => console.log(error))
        .finally(() => {
          this.formName.value = "";
          this.formEmail.value = "";
          this.formSubject.value = "";
          this.formMessage.value = "";
        });
    } else {
      alert("Lütfen tüm alanları doldurun");
    }
  }
}
