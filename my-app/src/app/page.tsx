import Image from 'next/image'
import styles from './page.module.css'
import { Module } from 'module'
import Module1 from '@/components/Home/Home'
import Welcome from '@/components/WelcomeText/Welcome'
import Services from '@/components/OurServices/Ourservices'
import Footer from '@/components/Footer/Footer'
import SeeProj from '@/components/SeeProjects/SeeProj'
import GalleryAd from '@/components/GallaryAd/GalleryAd'
import ProjectCounter from '@/components/ProjectCounter/ProjectCounter'

export default function Home() {
  return (
   <div>
      <Module1/>
      <Welcome/>
      <Services/>
      <SeeProj/>
      {/* <GalleryAd/> */}
      <ProjectCounter/>
      <Footer/>
   </div>
  )
}
