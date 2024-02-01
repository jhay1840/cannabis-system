import React, { useState } from 'react'
import { Document, Page } from 'react-pdf'

const PDFViewerComponent = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState()
  const [pageNumber, setPageNumber] = useState(1)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  return (
    <div>
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  )
}

export default PDFViewerComponent
