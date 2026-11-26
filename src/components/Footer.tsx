import React from 'react';
import { Award, ShieldCheck, Store, Truck } from 'lucide-react';
import { ActivePage } from './Header';

interface FooterProps {
  onNavigate: (page: ActivePage, categoryId?: string | null) => void;
  onOpenStoreLocator: () => void;
  onOpenAccount: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenStoreLocator,
  onOpenAccount,
}) => {
  return (
    <footer className="mt-14 bg-white border-t border-[#E5E8EE]">
      {/* Brand Promises Strip */}
      <div className="bg-[#F8FAFC] border-b border-[#E5E8EE]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#EBF3FE] text-[#1557B0] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1A1D23]">Freshness Guarantee</h3>
              <p className="text-xs text-[#5A6270] mt-0.5 leading-relaxed">
                Hand-picked fresh produce and chilled meats delivered in temperature-controlled vans.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#EBF3FE] text-[#1557B0] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1A1D23]">Free Delivery from $59</h3>
              <p className="text-xs text-[#5A6270] mt-0.5 leading-relaxed">
                Islandwide 2-hour delivery slots or Click &amp; Collect at selected FairPrice stores.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#FFF0F2] text-[#E31837] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1A1D23]">Earn &amp; Offset Linkpoints</h3>
              <p className="text-xs text-[#5A6270] mt-0.5 leading-relaxed">
                Link your membership to collect Linkpoints and enjoy exclusive savings with Trust Card.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#EBF3FE] text-[#1557B0] flex items-center justify-center shrink-0">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1A1D23]">Singapore’s Trusted Grocer</h3>
              <p className="text-xs text-[#5A6270] mt-0.5 leading-relaxed">
                Serving households since 1973 with Everyday Low Prices across 350+ retail touchpoints.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-10 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Column 1: Brand & Contact */}
        <div className="col-span-2 md:col-span-1">
          <div className="text-xl font-extrabold tracking-tight">
            <span className="text-[#0E3578]">Fair</span>
            <span className="text-[#E31837]">Price</span>
          </div>
          <p className="text-xs text-[#5A6270] mt-2.5 leading-relaxed">
            NTUC FairPrice Co-operative Ltd. Everything Food Made Easy for every household in Singapore.
          </p>
          <div className="mt-4 text-xs text-[#5A6270] space-y-1">
            <div className="font-semibold text-[#1A1D23]">Customer Relations</div>
            <div className="tabular-nums">+65 6380 5858 (Daily 8am – 10pm)</div>
          </div>
        </div>

        {/* Column 2: Help & Services */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1D23] mb-3">
            Help &amp; Services
          </h4>
          <ul className="space-y-2 text-xs text-[#5A6270]">
            <li>
              <button type="button" onClick={onOpenAccount} className="hover:text-[#1557B0]">
                Help Centre
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate('recipes')} className="hover:text-[#1557B0]">
                Recipes &amp; Meal Ideas
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate('promotions')} className="hover:text-[#1557B0]">
                Greater Value &amp; Savings
              </button>
            </li>
            <li>
              <button type="button" onClick={onOpenAccount} className="hover:text-[#1557B0]">
                Shop for Business
              </button>
            </li>
            <li>
              <button type="button" onClick={onOpenAccount} className="hover:text-[#1557B0]">
                Send E-Gift Vouchers
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Memberships */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1D23] mb-3">
            Memberships
          </h4>
          <ul className="space-y-2 text-xs text-[#5A6270]">
            <li>
              <button type="button" onClick={() => onNavigate('digital-club')} className="hover:text-[#1557B0]">
                Digital Club
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate('digital-club')} className="hover:text-[#1557B0]">
                Link Rewards
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate('promotions')} className="hover:text-[#1557B0]">
                Just Wine Club
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate('digital-club')} className="hover:text-[#1557B0]">
                NTUC Union &amp; Pioneer Perks
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Our Stores */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1D23] mb-3">
            Our Stores
          </h4>
          <ul className="space-y-2 text-xs text-[#5A6270]">
            <li>
              <button type="button" onClick={() => onNavigate('weekly-ads')} className="hover:text-[#1557B0]">
                Weekly Promotions
              </button>
            </li>
            <li>
              <button type="button" onClick={onOpenStoreLocator} className="hover:text-[#1557B0]">
                Store Locator
              </button>
            </li>
            <li>
              <button type="button" onClick={onOpenStoreLocator} className="hover:text-[#1557B0]">
                FairPrice Xtra &amp; Finest
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate('must-buy')} className="hover:text-[#1557B0]">
                Must Buy This Week
              </button>
            </li>
          </ul>
        </div>

        {/* Column 5: Payment & App */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1D23] mb-3">
            Accepted Payments
          </h4>
          <div className="flex flex-wrap gap-1.5 text-[11px] font-bold text-[#374151]">
            <span className="px-2 py-1 rounded border border-[#E2E6EC] bg-[#F8FAFC]">VISA</span>
            <span className="px-2 py-1 rounded border border-[#E2E6EC] bg-[#F8FAFC]">Mastercard</span>
            <span className="px-2 py-1 rounded border border-[#E2E6EC] bg-[#F8FAFC]">PayNow</span>
            <span className="px-2 py-1 rounded border border-[#E2E6EC] bg-[#F8FAFC]">Trust Card</span>
            <span className="px-2 py-1 rounded border border-[#E2E6EC] bg-[#F8FAFC]">Linkpoints</span>
          </div>
          <p className="text-[11px] text-[#6B7280] mt-3 leading-relaxed">
            Download the FairPrice Group app on iOS and Android to scan, pay, and earn Linkpoints in-store.
          </p>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-[#E5E8EE] bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5A6270]">
          <div>© {new Date().getFullYear()} NTUC FairPrice Co-operative Ltd. All rights reserved.</div>
          <div className="flex items-center gap-4 flex-wrap">
            <button type="button" onClick={onOpenAccount} className="hover:text-[#1557B0]">
              Terms &amp; Conditions
            </button>
            <span aria-hidden="true">·</span>
            <button type="button" onClick={onOpenAccount} className="hover:text-[#1557B0]">
              Privacy Notice
            </button>
            <span aria-hidden="true">·</span>
            <button type="button" onClick={onOpenAccount} className="hover:text-[#1557B0]">
              Report Vulnerability
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
