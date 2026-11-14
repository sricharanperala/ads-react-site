import { BadgeCheck } from 'lucide-react';
import WhyNaikMedia from './WhyNaikMedia';
import dove from "../assets/clientIcons/dove.jpg"
import smart from "../assets/clientIcons/Smart-Bazaar.jpg"
import digital from "../assets/clientIcons/Reliance-Digital.jpg"
import Joyalukkas from "../assets/clientIcons/Joyalukkas.jpg"
import union from "../assets/clientIcons/union.jpg"
import lic from "../assets/clientIcons/lics.jpg"
import sbi from "../assets/clientIcons/SBI logo.jpg"
import ManappuramFinance from "../assets/clientIcons/ManappuramFinance.jpg"
import canarabank from "../assets/clientIcons/Canara Bank Logo.jpg"
import MuthootFinance from "../assets/clientIcons/MuthootFinance.jpg"
import MuthootFincorp from "../assets/clientIcons/MuthootFincorp.jpg"
import Santhoor from "../assets/clientIcons/SANTOOR.jpg"
import RoyalEnfield from "../assets/clientIcons/RoyalEnfield.jpg"
import Cmr from "../assets/clientIcons/CMR.jpg"
import Eurokids from "../assets/clientIcons/EuroKids.jpg"
import skoda from "../assets/clientIcons/skoda.jpg"
import SouthIndia from "../assets/clientIcons/SouthIndia.jpg"
import toyata from "../assets/clientIcons/Rappel.jpg"
import nationalmart from "../assets/clientIcons/natioalmart.png"
import IFb from "../assets/clientIcons/ifb-logo.png"
import nagarjuna from "../assets/clientIcons/nagarjunaCememt.png"
import freedom from "../assets/clientIcons/freedomOil.png"
import srivari from "../assets/clientIcons/srivari.png"
import bajaj from "../assets/clientIcons/bajajfin.jpg"
import boost from "../assets/clientIcons/Boost.png"
import dairyday from "../assets/clientIcons/dairyday.jpg"
import falcon from "../assets/clientIcons/falcon.png"
import mukundha from "../assets/clientIcons/mukundhaa.png"
import neoan from "../assets/clientIcons/nexon_paints_logo.jpg"
import navadurga from "../assets/clientIcons/navadurga.png"
import grameena from "../assets/clientIcons/grameenabank.jpg"
import necc from "../assets/clientIcons/necc.jpg"
import venkys from "../assets/clientIcons/venkys.jpg"
import gangothri from "../assets/clientIcons/gangothri.png"
import dollar from "../assets/clientIcons/DOLLAR.NS.png"
import hegde from "../assets/clientIcons/hegde.png"
import oasis from "../assets/clientIcons/oasis.png"
import ferty9 from "../assets/clientIcons/ferty9.jpg"
import maangalya from "../assets/clientIcons/maangalya.jpg"
import ShoppersStop from "../assets/clientIcons/shoppers.png"
import MedicoverHospital from "../assets/clientIcons/medicover-hospitals.png"
import RainbowHospitals from "../assets/clientIcons/rainbow.png"
import LukerLights from "../assets/clientIcons/luker.png"
import JSWCement from "../assets/clientIcons/jsw.jpg"
import SupremePipes from "../assets/clientIcons/supreme.jpg"
import RoyalOakFurniture from "../assets/clientIcons/royaloak.png"
import SkillStorkSchool from "../assets/clientIcons/skillstork.png"
import AnjaliKidneyCare from "../assets/clientIcons/anjali-kidney.avif"
import DrSaiCharanKidsNeuro from "../assets/clientIcons/dr.saichandra.jpg"
import venus from "../assets/clientIcons/venus.png"


const trustedBy = [
  { name: 'Reliance Smart',logo: smart },
  { name: 'Reliance Digital',logo: digital  },
  { name: 'National Mart',logo: nationalmart },
  { name: 'IFB',logo: IFb },
  { name: 'Joyalukkas Jewellery',logo: Joyalukkas },
  { name: 'Nagarjuna Cement',logo: nagarjuna },
  { name: 'Union Bank',logo: union  },
  { name: 'LIC',logo: lic  },
  { name: 'SBI Bank',logo: sbi },
  { name: 'Telangana Gramina Bank',logo: grameena },
  { name: 'Canara Bank',logo: canarabank },
  { name: 'Muthoot Finance',logo: MuthootFinance },
  { name: 'Manappuram Gold Loan',logo: ManappuramFinance },
  { name: 'Muthoot FinCorp' ,logo: MuthootFincorp },
  { name: 'Freedom Oil',logo: freedom },
  { name: 'Srivarai Masala',logo: srivari },
  { name: 'Bajaj Finance Gold Loan',logo: bajaj },
  { name: 'Mukundha Jewellery',logo: mukundha },
  { name: 'Dove Soap',logo: dove },
  { name: 'Boost',logo: boost },
  { name: 'Dairy Day Ice Cream',logo: dairyday },
  { name: 'Falcon Pumps',logo: falcon },
  { name: 'Nexon Paints',logo: neoan },
  { name: 'Navadurga TMT Steels',logo: navadurga },
  { name: 'NECC Egg',logo: necc },
  { name: 'Venkys Chicken',logo: venkys },
  { name: 'Santoor Soap',logo: Santhoor },
  { name: 'Gangothri Fertilizer',logo: gangothri },
  { name: 'Dollar Vest & Briefs',logo: dollar },
  { name: 'Hegde Fertility Hospital',logo: hegde },
  { name: 'Oasis Fertility Hospital',logo: oasis },
  { name: 'Ferty9 Hospital',logo: ferty9 },
  { name: 'Mangalya Shopping Mall',logo: maangalya },
  { name: 'South India Shopping Mall',logo: SouthIndia },
  { name: 'CMR Shopping Mall',logo: Cmr },
  { name: 'Shoppers Stop',logo: ShoppersStop },
  { name: 'Medicover Hospital',logo: MedicoverHospital },
  { name: 'Rainbow Hospitals',logo: RainbowHospitals },
  { name: 'Luker Lights',logo: LukerLights },
  { name: 'JSW Cement',logo: JSWCement },
  { name: 'Supreme Pipes',logo: SupremePipes },
  { name: 'Royal Oak Furniture',logo: RoyalOakFurniture },
  { name: 'Kakatiya Toyota',logo: toyata },
  { name: 'Skoda Cars',logo: skoda },
  { name: 'Skill Stork School',logo: SkillStorkSchool },
  { name: 'Anjali Kidney Care',logo: AnjaliKidneyCare },
  { name: 'EuroKids School',logo: Eurokids },
  { name: 'Royal Enfield',logo: RoyalEnfield },
  { name: 'Dr Sai Charan Kids Neuro',logo: DrSaiCharanKidsNeuro },
  { name: 'Venus',logo: venus }
];

const marqueeBrands = [...trustedBy, ...trustedBy];

export default function TrustChoose() {
  return (
    <>
      <section id="trusted-by" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="animate-fadeInUp">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 ring-1 ring-blue-100">
                <BadgeCheck className="h-4 w-4" />
                Trusted By
              </div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Brands and local businesses choose our screen network.
              </h2>
            </div>
          </div>

          <div className="trusted-marquee overflow-hidden">
            <div className="trusted-marquee-track flex w-max gap-4">
              {marqueeBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex h-28 w-28 shrink-0 items-center justify-center px-2 text-center text-[11px] font-bold uppercase tracking-wide text-gray-700 transition duration-300 hover:scale-110 transform"
                >
                  {'logo' in brand ? (
                    <span className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-white p-1 shadow-sm ring-1 ring-gray-200">
                      <img
                        className="h-full w-full rounded-full object-contain"
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                      />
                    </span>
                  ) : (
                    <span className="flex h-28 w-28 items-center justify-center rounded-full border border-gray-500 bg-white p-3 leading-tight shadow-sm ring-1 ring-gray-300">
                      {/* {brand.name} */}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyNaikMedia />
    </>
  );
}
