import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>Procure - {title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </Helmet>
  )
}

export default SEO
