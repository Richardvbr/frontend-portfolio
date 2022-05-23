import GlobalStyle from 'src/styles/globalStyles';
import Header from '../components/header';
import About from '../components/about';
import Experience from 'src/components/experience';
import ProjectsOverview from 'src/components/projects/projects-overview';
import Footer from 'src/components/footer';

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <About />
      <Experience />
      <ProjectsOverview />
      <Footer />
    </div>
  );
}
