import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const IndexPage = () => {
  return(
    <Layout>
      <SEO title="Home" />
      <div style={{maxWidth:900, marginBottom:'2rem'}}>
        <h1>A directory of women investors and founders in Florida</h1>
        <p>This is a list of Florida-based women co-founders of technology or tech-enabled startups and/or women currently working in an investment-focused role across institutional or corporate funds or angel investor networks.</p>
        If there's a founder we didn't surface, you can <Link to="/add-founder">add a founder</Link>. If there's an investor we didn't surface, you can <Link to="/add-investor">add an investor</Link>.
      </div>
      <iframe title="airtable-embed" src="https://airtable.com/embed/shrqDuaRFZy94LntR?backgroundColor=transparent" frameborder="0" onmousewheel="" width="100%" height="900px" style={{background: '#89e1cf', border: '1px solid #ccc'}}></iframe>
    </Layout>
  )
}

export default IndexPage;