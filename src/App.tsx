import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

import { Footer } from "@/layouts/components/Footer";
import { Header } from "@/layouts/components/Header";
import i18n from "@/locales/i18n.config";
import { AppRouter } from "@/routes/AppRouter";
import { LanguageDetectorGuard } from "@/routes/components/LanguageDetectorGuard";
import { useSetHtmlLang } from "@/shared/hooks/useSetHtmlLang";

const App: React.FC = () => {
  useSetHtmlLang();

  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <LanguageDetectorGuard>
          <Header />
          <main className='min-h-screen'>
            <AppRouter />
          </main>
          <Footer />
        </LanguageDetectorGuard>
      </BrowserRouter>
    </I18nextProvider>
  );
};

export default App;
