document.getElementById("vsform").addEventListener("submit", (event) => {
    event.preventDefault();

    const data = {
        name: event.target.name.value,
        phone_number: event.target.phone_number.value,
        email: event.target.mail.value,
        vehicle_brand: event.target.brand_name.value,
        manufacture_year: event.target.manufacture_year.value,
        vehicle_number: event.target.vehicle_number.value,
        mileage: event.target.kms_driven.value,
        service_type: event.target.service_type.value,
        date: event.target.service_date.value,
        service_status:'blank'
    };

    console.log(data);

    let alldata = JSON.parse(localStorage.getItem("formData")) || [];

    alldata.push(data);

    localStorage.setItem("formData", JSON.stringify(alldata));

    setTimeout(() => {
        window.alert("Thank you! We have received your details! You will be redirected to the Main Page.");
        window.location.href = "index.html";
    }, 2000);
});