// src/App.js
import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import PartnerSpotlight from "./components/PartnerSpotlight";
import ServicesGrid from "./components/ServicesGrid";
import Partners from "./components/Partners";
import ProductTiles from "./components/ProductTiles";
import BigCTA from "./components/BigCTA";
import Metrics from "./components/Metrics";
import People from "./components/People";
import Iso from "./components/Iso";
import Footer from "./components/Footer";
import IntegrationConsulting from "./pages/IntegrationConsulting";
import Technology from "./pages/Technology";
import ApplicationDevelopment from "./pages/IntegrationConsulting/ApplicationDevelopment";
import DataAnalytics from "./pages/IntegrationConsulting/DataAnalytics";
import ArtificialIntelligence from "./pages/IntegrationConsulting/ArtificialIntelligence";
import BusinessApplications from "./pages/IntegrationConsulting/BusinessApplications";
import SecurityCompliance from "./pages/IntegrationConsulting/SecurityCompliance";
import DigitalWorkplace from "./pages/IntegrationConsulting/DigitalWorkplace";
import Infrastructure from "./pages/IntegrationConsulting/Infrastructure";
import ProductDevelopment from "./pages/IntegrationConsulting/ProductDevelopment";
import MicrosoftPurview from "./pages/technology/MicrosoftPurview";
import AzureVirtualDesktop from "./pages/technology/AzureVirtualDesktop";
import Azure from "./pages/technology/Azure";
import MicrosoftTeams from "./pages/technology/MicrosoftTeams";
import Microsoft365 from "./pages/technology/Microsoft365";
import PowerPlatform from "./pages/technology/PowerPlatform";
import Dynamics365 from "./pages/technology/Dynamics365";
import PowerBI from "./pages/technology/PowerBI";
import MicrosoftCopilot from "./pages/technology/MicrosoftCopilot";
import PowerApps from "./pages/technology/PowerApps";
import MicrosoftFabric from "./pages/technology/MicrosoftFabric";
import SharePoint from "./pages/technology/Sharepoint";
import AzureOpenAI from "./pages/technology/AzureOpenAI";
import MicrosoftSentinel from "./pages/technology/MicrosoftSentinel";
import AzureSynapse from "./pages/technology/AzureSynapse";
import WindowsPage from "./pages/technology/Windows";
import SQLServerPage from "./pages/technology/SQLServer";
import ERPTechnologies from "./pages/technology/ERPTechnologies";
import SystemCenterPage from "./pages/technology/SystemCenter";
import MicrosoftVivaPage from "./pages/technology/MicrosoftViva";
import ProductsOverview from "./pages/products/ProductsOverview";
import TuringTide from "./pages/products/TuringTide";
import TuringDepth from "./pages/products/TuringDepth";
import TuringCurrent from "./pages/products/TuringCurrent";
import TuringCrest from "./pages/products/TuringCrest";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Support from "./pages/Support";
import ContactUs from "./pages/ContactUs";


function ScrollToTop() {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      // ensure DOM is ready when navigating between routes
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo({ top: 0, behavior: "smooth" });
      }, 0);
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  return null;
}

import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/join-us" element={<ContactUs mode="join" />} />
        <Route path="/solutions/integration-consulting" element={<IntegrationConsulting />}/>
        <Route path="/solutions/technology" element={<Technology />} />
        <Route path="/solutions/integration-consulting/application-development" element={<ApplicationDevelopment />}/>
        <Route path="/solutions/integration-consulting/data-analytics"    element={<DataAnalytics />}  />
        <Route path="/solutions/integration-consulting/artificial-intelligence"   element={<ArtificialIntelligence />}/>
        <Route path="/solutions/integration-consulting/business-applications"    element={<BusinessApplications />}  />
        <Route path="/solutions/integration-consulting/security-compliance"    element={<SecurityCompliance />}/>
        <Route path="/solutions/integration-consulting/digital-workplace"    element={<DigitalWorkplace />}/>
        <Route path="/solutions/integration-consulting/infrastructure"    element={<Infrastructure />}  />
        <Route path="/solutions/integration-consulting/product-development"    element={<ProductDevelopment />}/>
        <Route path="/technology/microsoft-purview-for-data-governance"        element={<MicrosoftPurview />}/>
        <Route  path="/technology/azure-virtual-desktop"  element={<AzureVirtualDesktop />}/>
        <Route  path="/technology/azure" element={<Azure />} />
        <Route  path="/technology/microsoft-teams"  element={<MicrosoftTeams />}/>
        <Route path="/technology/microsoft-365" element={<Microsoft365 />} />
        <Route path="/technology/power-platform" element={<PowerPlatform />} />
        <Route path="/technology/dynamics-365" element={<Dynamics365 />} />
        <Route path="/technology/power-bi" element={<PowerBI />} />
        <Route path="/technology/microsoft-copilot" element={<MicrosoftCopilot />} />
        <Route path="/technology/power-apps" element={<PowerApps />} />
        <Route path="/technology/microsoft-fabric" element={<MicrosoftFabric />} />
        <Route path="/technology/sharepoint" element={<SharePoint />} />
        <Route path="/technology/azure-openai" element={<AzureOpenAI />} />
        <Route path="/technology/microsoft-sentinel" element={<MicrosoftSentinel />} />
        <Route path="/technology/azure-synapse" element={<AzureSynapse />} />
        <Route path="/technology/windows" element={<WindowsPage />} />
        <Route path="/technology/sql-server" element={<SQLServerPage />} />
        <Route path="/technology/erp-technologies" element={<ERPTechnologies />} />
        <Route path="/technology/system-center" element={<SystemCenterPage />} />
        <Route path="/technology/microsoft-viva" element={<MicrosoftVivaPage />} />
        {/* Products overview */}
        <Route path="/products" element={<ProductsOverview />} />

        {/* Specific product pages */}
        <Route path="/products/turing-tide" element={<TuringTide />} />
        <Route path="/products/turing-depth" element={<TuringDepth />} />
        <Route path="/products/turing-current" element={<TuringCurrent />} />
        <Route path="/products/turing-crest" element={<TuringCrest />} />

        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/support" element={<Support />} />

        <Route  path="*" element={<Navigate to="/" replace />} />
        
      </Routes>

      <Footer />
    </>
  );
}
