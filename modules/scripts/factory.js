const createJobHTML = (jobObject) => {
    return `
        <section class="job">
            <h1>${jobObject.role}</h1>
            <h2>${jobObject.organization}</h2>
            <aside>${jobObject.city}</aside>
        </section>
    `   
}


