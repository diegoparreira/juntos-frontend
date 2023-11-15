import { useState } from 'react'
import { Document, Page } from 'react-pdf';

export default function PDFViewer({link}) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({numPages}) => {
    setNumPages(numPages);
  } 

  return (
    <div>
      <Document file={link} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  )
}


