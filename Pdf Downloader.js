import html2pdf from "html2pdf.js";

  const exportPdf = async () => {
    const content = document.getElementById("content");
    content.style.fontSize = "6px";
    content.style.width = `${window.innerWidth}px`;
    const initialScrollHeight = content.scrollHeight;
    content.style.height = initialScrollHeight + "px";
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise((resolve) => setTimeout(resolve, 100));
    const options = {
      // margin: [5, 10, 5, 10],
      margin: [4, 10, 4, 10],
      filename: "apa_structure.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "ledger", orientation: "landscape" },
      pagebreak: { mode: "avoid-all", before: ".page-break-class" },
    };

    html2pdf().from(content).set(options).save();
    content.style.width = "";
    content.style.height = "";
    content.style.fontSize = "";
  };

// use id for the parent div 
// use page break for break the components
