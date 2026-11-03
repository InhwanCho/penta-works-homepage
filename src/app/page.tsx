import Image from "next/image";
import Reveal from "./reveal";

const app = "https://app.pentaworks.net";
const services = [
  ["01", "정기점검 · 예방정비", "GE MRI의 상태를 주기적으로 점검하고, 측정값과 이전 작업 이력을 함께 살핍니다. PM 점검과 영상 품질 확인으로 다음 정비에 필요한 내용을 정리합니다.", "PM · 영상 품질 확인"],
  ["02", "장애 진단 · 유지보수", "장비의 증상과 오류 이력을 확인해 원인을 점검합니다. RF 계통과 전원부 등 장비 구성에 맞춰 필요한 수리·교체 작업을 검토하고 진행합니다.", "RF · 전원부 · 주요 구성품"],
  ["03", "냉각 계통 · 주변 장치", "그라디언트 칠러를 비롯한 냉각 계통의 온도, 누수와 동작 상태를 확인합니다. 장비 본체와 주변 장치를 함께 살피며 유지보수에 필요한 조치를 이어갑니다.", "칠러 · 냉각 계통 · 동작 확인"],
];
function Brand() {
  return <a className="brand corporate-brand" href="#top" aria-label="PENTAWORKS 홈"><Image src="/favicon/android-chrome-512x512.png" alt="" width={40} height={40} priority /><span className="penta-wordmark">PENTA WORKS</span></a>;
}
function EquipmentGraphic() {
 return <figure className="equipment-visual equipment-photo"><div className="equipment-caption"><span>GE MRI</span><strong>SIGNA HDxt 3.0T</strong></div><Image src="/images/ge-signa-hdxt-3t.png" alt="GE SIGNA HDxt 3.0T MRI 장비" width={600} height={600} priority unoptimized/><figcaption><a href="https://www.amberusa.com/equipment/mri/3-0t/ge-signa-hdxt" target="_blank" rel="noreferrer">장비 이미지 · Amber Diagnostics</a></figcaption></figure>;
}
export default function Home() {
  return <>
    <header className="navbar"><div className="shell nav-inner"><Brand/><nav aria-label="주요 메뉴"><a href="#company">회사 소개</a><a href="#service">유지보수</a><a href="#products">제품</a><a className="nav-login" href="#contact">문의하기 ↗</a></nav></div></header>
    <main id="top">
      <section className="hero shell">
        <Reveal><p className="eyebrow">PENTAWORKS / MRI MAINTENANCE</p><h1>GE MRI 유지보수,<br/>장비를 이해하고<br/><em>현장에서 답을 찾습니다.</em></h1><p className="lead">펜타웍스는 GE MRI 유지보수를 중심으로<br/>정기점검과 장애 대응, 장비 운영에 필요한 정비를 수행합니다.</p><div className="actions"><a className="button" href="#contact">유지보수 문의하기 ↗</a><a className="secondary" href="#service">사업 분야 살펴보기 ↓</a></div><p className="caption">주식회사 펜타웍스 · PENTAWORKS</p></Reveal>
        <Reveal from="right"><EquipmentGraphic/></Reveal>
      </section>
      <div className="principles shell"><span>MAINTENANCE <b>GE MRI 유지보수</b></span><span>FIELD SERVICE <b>현장 점검과 장애 대응</b></span><span>OUR PRODUCT <b>장비 관리 제품 MReyes</b></span></div>
      <section id="company" className="shell section company-intro"><Reveal><p className="eyebrow">ABOUT PENTAWORKS</p><h2>장비를 살피는 기술과<br/>현장을 이어가는 기록.</h2></Reveal><Reveal from="right"><p className="description">MRI 유지보수는 한 번의 수리로 끝나지 않습니다. 장비의 상태를 꾸준히 확인하고, 이전 증상과 작업 이력을 다음 점검으로 이어가는 일이 중요합니다.</p><p className="description">펜타웍스는 GE MRI의 정기점검과 유지보수를 주 업무로 합니다. 현장에서 필요한 장비 관리와 업무 기록을 연결하기 위해 자체 제품 MReyes도 개발·운영하고 있습니다.</p></Reveal></section>
      <section className="band" id="service"><div className="shell section"><Reveal><p className="eyebrow">OUR BUSINESS</p><h2>점검부터 정비까지,<br/>장비 상태에 맞춘 유지보수.</h2><p className="description">장비의 구성과 현장 상황을 확인하고 필요한 작업을 협의합니다.</p></Reveal><div className="cards">{services.map(([number,title,text,scope],i)=><Reveal key={number} from={i%2?'right':'left'}><article><span className="number">{number}</span><h3>{title}</h3><p>{text}</p><div className="service-scope">{scope}</div></article></Reveal>)}</div></div></section>
      <section className="shell section" id="approach"><Reveal><p className="eyebrow">HOW WE WORK</p><h2>증상을 듣고, 상태를 확인하고,<br/>다음 점검으로 이어갑니다.</h2></Reveal><ol className="work-steps">{[["상태 확인","장비 모델, 증상과 오류 이력, 기존 정비 내용을 확인합니다."],["점검 · 조치","현장 점검 결과를 바탕으로 필요한 정비와 수리·교체 범위를 협의합니다."],["기록 · 후속 관리","작업 내용과 확인 결과를 기록하고, 다음 방문 시 살펴볼 항목을 정리합니다."]].map(([title,text],i)=><li key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>
      <section className="product-band" id="products"><div className="shell section split product-section"><Reveal><p className="eyebrow">A PRODUCT BY PENTAWORKS</p><div className="product-brand"><Image src="/images/mreyes-header.svg" alt="" width={42} height={42}/><span className="wordmark">MReyes</span></div><h2>현장 유지보수 경험을<br/>장비 관리 서비스로.</h2><p className="description">MReyes는 펜타웍스가 개발·운영하는 제품입니다. 병원 장비의 측정값과 알림, 업무기록과 일정을 한곳에서 확인하며 현장 관리 업무를 돕습니다.</p><ul><li>병원별 측정값과 상태 변화 모니터링</li><li>업무기록 · 정비이력 · 점검 일정 관리</li><li>PC와 모바일에서 이어지는 업무 확인</li></ul><div className="actions"><a className="button" href={app+"/about"}>MReyes 소개 보기 ↗</a><a className="secondary" href={app}>제품 접속</a></div></Reveal><Reveal from="right"><div className="hero-shot product-shot"><div className="shot-label">MReyes · 업무 현황<span>예시 화면</span></div><Image src="/images/service/overview.png" alt="펜타웍스 제품 MReyes의 업무 달력 예시" width={1200} height={820} unoptimized/></div></Reveal></div></section>
      <section id="contact" className="contact"><div className="shell"><Reveal><p className="eyebrow">CONTACT PENTAWORKS</p><h2>장비 유지보수가 필요할 때,<br/>펜타웍스와 상의하세요.</h2><p>GE MRI 유지보수와 MReyes 이용에 관해 문의하실 수 있습니다.<br/>장비 모델과 현재 증상, 필요한 지원 내용을 함께 보내주세요.</p><div className="actions"><a className="button" href="mailto:ihcho@pentaworks.net">이메일로 문의하기 ↗</a></div><a href="mailto:ihcho@pentaworks.net">ihcho@pentaworks.net</a></Reveal></div></section>
    </main>
    <footer><div className="shell footer-top"><div><a className="corporate-footer-logo" href="#top"><Image src="/favicon/android-chrome-512x512.png" alt="" width={36} height={36}/><span className="penta-wordmark">PENTA WORKS</span></a><p>GE MRI 유지보수 · 장비 관리 솔루션</p><span>주식회사 펜타웍스</span></div><div className="footer-links"><a href="#company">회사 소개</a><a href="#service">유지보수</a><a href={app+"/about"}>제품 · MReyes</a><a href="#contact">문의하기</a></div></div><div className="shell footer-bottom"><address>사업자등록번호 675-87-00483<br/>인천광역시 남동구 호구포로74번길 78 (고잔동)<br/><a href="mailto:ihcho@pentaworks.net">ihcho@pentaworks.net</a></address><span>© {new Date().getFullYear()} PENTAWORKS. All rights reserved.</span></div></footer>
  </>;
}
