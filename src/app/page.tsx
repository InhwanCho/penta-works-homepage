import Image from "next/image";

const services = [
  {
    number: "01",
    title: "실시간 장비 모니터링",
    description:
      "MRI 장비의 헬륨 압력과 잔량을 한 화면에서 확인하고, 현장 상태를 빠르게 파악합니다.",
  },
  {
    number: "02",
    title: "이상 징후 알림",
    description:
      "기준 범위를 벗어난 데이터를 자동으로 감지해 담당자가 대응해야 할 순간을 놓치지 않게 합니다.",
  },
  {
    number: "03",
    title: "운영 데이터 기록",
    description:
      "누적된 시계열 데이터로 장비 변화를 확인하고 유지보수 판단에 필요한 근거를 제공합니다.",
  },
];

const steps = [
  ["Collect", "현장 장비의 주요 상태 데이터를 안전하게 수집합니다."],
  ["Monitor", "여러 현장의 운영 상태와 변화를 한곳에서 확인합니다."],
  ["Respond", "이상 징후를 빠르게 공유해 대응 시간을 줄입니다."],
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18">
      <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function MonitorGraphic() {
  return (
    <div className="monitor-card" aria-hidden="true">
      <div className="monitor-topline">
        <span>Live overview</span>
        <i />
      </div>
      <div className="monitor-readout">
        <div>
          <span>He Pressure</span>
          <strong>3.42</strong>
          <small>psi</small>
        </div>
        <div>
          <span>He Level</span>
          <strong>82.6</strong>
          <small>%</small>
        </div>
      </div>
      <div className="chart">
        <span className="chart-line" />
        <span className="chart-dot dot-one" />
        <span className="chart-dot dot-two" />
        <span className="chart-dot dot-three" />
      </div>
      <div className="monitor-labels">
        <span>09:00</span>
        <span>12:00</span>
        <span>15:00</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="PENTA WORKS 홈">
          <Image src="/images/logo.png" alt="PENTA WORKS" width={225} height={53} priority />
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#solution">솔루션</a>
          <a href="#process">작동 방식</a>
          <a className="nav-cta" href="https://app.pentaworks.net">
            모니터링 접속
          </a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> SMART EQUIPMENT MONITORING</p>
          <h1>
            장비 데이터와
            <br />
            운영 현장을 <em>연결합니다.</em>
          </h1>
          <p className="hero-description">
            PENTA WORKS는 의료 장비의 핵심 데이터를 수집하고 시각화해,
            더 빠른 확인과 안정적인 운영을 돕습니다.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://app.pentaworks.net">
              서비스 바로가기 <ArrowIcon />
            </a>
            <a className="text-link" href="#solution">
              솔루션 살펴보기
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-large" />
          <div className="orbit orbit-small" />
          <div className="visual-glow" />
          <MonitorGraphic />
          <div className="status-pill"><i /> 모든 시스템 정상</div>
        </div>
      </section>

      <section className="section shell" id="solution">
        <div className="section-heading">
          <p className="eyebrow">WHAT WE DO</p>
          <h2>복잡한 장비 상태를<br />명확한 정보로 바꿉니다.</h2>
          <p>필요한 정보만 간결하게 보여주고, 이상 상황은 빠르게 알립니다.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="card-number">{service.number}</span>
              <div className="card-icon"><span /></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process" id="process">
        <div className="shell process-inner">
          <div className="section-heading section-heading-light">
            <p className="eyebrow">HOW IT WORKS</p>
            <h2>수집부터 대응까지,<br />하나의 흐름으로.</h2>
          </div>
          <div className="process-list">
            {steps.map(([title, description], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta shell">
        <div>
          <p className="eyebrow">PENTA WORKS</p>
          <h2>더 안정적인 장비 운영을<br />지금 시작하세요.</h2>
        </div>
        <a className="button button-light" href="https://app.pentaworks.net">
          모니터링 서비스 접속 <ArrowIcon />
        </a>
      </section>

      <footer className="site-footer shell">
        <Image src="/images/logo.png" alt="PENTA WORKS" width={170} height={40} />
        <p>© {new Date().getFullYear()} PENTA WORKS. All rights reserved.</p>
        <a href="https://app.pentaworks.net">app.pentaworks.net</a>
      </footer>
    </main>
  );
}

