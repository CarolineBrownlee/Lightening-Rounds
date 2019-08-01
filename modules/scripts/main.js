// calling function from data.js 
// main is where we take the other pieces and 
// put them together

getAPIData().then((jobs) => {
    for (const job of jobs.results) {
        const jobHTML = createJobHTML (job)
        renderJob(jobHTML)
    }
})