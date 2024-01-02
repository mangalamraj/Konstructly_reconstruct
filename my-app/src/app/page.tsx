import Module1 from '@/components/Home/Home'
import Welcome from '@/components/WelcomeText/Welcome'
import Services from '@/components/OurServices/Ourservices'
import Footer from '@/components/Footer/Footer'
import SeeProj from '@/components/SeeProjects/SeeProj'
import ProjectCounter from '@/components/ProjectCounter/ProjectCounter'
import Review from '@/components/Review/Review'
import MarqueeEffect from '@/components/CollabMarquee/Collab'


export default function Home() {
  return (
   <div>
      <Module1/>
      <Welcome/>
      <MarqueeEffect/>
      <Services/>
      <SeeProj/>
      {/* <GalleryAd/> */}
      <ProjectCounter/>
      <Review/>
      <Footer/>
   </div>
  )
}
