import  Facebook from '@/assets/icons/fb.svg'
import  Instagram from '@/assets/icons/insta.svg' 
import  Youtube from '@/assets/icons/yt.svg' 
import  Linkedin from '@/assets/icons/lnkdn.svg' 
import  X from '@/assets/icons/x.svg' 
import  Whatsapp from '@/assets/icons/wsp.svg' 
import PlayStore from '@/assets/icons/playstore.webp'
import Apple from '@/assets/icons/apple.webp'

import CarTradeTech from '@/assets/icons/cartrade_tech.svg'
import CarWala from '@/assets/icons/carwale.svg'
import BikeWala from '@/assets/icons/bikewale.svg'
import CarTrade from '@/assets/icons/cartrade.svg'
import Mobility from '@/assets/icons/mobility.svg'
import OLX from '@/assets/icons/OLX.svg'

const FooterLink = ({ children }: { children: React.ReactNode }) => (
  <li className="text-sm text-gray-500 hover:text-gray-800 cursor-pointer">
    {children}
  </li>
);

export default function OLXFooter() {
  return (
    <footer className="w-full bg-[#F6F6F6]">
      {/* Top Section */}
      <div className="mx-50 px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Popular Locations */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">
              POPULAR LOCATIONS
            </h4>
            <ul className="space-y-2">
              <FooterLink>Kolkata</FooterLink>
              <FooterLink>Mumbai</FooterLink>
              <FooterLink>Chennai</FooterLink>
              <FooterLink>Pune</FooterLink>
            </ul>
          </div>

          {/* Trending Locations */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">
              TRENDING LOCATIONS
            </h4>
            <ul className="space-y-2">
              <FooterLink>Bhubaneshwar</FooterLink>
              <FooterLink>Hyderabad</FooterLink>
              <FooterLink>Chandigarh</FooterLink>
              <FooterLink>Nashik</FooterLink>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">
              ABOUT US
            </h4>
            <ul className="space-y-2">
              <FooterLink>Tech@OLX</FooterLink>
              <FooterLink>Careers</FooterLink>
            </ul>
          </div>

          {/* OLX */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">OLX</h4>
            <ul className="space-y-2">
              <FooterLink>Blog</FooterLink>
              <FooterLink>Help</FooterLink>
              <FooterLink>Sitemap</FooterLink>
              <FooterLink>Legal & Privacy information</FooterLink>
              <FooterLink>Vulnerability Disclosure Program</FooterLink>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-3">
              FOLLOW US
            </h4>

            <div className="flex items-center gap-3 mb-5">
              <img src={Instagram} alt="" />
              <img src={Facebook} alt="" />
              <img src={Youtube} alt="" />
              <img src={X} alt="" />
              <img src={Whatsapp} alt="" />
              <img src={Linkedin} alt="" />
            </div>

            <div className="space-y-3">
                <img src={PlayStore} className="w-50" alt="playstore install" />
                <img src={Apple} className="w-50" alt="playstore install" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Brand Strip */}
      <div className="bg-[#004896]">
        <div className="mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            {/* Brand Logos (Text placeholders) */}
            <div className="flex justify-between items-center gap-8 text-sm font-semibold">
              <img src={CarTradeTech} alt=''/>
              <img src={OLX} alt=''/>
              <img src={CarWala} alt=''/>
              <img src={BikeWala} alt=''/>
              <img src={CarTrade} alt=''/>
              <img src={Mobility} alt=''/>
            </div>

            <p className="text-xs text-gray-300">
              All rights reserved © 2006–2026 OLX
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
