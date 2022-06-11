const pdf = require("pdfjs");
const fs = require("fs");

/**
 *
 * @param {Number} pageCount Page Count of the PDF
 * @param {Number} signature The number of pages per signature
 * @returns reordered pages
 */
function processing(pageCount, signature) {
  if ((pageCount / signature) % 1 !== 0) throw new Error("Invalid page count");

  const pagesPerSignature = pageCount / signature;

  let bindings = [];
  let pages = [];
  for (let x = 1; x <= pageCount / pagesPerSignature; x += 1) {
    let section = [];
    for (let y = 0; y < pagesPerSignature / 2; y += 1) {
      let item = [];
      if (y % 2 === 0) {
        item = [pagesPerSignature * x - y, pagesPerSignature * (x - 1) + y + 1];
      }
      if (y % 2 === 1) {
        item = [pagesPerSignature * (x - 1) + y + 1, pagesPerSignature * x - y];
      }
      section.push(item);
      pages.push(...item);
    }

    bindings.push(section);
  }

  return { pages, bindings };
}

async function pdfHandler(src, signatures, output = "output.pdf") {
  const doc = new pdf.Document({
    font: require("pdfjs/font/Helvetica"),
    padding: 10,
  });

  const loadedSource = new pdf.ExternalDocument(fs.readFileSync(src));

  const document = processing(loadedSource.pageCount, signatures);

  doc.pipe(fs.createWriteStream(output));

  document.pages.forEach((page) => {
    doc.addPageOf(page, loadedSource);
  });

  await doc.end();

  return {
    pageCount: document.pages.length,
    output,
    pages: document.pages,
    bindings: document.bindings,
  };
}

(async () => {
  try {
    const argv = process.argv.splice(2);
    const src = argv[0];
    const signatures = argv[1];
    const output = argv[2];

    if (!src || !signatures) {
      console.error(
        "[USAGE] yat-booklet <source.pdf> <signatures count> [output.pdf]"
      );
      process.exit(2);
    }

    if (!src || !src.includes(".pdf"))
      throw new Error("The 'source' must be a PDF");
    if (!signatures || isNaN(signatures))
      throw new Error("The 'signatures count' must be a number");
    if (output && !output.includes(".pdf"))
      throw new Error("The 'output' must be a PDF");

    const info = await pdfHandler(src, signatures, output);
    console.log(
      `Document processed with success !
Saved to '${info.output}'
Summary: '${info.pageCount}' pages split into '${signatures}' signature(s)`
    );
    if (process.env.PREVIEW === "true" || process.env.PREVIEW === "1")
      console.debug(info.bindings);
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
})();
