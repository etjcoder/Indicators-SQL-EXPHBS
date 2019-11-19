$(document).ready(function() { 

$("#cashflow-prospect-dial").on("click", function(event){
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
    setTimeout(function() {

        var id = 1

        var newDials = {
            dials: newTotalDials,
            prospect_dials: newPDials,
            cashflow_prospect_dials: newCPDials
        }

        $.ajax("/api/protege/cpdials/" + id, {
            type: "PUT",
            data: newDials
        }).then(function() {
            console.log("You've updated the dial count!")
            location.reload()
        })

    }, 500)
})



$("#businessowner-prospect-dial").on("click", function(event){
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


    setTimeout( function() { 

        var id = 1;

    var newDials = {
        dials: newTotalDials,
        prospect_dials: newPDials,
        businessowner_prospect_dials: newBPDials
    }

    $.ajax("/api/protege/bpdials/" + id, {
        type: "PUT",
        data: newDials
    }).then(function() {
        console.log("You've updated the dial count!")
        location.reload()
    })

}, 500)

})

$("#cashflow-client-dial").on("click", function(event){
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


    setTimeout( function() { 

        var id = 1;

    var newDials = {
        dials: newTotalDials,
        client_dials: newCDials,
        cashflow_client_dials: newCCDials
    }

    $.ajax("/api/protege/ccdials/" + id, {
        type: "PUT",
        data: newDials
    }).then(function() {
        console.log("You've updated the dial count!")
        location.reload()
    })

}, 500)
})


$("#businessowner-client-dial").on("click", function(event){
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


    setTimeout( function() { 

        var id = 1;

    var newDials = {
        dials: newTotalDials,
        client_dials: newCDials,
        businessowner_client_dials: newBCDials
    }

    $.ajax("/api/protege/bcdials/" + id, {
        type: "PUT",
        data: newDials
    }).then(function() {
        console.log("You've updated the dial count!")
        location.reload()
    })

}, 500)
})

$("#prospect-contact").on("click", function(event) {
    var currentPContacts = parseInt($("#prospect-contact").val())
    var currentCContacts = parseInt($("#client-contact").val())
    var totalContacts = currentPContacts + currentCContacts;

    var newPContacts = currentPContacts + 1;
    var newTotalContacts = totalContacts + 1;

    setTimeout(function() {
        var newContacts = {
            contacts: newTotalContacts,
            prospect_contacts: newPContacts
        }

        var id = 1;

        $.ajax("/api/protege/pcontacts/" + id, { 
            type: "PUT",
            data: newContacts
        }).then(function() {
            console.log("You've updated the contact count!");
            location.reload();
        })

    }, 500)

})

$("#client-contact").on("click", function(event) {
    
    var currentPContacts = parseInt($("#prospect-contact").val())
    var currentCContacts = parseInt($("#client-contact").val())
    var totalContacts = currentPContacts + currentCContacts;

    var newCContacts = currentCContacts + 1;
    var newTotalContacts = totalContacts + 1;

    setTimeout(function() {
        var newContacts = {
            contacts: newTotalContacts,
            client_contacts: newCContacts
        }

        var id = 1;

        $.ajax("/api/protege/ccontacts/" + id, { 
            type: "PUT",
            data: newContacts
        }).then(function() {
            console.log("You've updated the contact count!");
            location.reload();
        })

    }, 500)

    
})

$("#new-prospect-appointment").on("click", function(event){
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

    setTimeout(function() {

        var id = 1;

        var newAppointments = {
            scheduled_appointments: newTotalAppts,
            new_appointments: newNewAppts,
            prospect_appointments: newProspAppts
        }

        $.ajax("/api/protege/newappts/" + id, {
            type: "PUT",
            data: newAppointments
        }).then(function() {
            console.log("You've updated the appointment count!");
            location.reload();
        })


    })


})

$("#prospect-appointment").on("click", function(event) {
    event.preventDefault();

    // var currentNewAppts = parseInt($("#new-prospect-appointment").val())
    var currentProspAppts = parseInt($("#prospect-appointment").val())
    var currentClientAppts = parseInt($("#client-appointment").val())


    var currentTotalAppts = currentProspAppts + currentClientAppts

    var newProspAppts = currentProspAppts + 1;
    var newTotalAppts = currentTotalAppts + 1;

    setTimeout(function() {

        var id = 1;

        var newAppointments = {
            scheduled_appointments: newTotalAppts,
            prospect_appointments: newProspAppts
        }

        $.ajax("/api/protege/newappts/" + id, {
            type: "PUT",
            data: newAppointments
        }).then(function() {
            console.log("You've updated the appointment count!");
            location.reload();
        })


    })
})

$("#client-appointment").on("click", function(event) {
    event.preventDefault();

    // var currentNewAppts = parseInt($("#new-prospect-appointment").val())
    var currentProspAppts = parseInt($("#prospect-appointment").val())
    var currentClientAppts = parseInt($("#client-appointment").val())


    var currentTotalAppts = currentProspAppts + currentClientAppts

    var newClientAppts = currentClientAppts + 1;
    var newTotalAppts = currentTotalAppts + 1;

    setTimeout(function() {

        var id = 1;

        var newAppointments = {
            scheduled_appointments: newTotalAppts,
            client_appointments: newClientAppts
        }

        $.ajax("/api/protege/newappts/" + id, {
            type: "PUT",
            data: newAppointments
        }).then(function() {
            console.log("You've updated the appointment count!");
            location.reload();
        })


    })
})

$("#create-note").on("submit", function(event) {
    event.preventDefault()
    console.log("Created a note: ")
    console.log($("#note-input").val().trim())
})



})