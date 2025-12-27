

"use client";

import Link from "next/link";
import styles from "./landing/landing.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>SIGMA-grade Monitoring for Critical Systems</h1>
          <p className={styles.lead}>
            Monitoramento de alarmes e infraestrutura com latência mínima, alertas
            confiáveis e painéis claros — projetado para operações críticas.
          </p>

          <div className={styles.ctaRow}>
            <Link href="/dashboard" className={styles.ctaPrimary}>Iniciar avaliação gratuita</Link>
            <Link href="/docs" className={styles.ctaSecondary}>Documentação</Link>
          </div>

          <ul className={styles.features}>
            <li>Alta disponibilidade</li>
            <li>Alertas com routing inteligente</li>
            <li>Dashboard auditável</li>
          </ul>
        </div>

        <div className={styles.visual}>
          <img src="/landing-hero.svg" alt="Ilustração de monitoramento" />
        </div>
      </section>

      <section className={styles.benefit}>
        <div className={styles.benefitInner}>
          <img src="/landing-cta.svg" alt="Setup rápido" />
          <div>
            <h3>Deploy em minutos</h3>
            <p>Integração simples via webhooks, SDKs e rules — comece a receber alertas já.</p>
            <Link href="/dashboard" className={styles.ctaInline}>Começar agora</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
