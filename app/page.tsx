

"use client";

import Link from "next/link";
import styles from "./landing/landing.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>Monitoramento simples. Insights poderosos.</h1>
          <p className={styles.lead}>
            Observe seus serviços em tempo real, detecte anomalias e aja antes que
            problemas afetem seus usuários.
          </p>

          <div className={styles.ctaRow}>
            <Link href="/dashboard" className={styles.ctaPrimary}>Experimentar grátis</Link>
            <Link href="/dashboard" className={styles.ctaSecondary}>Ver demonstração</Link>
          </div>

          <ul className={styles.features}>
            <li>Alertas em tempo real</li>
            <li>Dashboards customizáveis</li>
            <li>Integração simples</li>
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
            <h3>Pronto em minutos</h3>
            <p>Configuração leve, painéis que entregam valor imediatamente.</p>
            <Link href="/dashboard" className={styles.ctaInline}>Começar agora — é grátis</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
