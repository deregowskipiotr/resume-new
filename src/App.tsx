import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { Layout } from "./components/layout";
import HomeHero from "./components/HomeHero";
import AboutSection from "./components/About";
import { ExperienceSection } from "./components/ExperienceSection";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={null}>
        <Layout>
          {/* Hero will go here */}
          <div className="min-h-screen flex flex-col items-center justify-center">
            <HomeHero />
            <AboutSection />
            <ExperienceSection />
          </div>
        </Layout>
      </Suspense>
    </I18nextProvider>
  );
}

export default App;
