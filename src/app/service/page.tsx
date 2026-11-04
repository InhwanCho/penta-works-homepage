import Reveal from "../reveal";
export const metadata = {title: '유지보수', alternates: {canonical: "/service"}};
const services = [
  ["01", "정기점검 · 예방정비", "GE MRI의 상태를 주기적으로 점검하고, 측정값과 이전 작업 이력을 함께 살핍니다. PM 점검과 영상 품질 확인으로 다음 정비에 필요한 내용을 정리합니다.", "PM · 영상 품질 확인"],
  ["02", "장애 진단 · 유지보수", "장비의 증상과 오류 이력을 확인해 원인을 점검합니다. RF 계통과 전원부 등 장비 구성에 맞춰 필요한 수리·교체 작업을 검토하고 진행합니다.", "RF · 전원부 · 주요 구성품"],
  ["03", "냉각 계통 · 주변 장치", "그라디언트 칠러를 비롯한 냉각 계통의 온도, 누수와 동작 상태를 확인합니다. 장비 본체와 주변 장치를 함께 살피며 유지보수에 필요한 조치를 이어갑니다.", "칠러 · 냉각 계통 · 동작 확인"],
];

export default function Page(){return <main><section className="shell route-intro"><p className="eyebrow">MAINTENANCE</p><h1>꾸준한 점검이 만드는<br/>장비 운영의 기반.</h1><p className="description">장비의 상태와 현장의 요청을 함께 확인하며 점검과 정비 범위를 협의합니다.</p></section>      <section className="band" id="service"><div className="shell section"><Reveal><p className="eyebrow">OUR BUSINESS</p><h2>점검부터 정비까지,<br/>장비 상태에 맞춘 유지보수.</h2><p className="description">장비의 구성과 현장 상황을 확인하고 필요한 작업을 협의합니다.</p></Reveal><div className="cards">{services.map(([number,title,text,scope],i)=><Reveal key={number} from={i%2?'right':'left'} delay={i*100}><article><span className="number">{number}</span><h3>{title}</h3><p>{text}</p><div className="service-scope">{scope}</div></article></Reveal>)}</div></div></section>
      <section className="shell section" id="approach"><Reveal><p className="eyebrow">HOW WE WORK</p><h2>증상을 듣고, 상태를 확인하고,<br/>다음 점검으로 이어갑니다.</h2></Reveal><ol className="work-steps">{[["상태 확인","장비 모델, 증상과 오류 이력, 기존 정비 내용을 확인합니다."],["점검 · 조치","현장 점검 결과를 바탕으로 필요한 정비와 수리·교체 범위를 협의합니다."],["기록 · 후속 관리","작업 내용과 확인 결과를 기록하고, 다음 방문 시 살펴볼 항목을 정리합니다."]].map(([title,text],i)=><li key={title}><Reveal delay={i*100}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></Reveal></li>)}</ol></section>
</main>;}