"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"

function CurrentYear() {
  const [year, setYear] = useState<number | null>(null)
  
  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])
  
  return <span>{year || "2024"}</span>
}

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container-max section-padding py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Image src="/triangle-logo.png" alt="Triangle Media Logo" width={24} height={24} className="w-6 h-6" />
              <span className="text-xl font-bold">Triangle Media</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">{t.footer.quickLinks}</h3>
            <ul className="space-y-1.5">
              <li>
                <Link href="/" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  {t.footer.links.home}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  {t.footer.links.services}
                </Link>
              </li>
              <li>
                <Link href="#work" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  {t.footer.links.work}
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  {t.footer.links.whyUs}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  {t.footer.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">{t.footer.services}</h3>
            <ul className="space-y-1.5">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  {t.footer.servicesList.brandStrategy}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  {t.footer.servicesList.digitalMarketing}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  {t.footer.servicesList.creativeDesign}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  {t.footer.servicesList.contentCreation}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  {t.footer.servicesList.socialMedia}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">{t.footer.contact}</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail size={16} />
                <span>hello@trianglemedia.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <MapPin size={16} />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© <CurrentYear /> Triangle Media. {t.footer.copyright}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
              {t.footer.privacyPolicy}
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
              {t.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
