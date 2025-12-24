import "./globals.css"
import { Routes, Route } from 'react-router-dom'
import SigninForm from "./_auth/forms/SigninForm"
import SignupForm from "./_auth/forms/SignupForm"
import { AllUsers, CreatePost, EditPost, Explore, Home, PostDetails, Profile, Saved, UpdateProfile } from "./_root/pages"
import AuthLayout from "./_auth/AuthLayout"
import RootLayout from "./_root/RootLayout"
import { Toaster } from "@/components/ui/toaster"
import Courses from "./_root/pages/Courses"
import TateC1 from "./_root/pages/course-pages/TateC1"
import GadzhiC1 from "./_root/pages/course-pages/GadzhiC1"
import GadzhiC2 from "./_root/pages/course-pages/GadzhiC2"
import TateC2 from "./_root/pages/course-pages/TateC2"
import TateC3 from "./_root/pages/course-pages/TateC3"
import GadzhiC3 from "./_root/pages/course-pages/GadzhiC3"
import TateC4 from "./_root/pages/course-pages/TateC4"
import HamptonC1 from "./_root/pages/course-pages/HamptonC1"
import NazarethC1 from "./_root/pages/course-pages/NazarethC1"
import ChangC1 from "./_root/pages/course-pages/ChangC1"


const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SigninForm />} />
          <Route path='/sign-up' element={<SignupForm />} />
        </Route>

        {/* Private Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/learn" element={<Courses />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />

          <Route path="/tateC1" element={<TateC1 />} />
          <Route path="/tateC2" element={<TateC2 />} />
          <Route path="/tateC3" element={<TateC3 />} />
          <Route path="/tateC4" element={<TateC4 />} />
          <Route path="/gadzhiC1" element={<GadzhiC1 />} />
          <Route path="/gadzhiC2" element={<GadzhiC2 />} />
          <Route path="/gadzhiC3" element={<GadzhiC3 />} />
          <Route path="/hamptonC1" element={<HamptonC1 />} />
          <Route path="/nazarethC1" element={<NazarethC1 />} />
          <Route path="/changC1" element={<ChangC1 />} />

        </Route>
      </Routes>

      <Toaster />
    </main>
  )
}

export default App