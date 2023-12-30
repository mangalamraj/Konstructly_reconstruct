import Image from 'next/image'
import styles from './page.module.css'
import { Module } from 'module'
import Module1 from '@/components/Home/Home'
import Welcome from '@/components/WelcomeText/Welcome'
import Services from '@/components/OurServices/Ourservices'

export default function Home() {
  return (
   <div>
      <Module1/>
      <Welcome/>
      <Services/>
   </div>
  )
}
