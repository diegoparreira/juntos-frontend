import { MDBBtn } from 'mdb-react-ui-kit';
import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function PDFViewer({ link }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePageChange = newPageNumber => {
    setPageNumber(newPageNumber);
  };

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div className="pdf-viewer-container d-flex flex-column mx-auto justify-content-center">
      <div className="page-navigation">
        <MDBBtn onClick={goToPreviousPage} disabled={pageNumber <= 1}>
          Previous
        </MDBBtn>
        <MDBBtn onClick={goToNextPage} disabled={pageNumber >= numPages}>
          Next
        </MDBBtn>
      </div>
      <Document
        file={link}
        onLoadSuccess={onDocumentLoadSuccess}
        className="pdf-document"
      >
        <Page
          pageNumber={pageNumber}
          className="pdf-page"
          renderMode="svg"
          width={600}
          onPageChange={({ pageNumber }) => handlePageChange(pageNumber)}
        />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

