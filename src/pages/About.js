import React from 'react'
import Layout from './Layout'
import Booklist from '../components/booklist';
import Posts from '../components/posts';

function About() {
  return (
    <Layout>
      <div>About</div>
      
      <Booklist></Booklist>
    </Layout>
  );
}

export default About