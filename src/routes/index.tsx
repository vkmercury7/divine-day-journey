import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import mockupHero from "@/assets/mockup-hero.png";
import mockupDevices from "@/assets/mockup-devices.png";

// TODO: substituir pelo link real do checkout
const CHECKOUT_URL = "#checkout-url-aqui";

const TITLE = "21 Dias Para Voltar a Sentir Deus Perto";
const DESCRIPTION =
  "Uma jornada espiritual de 21 dias, com reflexões, orações guiadas e um espaço para escrever. Acesso digital imediato por R$ 17,90.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "21 Dias Para Voltar a Sentir Deus Perto | Jornada Devocional" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pilares = [
  { titulo: "Reflexão", texto: "Uma reflexão curta para cada dia." },
  { titulo: "Palavra", texto: "Um trecho bíblico para acompanhar sua jornada." },
  { titulo: "Oração guiada", texto: "Uma oração preparada para ajudar você a começar." },
  { titulo: "Reflexão pessoal", texto: "Uma pergunta para olhar para dentro." },
  {
    titulo: "Ação do dia",
    texto: "Uma pequena prática para levar o propósito daquele dia para sua rotina.",
  },
  {
    titulo: "Espaço para escrever",
    texto: "Um momento para registrar pensamentos, sentimentos e aprendizados.",
  },
];

const etapas = [
  { n: "01", titulo: "Acesse", texto: "Receba seu material digital imediatamente após a compra." },
  {
    n: "02",
    titulo: "Reserve alguns minutos",
    texto: "Separe um momento tranquilo do seu dia para realizar a jornada.",
  },
  {
    n: "03",
    titulo: "Viva os 21 dias",
    texto: "Siga cada etapa, reflita, ore e registre sua experiência.",
  },
];

const inclusos = [
  "Jornada completa de 21 dias",
  "Reflexões diárias",
  "Trechos bíblicos",
  "Orações guiadas",
  "Perguntas para reflexão",
  "Pequenas práticas diárias",
  "Espaço para anotações",
];

const faq = [
  {
    q: "O que é o 21 Dias Para Voltar a Sentir Deus Perto?",
    a: "É uma jornada espiritual digital de 21 dias criada para ajudar você a reservar alguns minutos do dia para reflexão, oração e conexão com Deus.",
  },
  {
    q: "Como recebo o material?",
    a: "Após a confirmação da compra, você receberá acesso ao material digital.",
  },
  {
    q: "Preciso fazer os 21 dias seguidos?",
    a: "A proposta é realizar uma etapa por dia, mas você pode adaptar a jornada à sua rotina.",
  },
  { q: "O material é físico?", a: "Não. É um produto digital." },
];

function Cta({ label }: { label: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      data-checkout-link
      className="group inline-flex w-full max-w-md items-center justify-center rounded-sm bg-primary px-8 py-5 text-[0.78rem] font-medium uppercase tracking-[0.22em] text-primary-foreground shadow-[0_18px_40px_-24px_var(--foreground)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-foreground hover:shadow-[0_24px_50px_-24px_var(--gold)]"
    >
      {label}
    </a>
  );
}

function Price({ large = false }: { large?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-sm text-muted-foreground line-through decoration-gold/70">
        De R$ 39,90
      </span>
      <span
        className={`font-display leading-none text-foreground ${large ? "text-6xl sm:text-7xl" : "text-5xl sm:text-6xl"}`}
      >
        R$ 17,90
      </span>
    </div>
  );
}

function Index() {
  return (
    <main className="overflow-x-hidden bg-background">
      {/* HERO */}
      <section className="relative px-6 pb-20 pt-16 sm:pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,var(--sand),transparent_70%)]"
        />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <p className="eyebrow">Uma jornada de 21 dias</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 font-display text-[2.6rem] leading-[1.06] sm:text-6xl md:text-[4.2rem]">
              21 dias para voltar
              <br className="hidden sm:block" /> a sentir Deus perto
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <div className="rule-gold mx-auto mt-8" />
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-8 max-w-xl text-[1.02rem] leading-relaxed text-muted-foreground">
              Uma jornada espiritual para quem sente que se afastou de Deus e deseja reconstruir,
              dia após dia, sua conexão com Ele.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-5 font-display text-lg italic text-foreground/70">
              21 dias. Alguns minutos por dia. Um momento reservado para você e Deus.
            </p>
          </Reveal>

          <Reveal delay={320} className="w-full">
            <img
              src={mockupHero}
              alt="Mockup do devocional digital 21 Dias Para Voltar a Sentir Deus Perto"
              width={1024}
              height={1280}
              className="float-slow mx-auto mt-12 w-[68%] max-w-[340px] drop-shadow-[0_40px_60px_rgba(60,45,25,0.16)]"
            />
          </Reveal>

          <Reveal delay={120} className="mt-12 w-full">
            <Price />
            <p className="mt-4 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
              Acesso imediato • Produto digital
            </p>
            <div className="mt-8 flex justify-center">
              <Cta label="Quero começar minha jornada" />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Comece hoje sua jornada de 21 dias.
            </p>
          </Reveal>
        </div>
      </section>

      {/* IDENTIFICAÇÃO */}
      <section className="border-t border-border/60 bg-sand px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl leading-snug sm:text-[2.6rem]">
              Talvez você esteja precisando exatamente disso.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12 space-y-5 font-display text-xl leading-relaxed text-foreground/75 sm:text-[1.6rem]">
              <p>Talvez sua rotina tenha mudado.</p>
              <p>Talvez você tenha parado de orar como antes.</p>
              <p>Talvez esteja passando por uma fase em que sente Deus mais distante.</p>
              <p>
                Ou talvez simplesmente esteja sentindo falta daquele momento de paz que você tinha
                quando parava para conversar com Ele.
              </p>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="rule-gold mx-auto mt-14" />
            <p className="mt-8 text-base text-muted-foreground">
              Você não precisa saber exatamente por onde começar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROPOSTA */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="eyebrow">A proposta</p>
              <h2 className="mt-6 font-display text-3xl leading-snug sm:text-[2.6rem]">
                Uma jornada de 21 dias para desacelerar e se aproximar de Deus.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-7 leading-relaxed text-muted-foreground">
                O <em>21 Dias Para Voltar a Sentir Deus Perto</em> foi criado para transformar
                alguns minutos do seu dia em um momento de reflexão, oração e conexão espiritual.
              </p>
            </Reveal>
          </div>

          <ul className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-3">
            {pilares.map((p, i) => (
              <Reveal
                as="li"
                key={p.titulo}
                delay={i * 70}
                className="bg-background p-8 transition-colors duration-500 hover:bg-sand"
              >
                <span className="font-display text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-foreground">
                  {p.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.texto}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="border-y border-border/60 bg-sand px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center font-display text-3xl sm:text-[2.4rem]">
              Sua jornada começa assim.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-10">
            {etapas.map((e, i) => (
              <Reveal key={e.n} delay={i * 100} className="text-center sm:text-left">
                <span className="font-display text-4xl text-gold">{e.n}</span>
                <h3 className="mt-4 text-[0.72rem] font-medium uppercase tracking-[0.2em]">
                  {e.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-5xl items-center gap-14 md:grid-cols-2 md:gap-20">
          <Reveal>
            <img
              src={mockupDevices}
              alt="Material digital exibido em tablet, celular e versão impressa"
              width={1280}
              height={1024}
              loading="lazy"
              className="mx-auto w-full max-w-md drop-shadow-[0_30px_50px_rgba(60,45,25,0.12)]"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">O que você recebe</p>
            <h2 className="mt-6 font-display text-3xl leading-snug sm:text-[2.4rem]">
              Tudo o que você precisa para começar.
            </h2>
            <ul className="mt-10 space-y-4">
              {inclusos.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 border-b border-border/60 pb-4 text-sm text-foreground/80"
                >
                  <span className="mt-[2px] text-gold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* OFERTA FINAL */}
      <section className="relative overflow-hidden border-y border-border/60 bg-sand px-6 py-24 sm:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_65%)]"
        />
        <div className="relative mx-auto flex max-w-xl flex-col items-center text-center">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-[3rem]">Comece sua jornada hoje.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-7 leading-relaxed text-muted-foreground">
              Você não precisa esperar uma segunda-feira, um novo mês ou o momento perfeito. Reserve
              alguns minutos do seu dia e comece.
            </p>
          </Reveal>
          <Reveal delay={160} className="mt-12 w-full">
            <Price large />
            <p className="mt-4 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
              Acesso digital imediato
            </p>
            <div className="mt-9 flex justify-center">
              <Cta label="Quero começar os 21 dias" />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Pagamento seguro • Acesso imediato
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="text-center font-display text-3xl sm:text-[2.2rem]">Perguntas frequentes</h2>
          </Reveal>
          <div className="mt-12 divide-y divide-border/70 border-y border-border/70">
            {faq.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[0.95rem] text-foreground marker:hidden">
                    {f.q}
                    <span className="mt-1 text-gold transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 px-6 py-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="font-display text-base text-foreground">{TITLE}</p>
          <nav className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
            <a className="transition-colors hover:text-gold" href="#termos">
              Termos de Uso
            </a>
            <a className="transition-colors hover:text-gold" href="#privacidade">
              Política de Privacidade
            </a>
            <a className="transition-colors hover:text-gold" href="#contato">
              Contato
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
