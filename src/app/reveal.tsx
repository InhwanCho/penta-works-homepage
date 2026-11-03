"use client";
import { useEffect, useRef, type ReactNode } from "react";
export default function Reveal({children, from = "left", delay = 0}: {children: ReactNode; from?: "left" | "right"; delay?: number}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el=ref.current;
    if(!el || matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window))return;
    el.classList.add('reveal-pending');
    const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){el.classList.remove('reveal-pending');observer.disconnect();}}, {threshold:.12});
    observer.observe(el);return()=>observer.disconnect();
  },[]);
  return <div ref={ref} className={`reveal reveal-${from}`} style={{transitionDelay: `${delay}ms`}}>{children}</div>;
}
