import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const Form = () => {
  return(
    <Layout>
      <SEO title="Add an investor" />
      <div style={{maxWidth:900}}>
        <div>
          <h1>Add an investor</h1>
          <iframe title="airtable-form" class="airtable-form-embed" src="https://airtable.com/embed/shrfpmdpPNdq3O66d?backgroundColor=orange" frameborder="0" onmousewheel="" width="100%" height="900px" style={{background: '#ffc730', border: '1px solid #ccc'}}></iframe>
        </div>
        <div>
          <Link to="/">Go Back Home</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Form;