
import './App.css';
import Blog from './components/Blog/Blog';
import Companies from './components/Companies/Companies';
import CuttingEdge from './components/CuttingEdge/CuttingEdge';
import Faq from './components/FAQ/Faq';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import FreeTrial from './components/FreeTrial/FreeTrial';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Layout from './components/Layout/Layout';
import Sispus from './components/Sispus/Sispus';

function App() {
  return (
    <div className="App">
      <Header/>
      <Layout>
      
        <Hero/>
        <Companies/>
        <Feature/>
        <Sispus/>
        <CuttingEdge/>
        <Faq/>
        <Blog/>
        <FreeTrial/>
        <Footer/>
      </Layout>
    </div>
  );
}

export default App;
