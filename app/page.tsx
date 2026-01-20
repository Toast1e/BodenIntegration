"use client";

import {
  MapPin,
  Bus,
  Smartphone,
  ShoppingCart,
  Shirt,
  Wrench,
  Sofa,
  Recycle,
  Heart,
  Stethoscope,
  Globe,
  Users,
  ExternalLink,
  Download,
  Navigation,
  AlertTriangle,
  Snowflake,
  Phone,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-blue-600 text-white px-4 py-4 shadow-lg">
        <h1 className="text-xl font-bold">Boden Integration Guide</h1>
        <p className="text-blue-100 text-sm">For South Africans in Sweden</p>
      </header>

      <main className="pb-8">
        {/* Hero */}
        <div className="bg-gradient-to-b from-blue-600 to-blue-500 text-white px-4 py-8 text-center">
          <h2 className="text-3xl font-bold mb-2">Welcome to Boden</h2>
          <p className="text-blue-100 text-base">Your practical guide to settling in northern Sweden</p>
        </div>

        {/* Quick Links */}
        <div className="px-4 py-4 bg-gray-50 border-b">
          <p className="text-sm text-gray-500 mb-3 font-medium">QUICK ACTIONS</p>
          <div className="flex gap-2 overflow-x-auto pb-2">
            <QuickLink href="tel:112" icon={<Phone className="h-5 w-5" />} label="Emergency" color="red" />
            <QuickLink href="https://www.ltnbd.se" icon={<Bus className="h-5 w-5" />} label="Bus App" color="green" />
            <QuickLink href="https://maps.google.com/?q=Boden+Resecentrum" icon={<Navigation className="h-5 w-5" />} label="Bus Station" color="blue" />
            <QuickLink href="https://www.1177.se" icon={<Stethoscope className="h-5 w-5" />} label="Healthcare" color="purple" />
          </div>
        </div>

        {/* Main Accordion Sections */}
        <Accordion type="single" collapsible className="px-4">

          {/* Essential Apps */}
          <AccordionItem value="apps">
            <AccordionTrigger className="text-lg py-5">
              <span className="flex items-center gap-3">
                <Smartphone className="h-6 w-6 text-purple-600" />
                Essential Apps
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-500 mb-4">Sweden is app-driven. Download these first!</p>

              <div className="space-y-3">
                <AppLink
                  name="BankID"
                  desc="Digital ID - required for everything"
                  ios="https://apps.apple.com/se/app/bankid-s%C3%A4kerhetsapp/id433151512"
                  android="https://play.google.com/store/apps/details?id=com.bankid.bus"
                  critical
                />
                <AppLink
                  name="Swish"
                  desc="Mobile payments - used everywhere"
                  ios="https://apps.apple.com/se/app/swish-betalningar/id563204724"
                  android="https://play.google.com/store/apps/details?id=se.bankgirot.swish"
                  critical
                />
                <AppLink
                  name="1177"
                  desc="Healthcare appointments & advice"
                  ios="https://apps.apple.com/se/app/1177/id660534028"
                  android="https://play.google.com/store/apps/details?id=se.inera.httjansen"
                  critical
                />
                <AppLink
                  name="Länstrafiken Norrbotten"
                  desc="Bus tickets & timetables"
                  ios="https://apps.apple.com/se/app/l%C3%A4nstrafiken-norrbotten/id1539856498"
                  android="https://play.google.com/store/apps/details?id=se.ltnbd.app"
                  critical
                />
                <AppLink
                  name="Kivra"
                  desc="Digital mail & invoices"
                  ios="https://apps.apple.com/se/app/kivra/id529025396"
                  android="https://play.google.com/store/apps/details?id=com.kivra.Kivra"
                />
                <AppLink
                  name="PostNord"
                  desc="Track parcels & mail"
                  ios="https://apps.apple.com/se/app/postnord/id396714949"
                  android="https://play.google.com/store/apps/details?id=com.postnord"
                />
                <AppLink
                  name="Aimo"
                  desc="Parking payment"
                  ios="https://apps.apple.com/se/app/aimo/id397854907"
                  android="https://play.google.com/store/apps/details?id=com.apcoa.aimo"
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Transport */}
          <AccordionItem value="transport">
            <AccordionTrigger className="text-lg py-5">
              <span className="flex items-center gap-3">
                <Bus className="h-6 w-6 text-green-600" />
                Public Transport
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-medium text-base">Länstrafiken Norrbotten</p>
                  <p className="text-sm text-gray-600 mt-1">Regional buses for Boden, Luleå & surroundings</p>
                  <a href="https://www.ltnbd.se" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-green-700 text-sm mt-2 font-medium">
                    <ExternalLink className="h-4 w-4" /> Website
                  </a>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="font-medium text-base text-yellow-800">No cash on buses!</p>
                  <p className="text-sm text-yellow-700">Download the app or use card only</p>
                </div>

                <p className="text-sm font-medium text-gray-500 mt-4">KEY BUS STOPS</p>
                <LocationLink
                  name="Boden Resecentrum"
                  desc="Main hub (buses & trains)"
                  query="Boden+Resecentrum"
                />
                <LocationLink
                  name="Boden Centrum"
                  desc="Town centre"
                  query="Boden+Centrum+busshållplats"
                />
                <LocationLink
                  name="Luleå Smedjegatan"
                  desc="Luleå city centre"
                  query="Smedjegatan+Luleå"
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Geography */}
          <AccordionItem value="geography">
            <AccordionTrigger className="text-lg py-5">
              <span className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-blue-600" />
                Towns & Geography
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Badge className="text-sm">Boden</Badge>
                    <span className="text-base font-medium">Your Home</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Quiet, family-friendly town with military history. Has all daily essentials.</p>
                  <a href="https://maps.google.com/?q=Boden+Sweden" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-700 text-sm mt-2 font-medium">
                    <Navigation className="h-4 w-4" /> View on map
                  </a>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-sm">Luleå</Badge>
                    <span className="text-base font-medium">~35 km south</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Regional hub with hospital, IKEA, airport, university & malls.</p>
                  <a href="https://maps.google.com/?q=Luleå+Sweden" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-700 text-sm mt-2 font-medium">
                    <Navigation className="h-4 w-4" /> View on map
                  </a>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Groceries */}
          <AccordionItem value="groceries">
            <AccordionTrigger className="text-lg py-5">
              <span className="flex items-center gap-3">
                <ShoppingCart className="h-6 w-6 text-orange-600" />
                Groceries
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-500 mb-4 font-medium">IN BODEN</p>
              <div className="space-y-3">
                <LocationLink name="ICA Kvantum Boden" desc="Full supermarket" query="ICA+Kvantum+Boden" />
                <LocationLink name="Willys Boden" desc="Best prices" query="Willys+Boden" highlight />
                <LocationLink name="Coop Boden" desc="Good selection" query="Coop+Boden" />
                <LocationLink name="Lidl Boden" desc="Budget option" query="Lidl+Boden" />
              </div>

              <p className="text-sm text-gray-500 mb-4 mt-6 font-medium">IN LULEÅ</p>
              <div className="space-y-3">
                <LocationLink name="ICA Maxi Luleå" desc="Huge selection" query="ICA+Maxi+Luleå" />
              </div>

              <div className="bg-amber-50 p-4 rounded-lg mt-6 border-l-4 border-amber-400">
                <p className="font-medium text-base text-amber-800">Alcohol: Systembolaget</p>
                <p className="text-sm text-amber-700 mt-1">Only legal place to buy alcohol. Limited hours, closed Sundays.</p>
                <div className="mt-3">
                  <LocationLink name="Systembolaget Boden" desc="" query="Systembolaget+Boden" />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Clothing & Winter */}
          <AccordionItem value="clothing">
            <AccordionTrigger className="text-lg py-5">
              <span className="flex items-center gap-3">
                <Shirt className="h-6 w-6 text-pink-600" />
                Clothing & Winter Gear
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-red-50 p-4 rounded-lg mb-4 border-l-4 border-red-400">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <p className="font-medium text-base text-red-800">Do NOT buy winter clothes in SA</p>
                </div>
                <p className="text-sm text-red-700 mt-2">SA &quot;winter&quot; clothes won&apos;t work here. Buy proper gear when you arrive.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="font-medium text-base flex items-center gap-2">
                  <Snowflake className="h-5 w-5 text-blue-600" /> Layer System
                </p>
                <ol className="text-sm text-gray-600 mt-3 space-y-2">
                  <li>1. Thermal base layer</li>
                  <li>2. Fleece/down insulation</li>
                  <li>3. Windproof outer shell</li>
                </ol>
                <p className="text-sm text-blue-700 mt-3 font-medium">Shoes: Must be insulated + waterproof!</p>
              </div>

              <p className="text-sm text-gray-500 mb-4 font-medium">WINTER GEAR SHOPS</p>
              <div className="space-y-3">
                <LocationLink name="XXL Luleå" desc="Great winter gear" query="XXL+Luleå" highlight />
                <LocationLink name="Naturkompaniet Luleå" desc="Premium outdoor" query="Naturkompaniet+Luleå" />
                <LocationLink name="Stadium Boden" desc="Sports & basics" query="Stadium+Boden" />
                <LocationLink name="Intersport Boden" desc="Sports gear" query="Intersport+Boden" />
              </div>

              <p className="text-sm text-gray-500 mb-4 mt-6 font-medium">KIDS CLOTHING</p>
              <LocationLink name="Polarn O. Pyret" desc="Quality kids winter wear" query="Polarn+O+Pyret+Luleå" />
            </AccordionContent>
          </AccordionItem>

          {/* Home & Furniture */}
          <AccordionItem value="furniture">
            <AccordionTrigger className="text-lg py-5">
              <span className="flex items-center gap-3">
                <Sofa className="h-6 w-6 text-indigo-600" />
                Furniture & Home
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-500 mb-4 font-medium">IN BODEN</p>
              <div className="space-y-3">
                <LocationLink name="JYSK Boden" desc="Beds, bedding, basics" query="JYSK+Boden" />
                <LocationLink name="Rusta Boden" desc="Budget home goods" query="Rusta+Boden" />
              </div>

              <p className="text-sm text-gray-500 mb-4 mt-6 font-medium">IN LULEÅ</p>
              <div className="space-y-3">
                <LocationLink name="IKEA Luleå" desc="Everything for home" query="IKEA+Luleå" highlight />
                <LocationLink name="Mio Luleå" desc="Furniture" query="Mio+Luleå" />
                <LocationLink name="Hemtex Luleå" desc="Textiles & bedding" query="Hemtex+Luleå" />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Hardware */}
          <AccordionItem value="hardware">
            <AccordionTrigger className="text-lg py-5">
              <span className="flex items-center gap-3">
                <Wrench className="h-6 w-6 text-amber-600" />
                Hardware & DIY
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-500 mb-4 font-medium">IN BODEN</p>
              <div className="space-y-3">
                <LocationLink name="Byggmax Boden" desc="Building materials" query="Byggmax+Boden" />
                <LocationLink name="Jula Boden" desc="Hardware & outdoor" query="Jula+Boden" />
                <LocationLink name="Biltema Boden" desc="Auto, tools, home" query="Biltema+Boden" />
                <LocationLink name="Clas Ohlson Boden" desc="Hardware & gadgets" query="Clas+Ohlson+Boden" />
              </div>

              <p className="text-sm text-gray-500 mb-4 mt-6 font-medium">IN LULEÅ</p>
              <LocationLink name="Bauhaus Luleå" desc="Huge hardware store" query="Bauhaus+Luleå" highlight />
            </AccordionContent>
          </AccordionItem>

          {/* Electronics */}
          <AccordionItem value="electronics">
            <AccordionTrigger className="text-lg py-5">
              <span className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-cyan-600" />
                Electronics
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <LocationLink name="Elgiganten Boden" desc="Electronics" query="Elgiganten+Boden" />
                <LocationLink name="Power Boden" desc="Electronics & appliances" query="Power+Boden" />
                <LocationLink name="Elgiganten Luleå" desc="Larger selection" query="Elgiganten+Luleå" />
              </div>

              <p className="text-sm text-gray-500 mb-4 mt-6 font-medium">ONLINE SHOPPING</p>
              <div className="grid grid-cols-2 gap-3">
                <WebLink name="Amazon.se" url="https://www.amazon.se" />
                <WebLink name="CDON" url="https://www.cdon.se" />
                <WebLink name="Zalando" url="https://www.zalando.se" />
                <WebLink name="IKEA" url="https://www.ikea.se" />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Second-hand & Recycling */}
          <AccordionItem value="secondhand">
            <AccordionTrigger className="text-lg py-5">
              <span className="flex items-center gap-3">
                <Recycle className="h-6 w-6 text-emerald-600" />
                Second-Hand & Recycling
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-emerald-50 p-4 rounded-lg mb-4">
                <p className="text-base font-medium text-emerald-800">Second-hand is normal in Sweden!</p>
                <p className="text-sm text-emerald-700 mt-1">Great way to save money and be sustainable.</p>
              </div>

              <div className="space-y-3">
                <LocationLink name="ÅterbruksBoden" desc="Municipal reuse centre" query="ÅterbruksBoden" highlight />
                <LocationLink name="PMU Second Hand Boden" desc="Charity shop" query="PMU+Second+Hand+Boden" />
              </div>

              <p className="text-sm text-gray-500 mb-4 mt-6 font-medium">RECYCLING</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-base font-medium">Strict recycling rules!</p>
                <p className="text-sm text-gray-600 mt-1">Separate glass, paper, plastic, metal, food waste. Most apartments have recycling rooms.</p>
                <div className="mt-3">
                  <LocationLink name="Återvinningscentral Boden" desc="Large recycling centre" query="Återvinningscentral+Boden" />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Healthcare */}
          <AccordionItem value="healthcare">
            <AccordionTrigger className="text-lg py-5">
              <span className="flex items-center gap-3">
                <Stethoscope className="h-6 w-6 text-red-600" />
                Healthcare
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="text-base font-medium text-red-800">Emergency: Call 112</p>
                <a href="tel:112" className="inline-flex items-center gap-2 text-red-700 text-sm mt-2 font-medium">
                  <Phone className="h-4 w-4" /> Tap to call
                </a>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-base font-medium">Non-emergency health advice</p>
                <p className="text-sm text-gray-600 mt-1">Use the 1177 app or call 1177</p>
                <a href="tel:1177" className="inline-flex items-center gap-2 text-blue-700 text-sm mt-2 font-medium">
                  <Phone className="h-4 w-4" /> Call 1177
                </a>
              </div>

              <div className="space-y-3">
                <LocationLink name="Vårdcentral Boden" desc="Primary care clinic" query="Vårdcentral+Boden" />
                <LocationLink name="Apotek Hjärtat Boden" desc="Pharmacy" query="Apotek+Hjärtat+Boden" />
                <LocationLink name="Sunderby Sjukhus" desc="Regional hospital (Luleå)" query="Sunderby+Sjukhus" highlight />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Leisure */}
          <AccordionItem value="leisure">
            <AccordionTrigger className="text-lg py-5">
              <span className="flex items-center gap-3">
                <Heart className="h-6 w-6 text-rose-600" />
                Leisure & Kids
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-rose-50 p-4 rounded-lg mb-4">
                <p className="text-base font-medium text-rose-800">Fritidsbanken</p>
                <p className="text-sm text-rose-700 mt-1">Borrow sports equipment FREE for 2 weeks! Skis, skates, bikes, etc.</p>
                <div className="mt-3">
                  <LocationLink name="Fritidsbanken Boden" desc="" query="Fritidsbanken+Boden" />
                </div>
              </div>

              <div className="space-y-3">
                <LocationLink name="Lekia Boden" desc="Toys & kids crafts" query="Lekia+Boden" />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Culture Tips */}
          <AccordionItem value="culture">
            <AccordionTrigger className="text-lg py-5">
              <span className="flex items-center gap-3">
                <Users className="h-6 w-6 text-yellow-600" />
                Cultural Tips
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium text-base">Be punctual</p>
                  <p className="text-sm text-gray-600 mt-1">Being on time is very important. If delayed, always communicate.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium text-base">People are reserved</p>
                  <p className="text-sm text-gray-600 mt-1">Friendly but private. Friendships take time to develop.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium text-base">Winter darkness</p>
                  <p className="text-sm text-gray-600 mt-1">December has only a few hours of daylight. Get a daylight lamp, stay active, consider vitamin D.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium text-base">Integration tips</p>
                  <p className="text-sm text-gray-600 mt-1">Join sports clubs, school activities, workplace &quot;fika&quot; (coffee breaks). Learning Swedish helps a lot!</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 px-4 py-8 text-center text-sm text-gray-500">
        <p className="font-medium">Boden Integration Guide</p>
        <p className="mt-1">Helping South Africans settle in Sweden</p>
      </footer>
    </div>
  );
}

// Components
function QuickLink({ href, icon, label, color }: { href: string; icon: React.ReactNode; label: string; color: string }) {
  const colorClasses: Record<string, string> = {
    red: "bg-red-100 text-red-700",
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    purple: "bg-purple-100 text-purple-700",
  };
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`flex items-center gap-2 px-4 py-3 rounded-full text-sm font-medium whitespace-nowrap ${colorClasses[color]}`}
    >
      {icon}
      {label}
    </a>
  );
}

function AppLink({ name, desc, ios, android, critical }: { name: string; desc: string; ios: string; android: string; critical?: boolean }) {
  return (
    <div className={`p-4 rounded-lg border ${critical ? "bg-purple-50 border-purple-200" : "bg-white"}`}>
      <div className="flex items-center gap-2">
        {critical && <Badge variant="destructive" className="text-xs px-2 py-0.5">Essential</Badge>}
        <span className="font-medium text-base">{name}</span>
      </div>
      <p className="text-sm text-gray-500 mt-1">{desc}</p>
      <div className="flex gap-4 mt-3">
        <a href={ios} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium">
          <Download className="h-4 w-4" /> iOS
        </a>
        <a href={android} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-green-600 font-medium">
          <Download className="h-4 w-4" /> Android
        </a>
      </div>
    </div>
  );
}

function LocationLink({ name, desc, query, highlight }: { name: string; desc: string; query: string; highlight?: boolean }) {
  return (
    <a
      href={`https://maps.google.com/?q=${query}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-between p-4 rounded-lg border ${highlight ? "bg-green-50 border-green-200" : "bg-white"}`}
    >
      <div>
        <p className="font-medium text-base">{name}</p>
        {desc && <p className="text-sm text-gray-500 mt-0.5">{desc}</p>}
      </div>
      <Navigation className="h-5 w-5 text-blue-500 shrink-0" />
    </a>
  );
}

function WebLink({ name, url }: { name: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 p-4 bg-white rounded-lg border text-base font-medium"
    >
      <ExternalLink className="h-4 w-4 text-gray-400" />
      {name}
    </a>
  );
}
