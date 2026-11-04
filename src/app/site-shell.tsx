import Link from "next/link";
import Image from "next/image";
function Brand() {
  return <Link className="brand corporate-brand" href="/" aria-label="PENTAWORKS 홈"><Image src="/favicon/android-chrome-512x512.png" alt="" width={40} height={40} priority /><span className="penta-wordmark">PENTA WORKS</span></Link>;
}

export function SiteHeader(){return (<header className="navbar"><div className="shell nav-inner"><Brand/><nav aria-label="주요 메뉴"><Link href="/company">회사 소개</Link><Link href="/service">유지보수</Link><Link href="/products">제품</Link><Link href="/directions">오시는 길</Link><Link className="nav-login" href="/contact">문의하기 ↗</Link></nav></div></header>);}
export function SiteFooter(){return (<footer><div className="shell footer-top"><div><Link className="corporate-footer-logo" href="/"><Image src="/favicon/android-chrome-512x512.png" alt="" width={36} height={36}/><span className="penta-wordmark">PENTA WORKS</span></Link><p>GE MRI 유지보수 · 장비 관리 솔루션</p><span>주식회사 펜타웍스</span></div><div className="footer-links"><Link href="/company">회사 소개</Link><Link href="/service">유지보수</Link><Link href="/products">제품 · MReyes</Link><Link href="/directions">오시는 길</Link><Link href="/contact">문의하기</Link></div></div><div className="shell footer-bottom"><address>사업자등록번호 675-87-00483<br/>인천광역시 남동구 호구포로74번길 78 (고잔동)<br/><a href="mailto:ihcho@pentaworks.net">ihcho@pentaworks.net</a></address><span>© {new Date().getFullYear()} PENTAWORKS. All rights reserved.</span></div></footer>);}
