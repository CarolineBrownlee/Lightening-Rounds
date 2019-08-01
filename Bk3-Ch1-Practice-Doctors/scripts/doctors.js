const doctorContainer = document.querySelector("#doctor")

const render = (doctorString) => {
    doctorContainer.innerHTML += doctorString
}


const createDoctor = (
    name,
    specialty,
    address, 
    cityState,
    zip
) => {
    return {
        toString(){
            return `Dr. ${this.doctorName} is a ${this.specialty} located at ${this.address.address}, ${this.address.cityState}, ${this.address.postalCode}`
        },
        doctorName: name,
        specialty: specialty,
        address: {
            address: address,
            cityState: cityState,
            postalCode: zip
        }
    }
}

const Joe = createDoctor (
    "Joe Smith",
    "Pediatrician",
    "129 Main Street",
    "Hendersonville, Tennessee",
    "37075"
)

console.log(Joe.toString())