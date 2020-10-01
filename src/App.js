import React from 'react';
import Heading from './components/layout/Heading';
import Layout from "./components/layout/Layout";
import HomeContent from "./components/layout/HomeContent";
import './App.css';


function App() {
  return (
    <Layout>
      <HomeContent>
        <Heading title="Title from prop" subtitle="Subtitle from prop"/>
      </HomeContent>
    </Layout>
  );
}

export default App;
