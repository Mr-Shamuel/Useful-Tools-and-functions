export const ConvertDateToBN = (time) => {
    const formattedDate = time.toLocaleDateString("bn-BD", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    
    return formattedDate;
};


// call this to convert date
// ConvertDateToBN(new Date(filteredData?.apaDraftOrFinalDetails?.submissionStart))  
