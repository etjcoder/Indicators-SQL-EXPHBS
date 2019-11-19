$(document).ready(function () {

    var currentCPDials = parseInt($("#cashflow-prospect-dial").val());
    var currentBPDials = parseInt($("#businessowner-prospect-dial").val());
    var totalPDials = currentCPDials + currentBPDials;
    var currentCCDials = parseInt($("#cashflow-client-dial").val());
    var currentBCDials = parseInt($("#businessowner-client-dial").val())
    var totalCDials = currentCCDials + currentBCDials;
    var currentPContacts = parseInt($("#prospect-contact").val())
    var currentCContacts = parseInt($("#client-contact").val())
    var totalContacts = currentPContacts + currentCContacts;
    var currentNewAppts = parseInt($("#new-prospect-appointment").val())
    var currentProspAppts = parseInt($("#prospect-appointment").val())
    var currentClientAppts = parseInt($("#client-appointment").val())
    var currentTotalAppts = currentProspAppts + currentClientAppts
    var totalDials = totalPDials + totalCDials

    var ctx = $("#myChart");
    var contactChart = $("#myChart2")
    var dialsDoughnut = $("#dialsDoughnut");
    var contactsDoughnut = $("#contactsDoughnut");
    var apptDoughnut = $("#apptDoughnut")
    var radarChart = $("#myRadar");

    var radarChart = new Chart(radarChart, {
        type: 'radar',
        theme: 'dark1',
        data: {
            labels: [
                'Total Prospect Contacts', 'Total Client Contacts', 'Total New Appointments', 'Total Prospect Appointments', 'Total Client Appointments',],
            datasets: [{
                label: 'Overall',
                data: [
                    currentPContacts, currentCContacts, currentNewAppts, currentProspAppts, currentClientAppts],
                backgroundColor: [
                    // 'rgba(226,199,161,0.5)',
                    // 'rgba(155,245,161,0.5)',
                    // 'rgba(240,65,216,0.5)',
                    // 'rgba(221,43,85,0.5)',
                    // 'rgba(165,236,104,0.5)',
                    // 'rgba(44,21,245,0.5)',
                    'rgba(22,107,196,0.5)',
                    'rgba(179,90,97,0.5)',
                    'rgba(40,115,9,0.5)',
                    'rgba(255,157,21,0.5)',
                    'rgba(181,123,221,0.5)',
                    'rgba(173,60,33,0.5)',
                    // 'rgba(82,96,186,0.5)',
                    // 'rgba(159,178,218,0.5)'
                ],
                borderColor: [
                    // 'rgba(226,199,161,0.5)',
                    // 'rgba(155,245,161,0.5)',
                    // 'rgba(240,65,216,0.5)',
                    // 'rgba(221,43,85,0.5)',
                    // 'rgba(165,236,104,0.5)',
                    // 'rgba(44,21,245,0.5)',
                    'rgba(22,107,196,0.5)',
                    'rgba(179,90,97,0.5)',
                    'rgba(40,115,9,0.5)',
                    'rgba(255,157,21,0.5)',
                    'rgba(181,123,221,0.5)',
                    'rgba(173,60,33,0.5)',
                    // 'rgba(82,96,186,0.5)',
                    // 'rgba(159,178,218,0.5)'
                ],
                borderWidth: 0.5
            }]
        },
        options: {
            scale: {
                ticks: {
                    beginAtZero: true,
                    max: 14,
                    min: 0,
                    stepSize: 2
                }
            }
        }
    })

    var dialChart = new Chart(dialsDoughnut, {
        type: 'doughnut',
        data: {
            labels: ['Cashflow Prospect Dials', 'Businessowner Prospect Dials', 'Cashflow Client Dials', 'Businessowner Client Dials'],
            datasets: [{
                label: 'Dials',
                data: [currentCPDials, currentBPDials, currentCCDials, currentBCDials],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba (255,206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba (255,206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)'
                ],
                borderWidth: 1
            }]
        }
    })

    var apptsChart = new Chart(apptDoughnut, {
        type: 'doughnut',
        data: {
            labels: ['New Appointments', 'Prospect Appointments', 'Client Appointments'],
            datasets: [{
                label: 'Appointments',
                data: [currentNewAppts, currentProspAppts, currentClientAppts],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],
                borderWidth: 1
            }]
        }
    })

    var contactChart2 = new Chart(contactsDoughnut, {
        type: 'doughnut',
        data: {
            labels: ['Prospect Contacts', 'Client Contacts'],
            datasets: [{
                label: 'Something',
                data: [currentPContacts, currentCContacts],
                backgroundColor: [
                    'rgba (255,206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)'
                ],
                borderColor: [
                    'rgba (255,206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)'
                ],
                borderWidth: 1
            }]
        }
    })



    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Dials', 'Prospect Dials', 'Client Dials'],
            datasets: [{
                label: 'Dials',
                data: [totalDials, totalPDials, totalCDials],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    })

    var myChart2 = new Chart(contactChart, {
        type: 'bar',
        data: {
            labels: ['Contacts', 'New Appointments', 'Appointments'],
            datasets: [{
                label: 'Contacts',
                data: [totalContacts, currentNewAppts, currentTotalAppts],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    })


    $("#cashflow-prospect-dial").on("click", function (event) {
        event.preventDefault()
        var currentCPDials = parseInt($("#cashflow-prospect-dial").val());
        var currentBPDials = parseInt($("#businessowner-prospect-dial").val());
        var totalPDials = currentCPDials + currentBPDials;

        var currentCCDials = parseInt($("#cashflow-client-dial").val());
        var currentBCDials = parseInt($("#businessowner-client-dial").val())
        var totalCDials = currentCCDials + currentBCDials;


        var totalDials = totalPDials + totalCDials

        console.log(`Businessowners Prospect Dials: ${currentBPDials}`)
        console.log(`Current Cashflow-Prospect Dials: ${currentCPDials}`)
        console.log(`Current Prospect Dials: ${totalPDials}`)
        console.log(`Current Dials: ${totalDials}`)

        var newCPDials = currentCPDials + 1;
        var newPDials = totalPDials + 1;
        var newTotalDials = totalDials + 1;
        console.log("new cashflow prospect dials: " + newCPDials);
        console.log("new total prospect dials: " + newPDials)
        console.log("new total dials: " + newTotalDials)
        setTimeout(function () {

            var id = 1

            var newDials = {
                dials: newTotalDials,
                prospect_dials: newPDials,
                cashflow_prospect_dials: newCPDials
            }

            $.ajax("/api/protege/cpdials/" + id, {
                type: "PUT",
                data: newDials
            }).then(function () {
                console.log("You've updated the dial count!")
                location.reload()
            })

        }, 500)
    })



    $("#businessowner-prospect-dial").on("click", function (event) {
        event.preventDefault()
        var currentCPDials = parseInt($("#cashflow-prospect-dial").val());
        var currentBPDials = parseInt($("#businessowner-prospect-dial").val());
        var totalPDials = currentCPDials + currentBPDials;

        var currentCCDials = parseInt($("#cashflow-client-dial").val());
        var currentBCDials = parseInt($("#businessowner-client-dial").val())
        var totalCDials = currentCCDials + currentBCDials;


        var totalDials = totalPDials + totalCDials

        console.log(`Current Businessowners Prospect Dials: ${currentBPDials}`)
        console.log(`Current Prospect Dials: ${totalPDials}`)
        console.log(`Current Dials: ${totalDials}`)

        var newBPDials = currentBPDials + 1;
        var newPDials = totalPDials + 1;
        var newTotalDials = totalDials + 1;
        console.log("new businessowner prospect dials: " + newBPDials);
        console.log("new total prospect dials: " + newPDials)
        console.log("new total dials: " + newTotalDials)


        setTimeout(function () {

            var id = 1;

            var newDials = {
                dials: newTotalDials,
                prospect_dials: newPDials,
                businessowner_prospect_dials: newBPDials
            }

            $.ajax("/api/protege/bpdials/" + id, {
                type: "PUT",
                data: newDials
            }).then(function () {
                console.log("You've updated the dial count!")
                location.reload()
            })

        }, 500)

    })

    $("#cashflow-client-dial").on("click", function (event) {
        event.preventDefault()
        var currentCPDials = parseInt($("#cashflow-prospect-dial").val());
        var currentBPDials = parseInt($("#businessowner-prospect-dial").val());
        var totalPDials = currentCPDials + currentBPDials;

        var currentCCDials = parseInt($("#cashflow-client-dial").val());
        var currentBCDials = parseInt($("#businessowner-client-dial").val())
        var totalCDials = currentCCDials + currentBCDials;


        var totalDials = totalPDials + totalCDials

        console.log(`Current Cashflow Client Dials: ${currentCCDials}`)
        console.log(`Current Client Dials: ${totalCDials}`)
        console.log(`Current Dials: ${totalDials}`)

        var newCCDials = currentCCDials + 1;
        var newCDials = totalCDials + 1;
        var newTotalDials = totalDials + 1;
        console.log("new cashflow client dials: " + newCCDials);
        console.log("new total client dials: " + newCDials)
        console.log("new total dials: " + newTotalDials)


        setTimeout(function () {

            var id = 1;

            var newDials = {
                dials: newTotalDials,
                client_dials: newCDials,
                cashflow_client_dials: newCCDials
            }

            $.ajax("/api/protege/ccdials/" + id, {
                type: "PUT",
                data: newDials
            }).then(function () {
                console.log("You've updated the dial count!")
                location.reload()
            })

        }, 500)
    })


    $("#businessowner-client-dial").on("click", function (event) {
        event.preventDefault()
        var currentCPDials = parseInt($("#cashflow-prospect-dial").val());
        var currentBPDials = parseInt($("#businessowner-prospect-dial").val());
        var totalPDials = currentCPDials + currentBPDials;

        var currentCCDials = parseInt($("#cashflow-client-dial").val());
        var currentBCDials = parseInt($("#businessowner-client-dial").val())
        var totalCDials = currentCCDials + currentBCDials;


        var totalDials = totalPDials + totalCDials

        console.log(`Current Businessowner Client Dials: ${currentBCDials}`)
        console.log(`Current Client Dials: ${totalCDials}`)
        console.log(`Current Dials: ${totalDials}`)

        var newBCDials = currentBCDials + 1;
        var newCDials = totalCDials + 1;
        var newTotalDials = totalDials + 1;
        console.log("new businessowner client dials: " + newBCDials);
        console.log("new total client dials: " + newCDials)
        console.log("new total dials: " + newTotalDials)


        setTimeout(function () {

            var id = 1;

            var newDials = {
                dials: newTotalDials,
                client_dials: newCDials,
                businessowner_client_dials: newBCDials
            }

            $.ajax("/api/protege/bcdials/" + id, {
                type: "PUT",
                data: newDials
            }).then(function () {
                console.log("You've updated the dial count!")
                location.reload()
            })

        }, 500)
    })

    $("#prospect-contact").on("click", function (event) {
        var currentPContacts = parseInt($("#prospect-contact").val())
        var currentCContacts = parseInt($("#client-contact").val())
        var totalContacts = currentPContacts + currentCContacts;

        var newPContacts = currentPContacts + 1;
        var newTotalContacts = totalContacts + 1;

        setTimeout(function () {
            var newContacts = {
                contacts: newTotalContacts,
                prospect_contacts: newPContacts
            }

            var id = 1;

            $.ajax("/api/protege/pcontacts/" + id, {
                type: "PUT",
                data: newContacts
            }).then(function () {
                console.log("You've updated the contact count!");
                location.reload();
            })

        }, 500)

    })

    $("#client-contact").on("click", function (event) {

        var currentPContacts = parseInt($("#prospect-contact").val())
        var currentCContacts = parseInt($("#client-contact").val())
        var totalContacts = currentPContacts + currentCContacts;

        var newCContacts = currentCContacts + 1;
        var newTotalContacts = totalContacts + 1;

        setTimeout(function () {
            var newContacts = {
                contacts: newTotalContacts,
                client_contacts: newCContacts
            }

            var id = 1;

            $.ajax("/api/protege/ccontacts/" + id, {
                type: "PUT",
                data: newContacts
            }).then(function () {
                console.log("You've updated the contact count!");
                location.reload();
            })

        }, 500)


    })

    $("#new-prospect-appointment").on("click", function (event) {
        event.preventDefault();

        var currentNewAppts = parseInt($("#new-prospect-appointment").val())
        var currentProspAppts = parseInt($("#prospect-appointment").val())
        var currentClientAppts = parseInt($("#client-appointment").val())

        console.log($("#prospect-appointment").val())
        console.log($("#client-appointment").val())

        var currentTotalAppts = currentProspAppts + currentClientAppts

        var newNewAppts = currentNewAppts + 1;
        var newProspAppts = currentProspAppts + 1;
        var newTotalAppts = currentTotalAppts + 1;
        console.log(newTotalAppts)

        setTimeout(function () {

            var id = 1;

            var newAppointments = {
                scheduled_appointments: newTotalAppts,
                new_appointments: newNewAppts,
                prospect_appointments: newProspAppts
            }

            $.ajax("/api/protege/newappts/" + id, {
                type: "PUT",
                data: newAppointments
            }).then(function () {
                console.log("You've updated the appointment count!");
                location.reload();
            })


        })


    })

    $("#prospect-appointment").on("click", function (event) {
        event.preventDefault();

        // var currentNewAppts = parseInt($("#new-prospect-appointment").val())
        var currentProspAppts = parseInt($("#prospect-appointment").val())
        var currentClientAppts = parseInt($("#client-appointment").val())


        var currentTotalAppts = currentProspAppts + currentClientAppts

        var newProspAppts = currentProspAppts + 1;
        var newTotalAppts = currentTotalAppts + 1;

        setTimeout(function () {

            var id = 1;

            var newAppointments = {
                scheduled_appointments: newTotalAppts,
                prospect_appointments: newProspAppts
            }

            $.ajax("/api/protege/newappts/" + id, {
                type: "PUT",
                data: newAppointments
            }).then(function () {
                console.log("You've updated the appointment count!");
                location.reload();
            })


        })
    })

    $("#client-appointment").on("click", function (event) {
        event.preventDefault();

        // var currentNewAppts = parseInt($("#new-prospect-appointment").val())
        var currentProspAppts = parseInt($("#prospect-appointment").val())
        var currentClientAppts = parseInt($("#client-appointment").val())


        var currentTotalAppts = currentProspAppts + currentClientAppts

        var newClientAppts = currentClientAppts + 1;
        var newTotalAppts = currentTotalAppts + 1;

        setTimeout(function () {

            var id = 1;

            var newAppointments = {
                scheduled_appointments: newTotalAppts,
                client_appointments: newClientAppts
            }

            $.ajax("/api/protege/newappts/" + id, {
                type: "PUT",
                data: newAppointments
            }).then(function () {
                console.log("You've updated the appointment count!");
                location.reload();
            })


        })
    })

    $("#create-note").on("submit", function (event) {
        event.preventDefault()
        console.log("Created a note: ")
        console.log($("#note-input").val().trim())
    })



})