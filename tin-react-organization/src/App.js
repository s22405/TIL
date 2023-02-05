import Header from './components/fragments/Header';
import Navigation from './components/fragments/Navigation';
import MainContent from "./components/other/MainContent";
import Footer from "./components/fragments/Footer";
import {Routes, Route } from 'react-router-dom';

import DoctorList from "./components/doctor/DoctorList";
import OperationList from "./components/operation/OperationList";
import WillingOrganDonorList from "./components/willingOrganDonor/WillingOrganDonorList";
import OrganList from "./components/organ/OrganList";


function App() {
  return (
      <>
            <Header />
            <Navigation />
                <Routes>

                    <Route path="/" element={<MainContent />} />

                    <Route path="doctors">
                        <Route index={true} element={<DoctorList />} />
                    </Route>

                    <Route path="operations">
                        <Route index={true} element={<OperationList />} />
                    </Route>

                    <Route path="organs">
                        <Route index={true} element={<OrganList />} />
                    </Route>

                    <Route path="willingOrganDonors">
                        <Route index={true} element={<WillingOrganDonorList />} />
                    </Route>

                </Routes>
            <Footer />
      </>
  );
}

export default App;