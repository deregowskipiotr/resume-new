import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          navbar: {
            home: "Home",
            about: "About",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact",
            cv: "Download CV",
          },
          hero: {
            badge: "Welcome to My Professional Portfolio",
            greeting: "Hello, my name is",
            description:
              "It's a genuine pleasure to have you visit my digital resume. I invite you to explore my professional journey, expertise, and accomplishments in detail.",
            cta: "Begin Exploring My Career Journey",
            scroll: "Scroll to Explore",
            badge2: "Available for Opportunities",
            "social.linkedin": "LinkedIn",
            "social.github": "GitHub",
            "social.email": "Email",
          },
          about: {
            intro:
              "Seasoned sales professional with 20 years of proven success in FMCG sector account management and business development.",
            experience:
              "Excel at cultivating strategic, long-term relationships with key accounts across diverse channels including HoReCa, B2B, retail chains, local distributors, and modern trade.",
            achievements:
              "Demonstrate consistent excellence in customer management, market trend analysis, and driving revenue growth through exceptional service and professionalism.",
            transition:
              "Currently enhancing technical capabilities through intensive training in modern web development (JavaScript, TypeScript, React, Next.js), positioning for hybrid sales-technology roles that leverage deep commercial expertise with digital innovation.",
          },
          // English
          experience: {
            title: "Experience",
            responsibilities: "Key Responsibilities",
            "junior-key-account-manager": {
              position: "Junior Key Account Manager",
              company: "North Coast S.A.",
              location: "Warsaw",
              duration: "02/2023 – 05/2024",
              description:
                "Junior Key Account Manager at North Coast S.A., responsible for managing key accounts in the FMCG sector, including wines, spirits, and non-alcoholic drinks.",
              points: [
                "Direct collaboration with active clients – wines, spirits, and non-alcoholic drinks – Auchan and Duka.",
                "Building a database of active new clients – Carrefour, Selgros – non-alcoholic drinks category.",
                "Co-creation and realization of business strategy for clients.",
                "Trade negotiations and realization of short- and long-term sales plans.",
                "Realization of other sales and client relations supporting campaigns – including fairs, wine festivals.",
                "Coordination with company departments: trade marketing, finance, logistics.",
              ],
            },
            "bootcamp-participant": {
              position: "Participant of the 'Bootcamp Front-end'",
              company: "Kodilla",
              location: "Warsaw",
              duration: "01/2020 – 01/2022",
              description:
                "Participant of the Front-end Bootcamp, learning modern web development technologies and best practices.",
              points: [
                "Learning programming languages and technologies including HTML, CSS, RWD, BOOTSTRAP, GIT, JS, ES6, AJAX, REDUX, REACT.",
              ],
            },
            "key-account-manager-b2b": {
              position: "Key Account Manager for B2B Clients",
              company: "Cedc International",
              location: "Warsaw",
              duration: "06/2017 – 05/2020",
              description:
                "Key Account Manager for B2B Clients at Cedc International, responsible for retail chains and local distributors.",
              points: [
                "B2B Clients, retail chains, local distributors sales assumptions planning and implementation.",
                "Monitoring and reporting marketing budget spend.",
                "Development of the active Client base.",
                "Formulating and managing short-term and long-term sales plans.",
                "Working together with the marketing, finance and logistics departments.",
                "Planning and conducting activities.",
                "Coordination with field sales forces.",
              ],
            },
            "area-sales-manager": {
              position: "Area Sales Manager",
              company: "Eurocash S.A. - Premium Distributors",
              location: "Warsaw",
              duration: "05/2015 – 05/2017",
              description:
                "Area Sales Manager at Eurocash S.A. - Premium Distributors, responsible for a 12-member sales force and a large territory.",
              points: [
                "12-member sales force management.",
                "Participation in hiring new Sales Representatives.",
                "Subordinated territory sales planning (Warsaw/Radom/Płock), management of sales plans, margin plans.",
                "Execution of quality and promotion activities.",
                "Day-to-day work with Manufacturers and local Distributors.",
                "Negotiation of business terms, issuing offers, organizing logistic processes, promotional/marketing budget execution.",
                "Cooperation with Key Accounts on a daily basis, purchase analysis and planning of sales development.",
              ],
            },
            "gastronomy-sales-representative": {
              position: "Gastronomy Sales Representative",
              company: "Carey Agri / Cedc / Eurocash S.A.",
              location: "Warsaw",
              duration: "09/2006 – 05/2015",
              description:
                "Gastronomy Sales Representative at Carey Agri / Cedc / Eurocash S.A., responsible for HoReCa clients.",
              points: [
                "Implementation of sales, margin, and distribution strategies.",
                "HoReCa Customer Service (Hotels, Restaurants, Night Clubs, Pubs, Catering).",
                "Negotiation of sales terms (discounts, payment terms, purchase balance amount).",
                "Building an active Customer base.",
                "New item introduction and keeping active SKUs at a certain level.",
                "Stock level management in order to keep full Customer service.",
                "Organization of deliveries.",
              ],
            },
            "sales-representative": {
              position: "Sales Representative",
              company: "Verte sp. z o.o.",
              location: "Warsaw",
              duration: "10/2004 – 09/2006",
              description:
                "Sales Representative at Verte sp. z o.o., responsible for retail customers and press boutiques.",
              points: [
                "Retail Customer Service and press boutiques, such as Empik.",
                "Sales and maintenance of the display and new product introduction.",
                "Setting purchase conditions (prices, payment terms, deliveries).",
                "Responsibility for timely payments by Customers.",
              ],
            },
          },
          // English
          projects: {
            title: "Projects",
            intro:
              "A collection of projects created while learning modern web development and building new skills.",
            "bartenday-hq": {
              title: "BartenDay HQ",
              description:
                "Choose your mood, tell the bartender how you feel, and receive a personalized cocktail recommendation.",
              tech: [
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
                "Vite",
              ],
              live: "Live Demo",
              source: "Source Code",
            },
            "bourbon-showcase": {
              title: "Iconic Whisky Products Showcase",
              description:
                "A modern product showcase for premium bourbon, highlighting craftsmanship, tasting notes, and bottle design with smooth animations.",
              tech: [
                "React",
                "Next.js",
                "Tailwind CSS",
                "Framer Motion",
                "TypeScript",
              ],
              live: "Live Demo",
              source: "Source Code",
            },
            "resume-app": {
              title: "Landing page",
              description:
                "A clean, responsive resume builder that lets users create and export a professional CV with customizable sections and themes.",
              tech: [
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Zod",
                "React Hook Form",
              ],
              live: "Live Demo",
              source: "Source Code",
            },
          },
          // English
          contact: {
            title: "Contact",
            intro: "Let’s build something great together.",
            message: {
              1: "This is it — now you know a bit about me, my experience, and the projects I’ve built while learning modern frontend development.",
              2: "I hope you enjoyed browsing my portfolio and seeing how I turn ideas into clean, responsive interfaces.",
              3: "If you’re looking for a frontend developer who’s passionate about UX, performance, and clean code, I’d love to hear from you.",
              4: "Feel free to reach out for more information, a chat, or to discuss how I can contribute to your team.",
            },
            form: {
              name: "Your Name",
              namePlaceholder: "John Doe",
              email: "Your Email",
              emailPlaceholder: "john@example.com",
              subject: "Subject",
              subjectPlaceholder: "Frontend Developer Position",
              message: "Message",
              messagePlaceholder: "Hi, I'd like to discuss...",
              send: "Send Message",
              sending: "Sending...",
              success: "Message sent! I'll get back to you soon.",
              error: "Something went wrong. Please try again.",
            },
          },
        },
      },
      pl: {
        translation: {
          navbar: {
            home: "Strona Główna",
            about: "O Mnie",
            experience: "Doświadczenie",
            projects: "Projekty",
            contact: "Kontakt",
            cv: "Pobierz CV",
          },
          hero: {
            badge: "Witaj w Moim Profesjonalnym Portfolio",
            greeting: "Cześć, mam na imię",
            description:
              "To prawdziwa przyjemność gościć Cię w moim cyfrowym CV. Zapraszam do zapoznania się z moją ścieżką zawodową, kompetencjami i osiągnięciami.",
            cta: "Zapoznaj się z Moją Karierą Zawodową",
            scroll: "Przewiń by Eksplorować",
            badge2: "Otwarty na Nowe Możliwości",
            "social.linkedin": "LinkedIn",
            "social.github": "GitHub",
            "social.email": "Email",
          },
          about: {
            intro:
              "Doświadczony menedżer sprzedaży z 20-letnim sukcesem w zarządzaniu kluczowymi klientami i rozwoju biznesu w sektorze FMCG.",
            experience:
              "Specjalizuję się w budowaniu strategicznych, długoterminowych relacji z kluczowymi klientami w różnych kanałach: HoReCa, B2B, sieci handlowe, dystrybutorzy lokalni i handel nowoczesny.",
            achievements:
              "Regularnie osiągam doskonałe wyniki w zarządzaniu klientami, analizie trendów rynkowych i zwiększaniu przychodów dzięki profesjonalnej obsłudze i komunikacji.",
            transition:
              "Aktualnie rozwijam kompetencje techniczne poprzez intensywne szkolenie z nowoczesnego programowania webowego (JavaScript, TypeScript, React, Next.js), przygotowując się do ról sprzedażowo-technologicznych łączących doświadczenie biznesowe z innowacjami cyfrowymi.",
          },
          // Polish
          experience: {
            title: "Doświadczenie",
            responsibilities: "Kluczowe Obowiązki",
            "junior-key-account-manager": {
              position: "Junior Key Account Manager",
              company: "North Coast S.A.",
              location: "Warszawa",
              duration: "02/2023 – 05/2024",
              description:
                "Junior Key Account Manager w North Coast S.A., odpowiedzialny za zarządzanie kluczowymi klientami w sektorze FMCG, w tym winami, trunkami i napojami bezalkoholowymi.",
              points: [
                "Bezpośrednia współpraca z aktywnymi klientami – wina, trunki i napoje bezalkoholowe – Auchan i Duka.",
                "Budowanie bazy danych aktywnych nowych klientów – Carrefour, Selgros – kategoria napojów bezalkoholowych.",
                "Współtworzenie i wprowadzanie strategii biznesowej u klientów.",
                "Prowadzenie negocjacji handlowych.",
                "Realizacja długoterminowych i krótkoterminowych planów sprzedażowych.",
                "Realizacja dodatkowych akcji wspierających sprzedaż i relacje z klientami – m.in. targi, festiwale wina.",
                "Współpraca z działami wewnątrz firmy: trade marketingu, finansów, logistyki.",
              ],
            },
            "bootcamp-participant": {
              position:
                "Uczestnik kursu 'Bootcamp Front-end'/Nauka języków programowania",
              company: "Kodilla",
              location: "Warszawa",
              duration: "01/2020 – 01/2022",
              description:
                "Uczestnik kursu Front-end Bootcamp, uczący się nowoczesnych technologii programowania i najlepszych praktyk.",
              points: [
                "Nauka języków programowania oraz technologii m.in. HTML, CSS, RWD, BOOTSTRAP, GIT, JS, ES6, AJAX, REDUX, REACT.",
              ],
            },
            "key-account-manager-b2b": {
              position: "Key Account Manager ds. Klientów B2B",
              company: "Cedc International",
              location: "Warszawa",
              duration: "06/2017 – 05/2020",
              description:
                "Key Account Manager ds. Klientów B2B w Cedc International, odpowiedzialny za sieci sklepów detalicznych i lokalnych dystrybutorów.",
              points: [
                "Planowanie i realizacja założeń sprzedażowych u klientów B2B, sieci sklepów detalicznych, lokalnych dystrybutorów.",
                "Nadzorowanie i raportowanie wydatkowania budżetu marketingowego.",
                "Rozwijanie bazy klientów aktywnych.",
                "Ustalanie oraz nadzór planów sprzedaży krótko i długoterminowych.",
                "Współpraca z działem marketingu. Przygotowanie i egzekucja planów aktywności.",
                "Współpraca z terenowymi siłami sprzedaży.",
              ],
            },
            "area-sales-manager": {
              position: "Kierownik rejonu Sprzedaży",
              company: "Eurocash S.A. - Premium Distributors",
              location: "Warszawa",
              duration: "05/2015 – 05/2017",
              description:
                "Kierownik rejonu Sprzedaży w Eurocash S.A. - Premium Distributors, odpowiedzialny za 12-osobowy zespół sprzedaży i duży rejon.",
              points: [
                "Zarządzanie 12-osobowym zespołem sprzedaży.",
                "Udział w procesie rekrutacji nowych Przedstawicieli Handlowych.",
                "Planowanie sprzedaży w podległym rejonie (Warszawa/Radom/Płock), nadzór nad realizacją planów sprzedażowych, marżowych, zadań jakościowych i promocji.",
                "Stała współpraca z Producentami oraz lokalnymi Dystrybutorami.",
                "Negocjowanie warunków handlowych, przygotowywanie ofert, koordynacja procesów logistycznych, roliczanie promocji/budżetów marketingowych.",
                "Stała współpraca z Kluczowymi Klientami, analizowanie zakupów oraz planowanie zwiększenia sprzedaży.",
              ],
            },
            "gastronomy-sales-representative": {
              position: "Przedstawiciel Handlowy ds. Gastronomii",
              company: "Carey Agri / Cedc / Eurocash S.A.",
              location: "Warszawa",
              duration: "09/2006 – 05/2015",
              description:
                "Przedstawiciel Handlowy ds. Gastronomii w Carey Agri / Cedc / Eurocash S.A., odpowiedzialny za klientów HoReCa.",
              points: [
                "Realizacja planów sprzedażowych, marżowych i dystrybucyjnych.",
                "Obsługa klientów HoReCa (Hotele, Restauracje, Kluby Nocne, Puby, Catering).",
                "Negocjowanie warunków sprzedaży (rabaty, terminy płatności, wysokość salda zakupowego).",
                "Rozwijanie bazy aktywnych klientów.",
                "Wprowadzanie nowych produktów oraz utrzymywanie ilości aktywnych SKU.",
                "Kontrola stanów magazynowych w celu utrzymywania kompleksowej obsługi klientów.",
                "Koordynowanie dostaw.",
              ],
            },
            "sales-representative": {
              position: "Przedstawiciel handlowy",
              company: "Verte sp. z o.o.",
              location: "Warszawa",
              duration: "10/2004 – 09/2006",
              description:
                "Przedstawiciel handlowy w Verte sp. z o.o., odpowiedzialny za klientów detalicznych i butiki prasowe.",
              points: [
                "Obsługa klientów detalicznych oraz butików prasowych m.in. Empik.",
                "Sprzedaż i dbałość o ekspozycję oraz wprowadzanie nowych produktów.",
                "Ustalanie warunków zakupowych (ceny, terminy płatności, dostawy).",
                "Odpowiedzialność za terminowe płatności klientów.",
              ],
            },
          },
          // Polish
          projects: {
            title: "Projekty",
            intro:
              "Zbiór projektów stworzonych podczas nauki nowoczesnego frontendu i zdobywania nowych umiejętności.",
            "bartenday-hq": {
              title: "BartenDay HQ",
              description:
                "Wybierz nastrój, powiedz barmanowi jak się czujesz i otrzymaj spersonalizowaną rekomendację koktajlu.",
              tech: [
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
                "Vite",
              ],
              live: "Demo",
              source: "Kod Źródłowy",
            },
            "bourbon-showcase": {
              title: "Prezentacja kultowych whisky",
              description:
                "Nowoczesny pokaz produktów premium whisky, podkreślający rzemiosło, notki smakowe i projekt butelki z płynnymi animacjami.",
              tech: [
                "React",
                "Next.js",
                "Tailwind CSS",
                "Framer Motion",
                "TypeScript",
              ],
              live: "Demo",
              source: "Kod Źródłowy",
            },
            "resume-app": {
              title: "Twoja przykładowa aplikacja",
              description:
                "Czysta, responsywna aplikacja do tworzenia CV, która pozwala użytkownikom tworzyć i eksportować profesjonalne CV z dostosowywalnymi sekcjami i motywami.",
              tech: [
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Zod",
                "React Hook Form",
              ],
              live: "Demo",
              source: "Kod Źródłowy",
            },
          },
          // Polish
          contact: {
            title: "Kontakt",
            intro: "Zbudujmy razem coś świetnego.",
            message: {
              1: "To już wszystko — teraz wiesz już trochę o mnie, moim doświadczeniu i projektach, które stworzyłem podczas nauki nowoczesnego frontendu.",
              2: "Mam nadzieję, że przyjemnie przeglądałeś moje portfolio i widziałeś, jak zamieniam pomysły w czyste, responsywne interfejsy.",
              3: "Jeśli szukasz frontend developera, który pasjonuje się UX, wydajnością i czystym kodem, chętnie się z Tobą skontaktuję.",
              4: "Śmiało napisz, jeśli chcesz uzyskać więcej informacji, porozmawiać lub omówić, jak mogę wspomóc Twój zespół.",
            },
            form: {
              name: "Twoje Imię i Nazwisko",
              namePlaceholder: "Jan Kowalski",
              email: "Twój Email",
              emailPlaceholder: "jan@example.com",
              subject: "Temat",
              subjectPlaceholder: "Stanowisko Frontend Developera",
              message: "Wiadomość",
              messagePlaceholder: "Cześć, chciałbym omówić...",
              send: "Wyślij Wiadomość",
              sending: "Wysyłanie...",
              success: "Wiadomość wysłana! Odpiszę wkrótce.",
              error: "Coś poszło nie tak. Spróbuj ponownie.",
            },
          },
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
