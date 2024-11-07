window.onload = () => {
    getData();
};

function getData() {
    const formData = JSON.parse(localStorage.getItem("formData")) || [];
    let htmlContent = '';
    formData.forEach((element,index) => {
        if (element.name && element.vehicle_number && element.service_type) {
            htmlContent = htmlContent +
                    `<tr class="service-row" id="row-${index}">
                        <td>${element.name}</td>
                        <td>${element.vehicle_number}</td>
                        <td>${element.phone_number}</td>
                        <td>
                        <select onchange="changeCellColor(${index}, this)">
                            <option value="blank"></option>
                            <option value="completed" ${element.service_status === 'completed' ? 'selected' : ''}>Completed</option>
                            <option value="in_progress" ${element.service_status === 'in_progress' ? 'selected' : ''}>In Progress</option>
                            <option value="pending" ${element.service_status === 'pending' ? 'selected' : ''}>Pending</option>
                        </select>
                        </td>
                    </tr>`;
        }
    });
    const tbody = document.querySelector("#service-info tbody");
    tbody.innerHTML = htmlContent;
    
};

function changeCellColor(index, selectElement) {
    const formData = JSON.parse(localStorage.getItem("formData")) || [];
    const selectedStatus = selectElement.value;
    const row = document.getElementById(`row-${index}`);

    if (selectedStatus === 'completed') {
        row.style.backgroundColor = '#4CAF50';
    } else if (selectedStatus === 'in_progress') {
        row.style.backgroundColor = '#2196F3';
    } else if (selectedStatus === 'pending') {
        row.style.backgroundColor = '#F44336';
    } else {
        row.style.backgroundColor = '#FFFFFF';
    }

    formData[index].service_status = selectedStatus;
    localStorage.setItem("formData", JSON.stringify(formData));
};
