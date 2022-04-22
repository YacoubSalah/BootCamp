
const computerDB = computerDataBase()

generatorClicked = function () {
    let processorID = $(this).closest(".processor").attr('id')
    console.log("Processor ID:", processorID)

    let computerID = $(this).closest(".computer").data("id")
    computerDB.pushCompID(computerID)
    console.log("Computer ID: ", computerID)

    let busNumber = $(this).closest(".computer").find(".BUS").html()
    console.log("Bus Number: ", busNumber)
}

validatorClicked = function () {
    let generator = $(this).closest(".computer").find(".generator").html()
    console.log("Generator: ", generator)

    let mb = $(this).closest(".computer").find(".MB").html()
    console.log("MB: ", mb)

    let qr1 = $(this).closest(".computer").find(".QR").eq(0).html()
    console.log("First QR: ", qr1)

    let qr2 = $(this).closest(".computer").find(".QR").eq(1).html()
    console.log("Second QR: ", qr2)
}


$(".generator").on("click", generatorClicked)
$(".validator").on("click", validatorClicked)