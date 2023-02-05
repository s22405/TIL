import Header from './components/fragments/Header';
import Navigation from './components/fragments/Navigation';
import MainContent from "./components/other/MainContent";
import Footer from "./components/fragments/Footer";
import {Routes, Route } from 'react-router-dom';

import DoctorList from "./components/doctor/DoctorList";
import OperationList from "./components/operation/OperationList";
import WillingOrganDonorList from "./components/willingOrganDonor/WillingOrganDonorList";
import OrganList from "./components/organ/OrganList";

import DoctorDetails from "./components/doctor/DoctorDetails";
import OrganDetails from "./components/organ/OrganDetails";
import OperationDetails from "./components/operation/OperationDetails";
import WillingOrganDonorDetails from "./components/willingOrganDonor/WillingOrganDonorDetails";

import DoctorForm from "./components/doctor/DoctorForm";
import OrganForm from "./components/organ/OrganForm";
import WillingOrganDonorForm from "./components/willingOrganDonor/WillingOrganDonorForm";
import OperationForm from "./components/operation/OperationForm";

function App() {
  return (
      <>
            <Header />
            <Navigation />
                <Routes>

                    <Route path="/" element={<MainContent />} />

                    <Route path="/doctors">
                        <Route index={true} element={<DoctorList/>} />
                        <Route path={"details/:idDoctor"} element={<DoctorDetails/>} />
                        <Route path={"add"} element={<DoctorForm />} />
                        <Route path={"edit/:idDoctor"} element={<DoctorForm />} />
                    </Route>

                    <Route path="operations">
                        <Route index={true} element={<OperationList />} />
                        <Route path={"details/:idOperation"} element={<OperationDetails />} />
                        <Route path={"add"} element={<OperationForm />} />
                        <Route path={"edit/:idOperation"} element={<OperationForm />} />
                    </Route>

                    <Route path="organs">
                        <Route index={true} element={<OrganList />} />
                        <Route path={"details/:idOrgan"} element={<OrganDetails/>} />
                        <Route path={"add"} element={<OrganForm />} />
                        <Route path={"edit/:idOrgan"} element={<OrganForm />} />
                    </Route>

                    <Route path="willingOrganDonors">
                        <Route index={true} element={<WillingOrganDonorList />} />
                        <Route path={"details/:idWillingOrganDonor"} element={<WillingOrganDonorDetails />} />
                        <Route path={"add"} element={<WillingOrganDonorForm />} />
                        <Route path={"edit/:idWillingOrganDonor"} element={<WillingOrganDonorForm />} />
                    </Route>

                </Routes>
            <Footer />
      </>
  );
}

export default App;