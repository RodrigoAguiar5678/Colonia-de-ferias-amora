import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Coffee,
  Heart,
  CalendarDays,
  UtensilsCrossed,
  Sandwich,
  MoonStar,
  Users,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Building2,
  Clock3,
  Banknote,
  Smartphone,
  ArrowRight,
  LayoutDashboard,
  BadgeEuro,
  Receipt,
  Filter,
  AlertTriangle,
  HandHeart,
} from "lucide-react";

const CHILDREN_COUNT = 40;
const SLOT_COUNT = 40;

function AmoraLogo({ compact = false }) {
  const sizeClass = compact ? "h-12 w-auto" : "h-28 w-auto";

  return (
    <svg
      viewBox="0 0 560 300"
      role="img"
      aria-label="Símbolo da Colónia de Férias da Amora"
      className={sizeClass}
    >
      <defs>
        <linearGradient id="amoraBlue" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#14A3E2" />
          <stop offset="100%" stopColor="#0879BC" />
        </linearGradient>
        <linearGradient id="amoraGold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#F5C23A" />
          <stop offset="100%" stopColor="#DFA114" />
        </linearGradient>
      </defs>

      <g transform="translate(22 18)">
        <g transform="translate(12 -2)" fill="none" stroke="url(#amoraGold)" strokeLinecap="round">
          <path d="M78 78 Q178 -4 278 78" strokeWidth="8.5" />
          <path d="M178 -14 L178 14" strokeWidth="7" />
          <path d="M132 0 L146 22" strokeWidth="7" />
          <path d="M224 0 L210 22" strokeWidth="7" />
          <path d="M94 24 L118 38" strokeWidth="7" />
          <path d="M262 24 L238 38" strokeWidth="7" />
        </g>

        <g fill="url(#amoraBlue)" fontFamily="Avenir Next, Montserrat, Trebuchet MS, Arial, sans-serif" fontWeight="700">
          <text x="0" y="132" fontSize="64">Colónia de</text>
          <text x="82" y="204" fontSize="68">Férias</text>
          <text x="126" y="252" fontSize="32" letterSpacing="5">AMORA</text>
        </g>

        <g transform="translate(370 6)" fill="none" stroke="#7B6755" strokeWidth="16" strokeLinecap="round">
          <path d="M86 0 V196" />
          <path d="M20 62 H152" />
        </g>
      </g>
    </svg>
  );
}

const baseDays = [
  {
    id: "dom",
    label: "Domingo",
    date: "26 de julho de 2026",
    meals: [
      { id: "dom-peqalmoco", type: "Pequeno-almoço", icon: Coffee, price: 3, total: SLOT_COUNT, remaining: SLOT_COUNT },
      { id: "dom-almoco", type: "Almoço", icon: UtensilsCrossed, price: 5, total: SLOT_COUNT, remaining: SLOT_COUNT },
      { id: "dom-lanche", type: "Lanche", icon: Sandwich, price: 2.5, total: SLOT_COUNT, remaining: SLOT_COUNT },
      { id: "dom-jantar", type: "Jantar", icon: MoonStar, price: 5, total: SLOT_COUNT, remaining: SLOT_COUNT },
    ],
  },
  {
    id: "seg",
    label: "Segunda-feira",
    date: "27 de julho de 2026",
    meals: [
      { id: "seg-peqalmoco", type: "Pequeno-almoço", icon: Coffee, price: 3, total: SLOT_COUNT, remaining: SLOT_COUNT },
      { id: "seg-almoco", type: "Almoço", icon: UtensilsCrossed, price: 5, total: SLOT_COUNT, remaining: SLOT_COUNT },
      { id: "seg-lanche", type: "Lanche", icon: Sandwich, price: 2.5, total: SLOT_COUNT, remaining: SLOT_COUNT },
      { id: "seg-jantar", type: "Jantar", icon: MoonStar, price: 5, total: SLOT_COUNT, remaining: SLOT_COUNT },
    ],
  },
  {
    id: "ter",
    label: "Terça-feira",
    date: "28 de julho de 2026",
    meals: [
      { id: "ter-peqalmoco", type: "Pequeno-almoço", icon: Coffee, price: 3, total: SLOT_COUNT, remaining: SLOT_COUNT },
      { id: "ter-almoco", type: "Almoço", icon: UtensilsCrossed, price: 5, total: SLOT_COUNT, remaining: SLOT_COUNT },
      { id: "ter-lanche", type: "Lanche", icon: Sandwich, price: 2.5, total: SLOT_COUNT, remaining: SLOT_COUNT },
      { id: "ter-jantar", type: "Jantar", icon: MoonStar, price: 5, total: SLOT_COUNT, remaining: SLOT_COUNT },
    ],
  },
  {
    id: "qua",
    label: "Quarta-feira",
    date: "29 de julho de 2026",
    meals: [
      { id: "qua-peqalmoco", type: "Pequeno-almoço", icon: Coffee, price: 3, total: SLOT_COUNT, remaining: SLOT_COUNT },
      { id: "qua-almoco", type: "Almoço", icon: UtensilsCrossed, price: 5, total: SLOT_COUNT, remaining: SLOT_COUNT },
      { id: "qua-lanche", type: "Lanche", icon: Sandwich, price: 2.5, total: SLOT_COUNT, remaining: SLOT_COUNT },
      { id: "qua-jantar", type: "Jantar", icon: MoonStar, price: 5, total: SLOT_COUNT, remaining: SLOT_COUNT },
    ],
  },
  {
    id: "qui",
    label: "Quinta-feira",
    date: "30 de julho de 2026",
    meals: [
      { id: "qui-peqalmoco", type: "Pequeno-almoço", icon: Coffee, price: 3, total: SLOT_COUNT, remaining: SLOT_COUNT },
      { id: "qui-almoco", type: "Almoço", icon: UtensilsCrossed, price: 5, total: SLOT_COUNT, remaining: SLOT_COUNT },
      { id: "qui-lanche", type: "Lanche", icon: Sandwich, price: 2.5, total: SLOT_COUNT, remaining: SLOT_COUNT },
      { id: "qui-jantar", type: "Jantar", icon: MoonStar, price: 5, total: SLOT_COUNT, remaining: SLOT_COUNT },
    ],
  },
  {
    id: "sex",
    label: "Sexta-feira",
    date: "31 de julho de 2026",
    meals: [
      { id: "sex-peqalmoco", type: "Pequeno-almoço", icon: Coffee, price: 3, total: SLOT_COUNT, remaining: SLOT_COUNT },
      { id: "sex-almoco", type: "Almoço", icon: UtensilsCrossed, price: 5, total: SLOT_COUNT, remaining: SLOT_COUNT },
      { id: "sex-lanche", type: "Lanche", icon: Sandwich, price: 2.5, total: SLOT_COUNT, remaining: SLOT_COUNT },
      { id: "sex-jantar", type: "Jantar", icon: MoonStar, price: 5, total: SLOT_COUNT, remaining: SLOT_COUNT },
    ],
  },
  {
    id: "sab",
    label: "Sábado",
    date: "1 de agosto de 2026",
    meals: [
      { id: "sab-peqalmoco", type: "Pequeno-almoço", icon: Coffee, price: 3, total: SLOT_COUNT, remaining: SLOT_COUNT },
      { id: "sab-almoco", type: "Almoço", icon: UtensilsCrossed, price: 5, total: SLOT_COUNT, remaining: SLOT_COUNT },
      { id: "sab-lanche", type: "Lanche", icon: Sandwich, price: 2.5, total: SLOT_COUNT, remaining: SLOT_COUNT },
      { id: "sab-jantar", type: "Jantar", icon: MoonStar, price: 5, total: SLOT_COUNT, remaining: SLOT_COUNT },
    ],
  },
];

const currency = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
});

const paymentMethods = [
  {
    id: "mbway",
    title: "MB WAY",
    description: "Envie o valor diretamente para o número MB WAY da campanha.",
    icon: Smartphone,
    detailLabel: "Número MB WAY",
    detailValue: "+351 912 345 678",
    detailExtra: "No envio, escreva o seu nome e o dia da refeição no descritivo, sempre que possível.",
    stepTitle: "Pagar por MB WAY",
    stepInstruction: "Abra a aplicação MB WAY, envie exatamente o valor indicado e confirme o pagamento antes de avançar.",
  },
  {
    id: "transferencia",
    title: "Transferência Bancária",
    description: "Faça uma transferência para o IBAN indicado pela organização.",
    icon: Banknote,
    detailLabel: "IBAN",
    detailValue: "PT50 1234 5678 9012 3456 7890 1",
    detailExtra: "Titular: Colónia de Férias da Amora · Banco Exemplo",
    stepTitle: "Pagar por transferência bancária",
    stepInstruction: "Faça a transferência com o valor certo e guarde o comprovativo caso a organização precise de confirmar manualmente.",
  },
];

function flattenMeals(days) {
  return days.flatMap((day) => day.meals.map((meal) => ({ ...meal, day })));
}

function StatCard({ icon: Icon, label, value, sublabel }) {
  return (
    <div className="rounded-[26px] border border-[#eadfca] bg-[#fffdf8] p-5 shadow-[0_12px_30px_rgba(30,41,59,0.05)]">
      <div className="mb-3 flex items-center gap-3">
        <div className="rounded-[18px] bg-[#f6efe0] p-3 text-[#2b7a78]">
          <Icon className="h-5 w-5" />
        </div>
        <p className="text-sm font-medium text-slate-500">{label}</p>
      </div>
      <p className="text-[28px] font-semibold tracking-[-0.02em] text-slate-900">{value}</p>
      {sublabel ? <p className="mt-1 text-sm leading-6 text-slate-500">{sublabel}</p> : null}
    </div>
  );
}

function ProgressBar({ value }) {
  return (
    <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
      <div className="h-full rounded-full bg-emerald-500 transition-all duration-500" style={{ width: `${value}%` }} />
    </div>
  );
}

function DayCompletionCard({ day }) {
  const total = day.meals.reduce((sum, meal) => sum + meal.total, 0);
  const remaining = day.meals.reduce((sum, meal) => sum + meal.remaining, 0);
  const funded = total - remaining;
  const progress = Math.round((funded / total) * 100);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-4">
        <div>
          <p className="text-lg font-semibold text-slate-900">{day.label}</p>
          <p className="text-sm text-slate-500">{day.date}</p>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">{progress}%</span>
      </div>
      <ProgressBar value={progress} />
      <p className="mt-3 text-sm text-slate-600">{funded} de {total} refeições financiadas neste dia.</p>
    </div>
  );
}

function MealCard({ day, meal, onSponsor }) {
  const Icon = meal.icon;
  const funded = meal.total - meal.remaining;
  const progress = Math.round((funded / meal.total) * 100);
  const soldOut = meal.remaining === 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[28px] border border-[#e8dfcf] bg-[#fffdf8] p-5 shadow-[0_12px_28px_rgba(15,23,42,0.05)]"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            <CalendarDays className="h-3.5 w-3.5" />
            {day.label} · {day.date}
          </div>
          <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
            <Icon className="h-5 w-5 text-emerald-700" />
            {meal.type}
          </h3>
        </div>
        <div className="rounded-full bg-[#fff3cf] px-3 py-2 text-sm font-semibold text-[#8b6b00]">
          {currency.format(meal.price)}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>{meal.remaining} por financiar</span>
          <span>{funded}/{meal.total} garantidas</span>
        </div>
        <ProgressBar value={progress} />
        <p className="text-sm leading-6 text-slate-500">
          Cada contribuição assegura {meal.type.toLowerCase()} real para uma das {CHILDREN_COUNT} crianças deste ano.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {[1, 2, 5].map((qty) => (
          <button
            key={qty}
            onClick={() => onSponsor(day, meal, qty)}
            disabled={soldOut}
            className="rounded-2xl border border-[#ddd2be] bg-white px-3 py-3 text-sm font-medium text-slate-800 transition hover:border-[#d8b24c] hover:bg-[#fff7df] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {soldOut ? "Completo" : `Oferecer ${qty}`}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function PaymentMethodCard({ method, active, onClick }) {
  const Icon = method.icon;

  return (
    <button
      onClick={onClick}
      className={`rounded-[26px] border p-4 text-left transition ${
        active
          ? "border-[#d8b24c] bg-[#fff7df]"
          : "border-[#e7dcc8] bg-[#fffdf8] hover:border-[#d8b24c] hover:bg-[#fff8e8]"
      }`}
    >
      <div className="mb-3 inline-flex rounded-[18px] bg-white p-3 text-[#2b7a78] shadow-sm">
        <Icon className="h-5 w-5" />
      </div>
      <p className="font-semibold text-slate-900">{method.title}</p>
      <p className="mt-1 text-sm leading-6 text-slate-600">{method.description}</p>
    </button>
  );
}

function SupporterCard({ item }) {
  return (
    <div className="rounded-[24px] border border-[#eadfca] bg-[#fffdf8] p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-semibold text-slate-900">{item.name || "Doador anónimo"}</p>
          <p className="text-sm text-slate-500">
            {item.quantity} {item.mealType.toLowerCase()}{item.quantity > 1 ? "s" : ""} · {item.dayLabel}
          </p>
        </div>
        <span className="rounded-full bg-[#eef7ef] px-3 py-1 text-sm font-medium text-[#2f7a3d]">
          Com gratidão
        </span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
        <span className="rounded-full bg-[#f4efe6] px-3 py-1">{item.paymentLabel}</span>
        <span className="rounded-full bg-[#f4efe6] px-3 py-1">Apoio confirmado</span>
      </div>
    </div>
  );
}

function CheckoutStepPill({ active, children }) {
  return (
    <div className={`rounded-full px-3 py-1.5 font-medium ${active ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-600"}`}>
      {children}
    </div>
  );
}

export default function CampoRefeicoesSolidarioSite() {
  const [days, setDays] = useState(baseDays);
  const [view, setView] = useState("public");
  const [selectedFilter, setSelectedFilter] = useState("Todos");
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [donorName, setDonorName] = useState("");
  const [email, setEmail] = useState("");
  const [dedicatedTo, setDedicatedTo] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("mbway");
  const [paidAcknowledged, setPaidAcknowledged] = useState(false);
  const [lastConfirmation, setLastConfirmation] = useState(null);
  const [contributions, setContributions] = useState([
    {
      id: "seed-1",
      name: "Família Costa",
      email: "familia@example.com",
      amount: 10,
      quantity: 2,
      mealType: "Almoço",
      dayLabel: "Domingo",
      paymentLabel: "MB WAY",
    },
    {
      id: "seed-2",
      name: "Paróquia de Exemplo",
      email: "paroquia@example.com",
      amount: 12.5,
      quantity: 5,
      mealType: "Lanche",
      dayLabel: "Segunda-feira",
      paymentLabel: "Transferência Bancária",
    },
  ]);

  const meals = useMemo(() => flattenMeals(days), [days]);
  const selectedPayment = paymentMethods.find((item) => item.id === paymentMethod);

  const totals = useMemo(() => {
    const totalMeals = meals.reduce((sum, meal) => sum + meal.total, 0);
    const remainingMeals = meals.reduce((sum, meal) => sum + meal.remaining, 0);
    const fundedMeals = totalMeals - remainingMeals;
    const completion = totalMeals ? Math.round((fundedMeals / totalMeals) * 100) : 0;
    const totalValue = meals.reduce((sum, meal) => sum + meal.total * meal.price, 0);
    const fundedValue = meals.reduce((sum, meal) => sum + (meal.total - meal.remaining) * meal.price, 0);
    return { totalMeals, remainingMeals, fundedMeals, completion, totalValue, fundedValue };
  }, [meals]);

  const filteredDays = useMemo(() => {
    if (selectedFilter === "Todos") return days;
    return days.map((day) => ({ ...day, meals: day.meals.filter((meal) => meal.type === selectedFilter) }));
  }, [days, selectedFilter]);

  const urgentMeals = useMemo(() => {
    return meals
      .filter((meal) => meal.remaining > 0)
      .sort((a, b) => ((b.total - b.remaining) / b.total) - ((a.total - a.remaining) / a.total))
      .slice(0, 3);
  }, [meals]);

  function openCheckout(day, meal, qty) {
    setSelectedMeal({ ...meal, day });
    setQuantity(Math.min(qty, meal.remaining));
    setCheckoutStep(1);
    setPaymentMethod("mbway");
    setPaidAcknowledged(false);
    setCheckoutOpen(true);
  }

  function closeCheckout() {
    setCheckoutOpen(false);
    setCheckoutStep(1);
    setPaidAcknowledged(false);
  }

  function getPaymentLabel(id) {
    return paymentMethods.find((item) => item.id === id)?.title || id;
  }

  function handlePaymentConfirmation() {
    if (!selectedMeal) return;
    const safeQuantity = Math.max(1, Math.min(quantity, selectedMeal.remaining));
    if (safeQuantity <= 0 || !paidAcknowledged) return;

    setDays((current) =>
      current.map((day) =>
        day.id !== selectedMeal.day.id
          ? day
          : {
              ...day,
              meals: day.meals.map((meal) =>
                meal.id !== selectedMeal.id ? meal : { ...meal, remaining: Math.max(0, meal.remaining - safeQuantity) }
              ),
            }
      )
    );

    const newContribution = {
      id: `donation-${Date.now()}`,
      name: donorName,
      email,
      amount: safeQuantity * selectedMeal.price,
      quantity: safeQuantity,
      mealType: selectedMeal.type,
      dayLabel: selectedMeal.day.label,
      paymentLabel: getPaymentLabel(paymentMethod),
    };

    setContributions((current) => [newContribution, ...current]);
    setLastConfirmation({ ...newContribution, dedicatedTo });

    setCheckoutOpen(false);
    setCheckoutStep(1);
    setDonorName("");
    setEmail("");
    setDedicatedTo("");
    setQuantity(1);
    setPaymentMethod("mbway");
    setPaidAcknowledged(false);
  }

  const summaryTotal = selectedMeal ? quantity * selectedMeal.price : 0;

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#eef9ff_0%,#fffdf7_38%,#ffffff_100%)] text-slate-900">
      <section className="border-b border-emerald-100 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl border border-emerald-100 bg-white p-2 shadow-sm">
              <AmoraLogo compact />
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-950">Colónia de Férias da Amora</p>
              <p className="text-sm text-slate-500">26 de julho de 2026 a 1 de agosto de 2026</p>
            </div>
          </div>
          <div className="rounded-full border border-[#eadfca] bg-[#fffdf8] px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            Verão 2026
          </div>
        </div>
      </section>

      {view === "public" ? (
        <>
          <section>
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
              <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#eadfca] bg-[#fffdf8] px-4 py-2 text-sm font-medium text-[#2b7a78] shadow-sm">
                    <Heart className="h-4 w-4" />
                    Colónia de Férias da Amora
                  </div>

                  <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-slate-950 lg:text-6xl">
                    Ajude-nos a garantir as refeições desta semana.
                  </h1>

                  <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                    Há mais de 20 anos que a Colónia de Férias da Amora é organizada pelos jovens scalabrinianos da Paróquia. Os voluntários procuram proporcionar uma semana inesquecível a 40 crianças da região em situações socioeconómicas delicadas.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href="#refeicoes" className="rounded-2xl bg-[#2b7a78] px-5 py-3 font-medium text-white shadow-sm transition hover:bg-[#235f5d]">
                      Apoiar refeições
                    </a>
                    <a href="#mural" className="rounded-2xl border border-[#ddd2be] bg-[#fffdf8] px-5 py-3 font-medium text-slate-800 transition hover:border-[#d8b24c] hover:bg-[#fff7df]">
                      Quem já ajudou
                    </a>
                  </div>
                </div>

                <div className="rounded-[32px] border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-100/50">
                  <div className="mb-5 flex items-center gap-4 rounded-3xl border border-slate-100 bg-slate-50 p-4">
                    <div className="rounded-3xl border border-emerald-100 bg-white p-3 shadow-sm">
                      <AmoraLogo />
                    </div>
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.12em] text-[#2b7a78]">Desde sempre com o mesmo Espírito</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">Uma semana feita de cuidado, alegria, rotina boa e presença verdadeira para quem mais precisa.</p>
                    </div>
                  </div>
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Progresso global</p>
                      <h2 className="text-3xl font-semibold text-slate-950">{totals.completion}% financiado</h2>
                    </div>
                    <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                      <Sparkles className="h-6 w-6" />
                    </div>
                  </div>
                  <ProgressBar value={totals.completion} />
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <StatCard icon={Users} label="Crianças" value={String(CHILDREN_COUNT)} sublabel="participantes este ano" />
                    <StatCard icon={UtensilsCrossed} label="Refeições totais" value={totals.totalMeals} sublabel="7 dias · 4 momentos por dia" />
                    <StatCard icon={CheckCircle2} label="Já confirmadas" value={totals.fundedMeals} sublabel="refeições já asseguradas" />
                    <StatCard icon={Heart} label="Por financiar" value={totals.remainingMeals} sublabel="refeições ainda em aberto" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-2 lg:px-8">
            <div className="grid gap-4 md:grid-cols-3">
              <StatCard icon={CalendarDays} label="Período" value="7 dias" sublabel="de 26/07/2026 a 01/08/2026" />
              <StatCard icon={Clock3} label="Métodos" value="2 opções" sublabel="MB WAY e transferência bancária" />
              <StatCard icon={ShieldCheck} label="Confirmação" value="Só no fim" sublabel="primeiro paga, depois confirma" />
            </div>
          </section>

          <section id="refeicoes" className="mx-auto max-w-7xl px-6 pb-10 lg:px-8">
            <div className="mb-8 flex flex-col gap-4 rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-[#2b7a78]">Refeições da semana</p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-950">Escolha onde quer ajudar</h2>
                <p className="mt-2 max-w-2xl text-slate-600">
                  Cada apoio corresponde a uma refeição concreta. A contagem só é atualizada depois do pagamento ser confirmado.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Todos", "Pequeno-almoço", "Almoço", "Lanche", "Jantar"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
                      selectedFilter === filter
                        ? "bg-emerald-600 text-white"
                        : "border border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              {filteredDays.map((day) => (
                <div key={day.id} className="space-y-4">
                  {day.meals.length > 0 ? (
                    <>
                      <div>
                        <h3 className="text-2xl font-semibold text-slate-950">{day.label}</h3>
                        <p className="text-slate-500">{day.date}</p>
                      </div>
                      <div className="grid gap-5 lg:grid-cols-3">
                        {day.meals.map((meal) => (
                          <MealCard key={meal.id} day={day} meal={meal} onSponsor={openCheckout} />
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[30px] border border-slate-200 bg-slate-950 p-7 text-white shadow-sm">
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-[#f1d48a]">Mais perto de ficar completo</p>
                <h2 className="mt-2 text-3xl font-semibold">Alguns dias estão quase fechados</h2>
                <div className="mt-6 space-y-4">
                  {urgentMeals.map((meal) => {
                    const progress = Math.round(((meal.total - meal.remaining) / meal.total) * 100);
                    return (
                      <div key={meal.id} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <div>
                            <p className="font-medium">{meal.day.label} · {meal.type}</p>
                            <p className="text-sm text-slate-300">{meal.remaining} ainda por financiar</p>
                          </div>
                          <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm text-emerald-200">{progress}%</span>
                        </div>
                        <ProgressBar value={progress} />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-[#2b7a78]">Como apoiar</p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-950">Simples, direto e claro</h2>
                <div className="mt-6 space-y-4 text-slate-600">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="font-semibold text-slate-900">1. Escolha o que vai apoiar</p>
                    <p className="mt-1 text-sm">Selecione o dia, a refeição e a quantidade que quer oferecer.</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="font-semibold text-slate-900">2. Veja as instruções do método escolhido</p>
                    <p className="mt-1 text-sm">O site mostra exatamente o número MB WAY ou o IBAN, bem como o valor e aquilo que está a ser apoiado.</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="font-semibold text-slate-900">3. Pague primeiro e confirme depois</p>
                    <p className="mt-1 text-sm">Só depois de realizar o pagamento deve avançar para “Já pagaste?” e concluir em “Confirmar pagamento”.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="pagamentos" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
            <div className="rounded-[32px] border border-emerald-100 bg-emerald-50 p-8">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-[#2b7a78]">Pagamento</p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-950">Duas formas simples de contribuir</h2>
                <p className="mt-3 text-slate-600">
                  Escolhemos duas opções práticas e familiares para tornar o apoio mais fácil: MB WAY e transferência bancária.
                </p>
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="mb-3 inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                      <method.icon className="h-5 w-5" />
                    </div>
                    <p className="text-lg font-semibold text-slate-900">{method.title}</p>
                    <p className="mt-1 text-slate-600">{method.description}</p>
                    <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-sm font-medium text-slate-500">{method.detailLabel}</p>
                      <p className="mt-2 text-lg font-semibold text-slate-900">{method.detailValue}</p>
                      <p className="mt-2 text-sm text-slate-500">{method.detailExtra}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-[#2b7a78]">Acompanhamento</p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-950">Como está a caminhar a semana</h2>
                <p className="mt-3 text-slate-600">
                  Aqui pode acompanhar, de forma discreta e organizada, o progresso global das refeições já asseguradas ao longo da semana.
                </p>
              </div>
              <div className="mt-6 grid gap-6 lg:grid-cols-3">
                {days.map((day) => (
                  <DayCompletionCard key={day.id} day={day} />
                ))}
              </div>
            </div>
          </section>

          <section id="mural" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-[#2b7a78]">Com gratidão</p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-950">Quem já se juntou a nós</h2>
                <p className="mt-3 text-slate-600">
                  Um espaço simples para agradecer às pessoas e entidades que já ajudaram a tornar esta semana possível.
                </p>
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {contributions.map((item) => (
                  <SupporterCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
            <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-[#2b7a78]">Notas importantes</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-950">Como funciona este apoio</h2>
              <div className="mt-6 space-y-4 text-slate-600">
                <p>Esta página foi pensada para apresentar necessidades concretas, permitir um processo de apoio simples e dar visibilidade às refeições já asseguradas ao longo da semana.</p>
                <p>O apoio é confirmado apenas após o pagamento e a validação final feita nesta própria página, garantindo maior clareza para quem contribui.</p>
                <p>As menções públicas no mural destinam-se exclusivamente a reconhecer o gesto de apoio, sem referência a valores monetários.</p>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">Painel interno</p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-950">Visão operacional da campanha</h1>
              <p className="mt-2 max-w-2xl text-slate-600">
                Esta área demonstra o tipo de informação que a organização deve acompanhar: progresso, valor financiado, refeições por dia e contribuições recentes.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-950 px-4 py-3 text-white">
              <p className="text-sm text-slate-300">Meta global</p>
              <p className="text-xl font-semibold">{currency.format(totals.totalValue)}</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <StatCard icon={BadgeEuro} label="Total financiado" value={currency.format(totals.fundedValue)} sublabel="após pagamentos confirmados" />
            <StatCard icon={Receipt} label="Contribuições" value={contributions.length} sublabel="apoios atualmente listados no mural" />
            <StatCard icon={UtensilsCrossed} label="Refeições cobertas" value={totals.fundedMeals} sublabel={`${totals.remainingMeals} ainda em falta`} />
            <StatCard icon={Filter} label="Conclusão" value={`${totals.completion}%`} sublabel="progresso global da campanha" />
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">Estado por dia</h2>
              <div className="mt-5 space-y-4">
                {days.map((day) => (
                  <div key={day.id} className="rounded-3xl border border-slate-200 p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-slate-900">{day.label}</p>
                        <p className="text-sm text-slate-500">{day.date}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {day.meals.map((meal) => {
                        const funded = meal.total - meal.remaining;
                        const progress = Math.round((funded / meal.total) * 100);
                        return (
                          <div key={meal.id}>
                            <div className="mb-1 flex items-center justify-between text-sm text-slate-600">
                              <span>{meal.type}</span>
                              <span>{funded}/{meal.total}</span>
                            </div>
                            <ProgressBar value={progress} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-950">Mural de apoiantes</h2>
                <div className="mt-5 space-y-4">
                  {contributions.slice(0, 6).map((item) => (
                    <SupporterCard key={item.id} item={item} />
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
                <h2 className="text-2xl font-semibold">Boas práticas para produção</h2>
                <div className="mt-5 space-y-3 text-sm text-slate-300">
                  <p>1. Baixar stock apenas depois de verificar que o pagamento foi realmente recebido.</p>
                  <p>2. Guardar nome, email, método, valor, referência e estado do pagamento.</p>
                  <p>3. Permitir confirmação manual da organização para pagamentos por IBAN.</p>
                  <p>4. Proteger o painel interno com autenticação e permissões adequadas.</p>
                  <p>5. Ter política clara para contribuições acima da meta de uma categoria.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8 lg:px-8">
        <div className="rounded-[32px] bg-slate-950 px-8 py-10 text-white">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-300">Colónia de Férias da Amora</p>
              <h2 className="mt-2 text-3xl font-semibold">Obrigado por caminhar connosco nesta missão.</h2>
              <p className="mt-3 max-w-2xl text-slate-300">
                Cada refeição assegurada representa cuidado, presença e responsabilidade partilhada para com as crianças que participam nesta semana.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-emerald-400/15 p-3 text-emerald-300">
                  <Building2 className="h-5 w-5" />
                </div>
                <p className="text-lg font-medium">Informação da campanha</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>40 crianças participantes</li>
                <li>26 de julho de 2026 a 1 de agosto de 2026</li>
                <li>Pequenos-almoços, almoços, lanches e jantares ao longo de 7 dias</li>
                <li>Confirmação do apoio após realização do pagamento</li>
                <li>Menções públicas de agradecimento aos apoiantes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {checkoutOpen && selectedMeal ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              className="w-full max-w-4xl rounded-[32px] border border-slate-200 bg-white p-6 shadow-2xl"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-700">Patrocinar refeição</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-950">{selectedMeal.type} · {selectedMeal.day.label}</h3>
                  <p className="mt-2 text-slate-600">{selectedMeal.day.date} · {selectedMeal.remaining} ainda disponíveis</p>
                </div>
                <button onClick={closeCheckout} className="rounded-2xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  Fechar
                </button>
              </div>

              <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
                <CheckoutStepPill active={checkoutStep === 1}>1. Dados</CheckoutStepPill>
                <ArrowRight className="h-4 w-4 text-slate-400" />
                <CheckoutStepPill active={checkoutStep === 2}>2. Método</CheckoutStepPill>
                <ArrowRight className="h-4 w-4 text-slate-400" />
                <CheckoutStepPill active={checkoutStep === 3}>3. Pagar</CheckoutStepPill>
                <ArrowRight className="h-4 w-4 text-slate-400" />
                <CheckoutStepPill active={checkoutStep === 4}>4. Já pagaste?</CheckoutStepPill>
              </div>

              {checkoutStep === 1 ? (
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-4">
                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-slate-700">Nome</span>
                      <input
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        placeholder="Ex.: Maria Silva"
                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-400"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nome@email.com"
                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-400"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-slate-700">Dedicatória opcional</span>
                      <input
                        value={dedicatedTo}
                        onChange={(e) => setDedicatedTo(e.target.value)}
                        placeholder="Oferta em nome de alguém"
                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-400"
                      />
                    </label>
                  </div>

                  <div className="rounded-[28px] bg-slate-50 p-5">
                    <p className="text-sm font-medium text-slate-500">Quantidade</p>
                    <div className="mt-3 grid grid-cols-4 gap-2">
                      {[1, 2, 5, 10].map((qty) => (
                        <button
                          key={qty}
                          onClick={() => setQuantity(Math.min(qty, selectedMeal.remaining))}
                          className={`rounded-2xl px-3 py-3 text-sm font-medium transition ${
                            quantity === Math.min(qty, selectedMeal.remaining)
                              ? "bg-emerald-600 text-white"
                              : "border border-slate-200 bg-white text-slate-800 hover:border-emerald-300 hover:bg-emerald-50"
                          }`}
                        >
                          {qty}
                        </button>
                      ))}
                    </div>

                    <label className="mt-4 block">
                      <span className="mb-2 block text-sm font-medium text-slate-700">Ou escolha manualmente</span>
                      <input
                        type="number"
                        min={1}
                        max={selectedMeal.remaining}
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, Math.min(Number(e.target.value || 1), selectedMeal.remaining)))}
                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-400"
                      />
                    </label>

                    <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="flex items-center justify-between text-sm text-slate-600">
                        <span>Valor unitário</span>
                        <span>{currency.format(selectedMeal.price)}</span>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
                        <span>O que está a apoiar</span>
                        <span>{selectedMeal.type} · {selectedMeal.day.label}</span>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-lg font-semibold text-slate-900">
                        <span>Total</span>
                        <span>{currency.format(summaryTotal)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              {checkoutStep === 2 ? (
                <div className="space-y-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    {paymentMethods.map((method) => (
                      <PaymentMethodCard
                        key={method.id}
                        method={method}
                        active={paymentMethod === method.id}
                        onClick={() => setPaymentMethod(method.id)}
                      />
                    ))}
                  </div>

                  <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <p className="text-lg font-semibold text-slate-900">Resumo do apoio</p>
                      <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700">{getPaymentLabel(paymentMethod)}</span>
                    </div>
                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="flex items-center justify-between"><span>Dia</span><span>{selectedMeal.day.label}</span></div>
                      <div className="flex items-center justify-between"><span>Refeição</span><span>{selectedMeal.type}</span></div>
                      <div className="flex items-center justify-between"><span>Quantidade</span><span>{quantity}</span></div>
                      <div className="flex items-center justify-between"><span>Nome</span><span>{donorName || "—"}</span></div>
                      <div className="flex items-center justify-between"><span>Email</span><span>{email || "—"}</span></div>
                    </div>
                    <div className="mt-4 border-t border-slate-200 pt-4">
                      <div className="flex items-center justify-between text-lg font-semibold text-slate-900">
                        <span>Total a pagar</span>
                        <span>{currency.format(summaryTotal)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              {checkoutStep === 3 ? (
                <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[28px] border border-emerald-200 bg-emerald-50 p-5">
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-700">{selectedPayment?.stepTitle}</p>
                    <h4 className="mt-2 text-2xl font-semibold text-slate-950">Siga estes passos</h4>
                    <div className="mt-5 space-y-4 text-slate-700">
                      <div className="rounded-2xl bg-white p-4">
                        <p className="font-semibold">1. Veja o valor e o apoio escolhido</p>
                        <p className="mt-1 text-sm">Está a apoiar {quantity} {selectedMeal.type.toLowerCase()}{quantity > 1 ? "s" : ""} de {selectedMeal.day.label}, no valor total de {currency.format(summaryTotal)}.</p>
                      </div>
                      <div className="rounded-2xl bg-white p-4">
                        <p className="font-semibold">2. Faça o pagamento</p>
                        <p className="mt-1 text-sm">{selectedPayment?.stepInstruction}</p>
                      </div>
                      <div className="rounded-2xl bg-white p-4">
                        <p className="text-sm font-medium text-slate-500">{selectedPayment?.detailLabel}</p>
                        <p className="mt-2 text-xl font-semibold text-slate-900">{selectedPayment?.detailValue}</p>
                        <p className="mt-2 text-sm text-slate-500">{selectedPayment?.detailExtra}</p>
                      </div>
                      <div className="rounded-2xl bg-white p-4">
                        <p className="font-semibold">3. Só depois avance</p>
                        <p className="mt-1 text-sm">Quando o pagamento estiver realmente feito, avance para a etapa seguinte: “Já pagaste?”.</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-slate-200 bg-white p-5">
                    <p className="text-lg font-semibold text-slate-900">Resumo do que foi comprado</p>
                    <div className="mt-4 space-y-3 text-sm text-slate-600">
                      <div className="flex items-center justify-between"><span>Dia</span><span>{selectedMeal.day.label}</span></div>
                      <div className="flex items-center justify-between"><span>Refeição</span><span>{selectedMeal.type}</span></div>
                      <div className="flex items-center justify-between"><span>Quantidade</span><span>{quantity}</span></div>
                      <div className="flex items-center justify-between"><span>Método</span><span>{getPaymentLabel(paymentMethod)}</span></div>
                    </div>
                    <div className="mt-4 border-t border-slate-200 pt-4">
                      <div className="flex items-center justify-between text-lg font-semibold text-slate-900">
                        <span>Total</span>
                        <span>{currency.format(summaryTotal)}</span>
                      </div>
                    </div>
                    <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                      Não clique em “Confirmar pagamento” nesta etapa. Primeiro pague realmente.
                    </div>
                  </div>
                </div>
              ) : null}

              {checkoutStep === 4 ? (
                <div className="space-y-5">
                  <div className="rounded-[28px] border border-amber-200 bg-amber-50 p-5">
                    <div className="flex items-start gap-3">
                      <div className="rounded-2xl bg-white p-3 text-amber-700 shadow-sm">
                        <AlertTriangle className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium uppercase tracking-[0.18em] text-amber-700">Já pagaste?</p>
                        <h4 className="mt-1 text-2xl font-semibold text-slate-950">Confirma o pagamento</h4>
                        <p className="mt-2 text-slate-700">
                          Só deves clicar no botão final depois de teres enviado o pagamento por {getPaymentLabel(paymentMethod)}. Ao confirmar, a refeição passa a contar como financiada no site.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-slate-200 bg-white p-5">
                    <p className="text-lg font-semibold text-slate-900">Resumo final</p>
                    <div className="mt-4 space-y-3 text-sm text-slate-600">
                      <div className="flex items-center justify-between"><span>Nome</span><span>{donorName || "—"}</span></div>
                      <div className="flex items-center justify-between"><span>Dia</span><span>{selectedMeal.day.label}</span></div>
                      <div className="flex items-center justify-between"><span>Refeição</span><span>{selectedMeal.type}</span></div>
                      <div className="flex items-center justify-between"><span>Quantidade</span><span>{quantity}</span></div>
                      <div className="flex items-center justify-between"><span>Método</span><span>{getPaymentLabel(paymentMethod)}</span></div>
                      <div className="flex items-center justify-between text-base font-semibold text-slate-900"><span>Total pago</span><span>{currency.format(summaryTotal)}</span></div>
                    </div>

                    <label className="mt-5 flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                      <input
                        type="checkbox"
                        checked={paidAcknowledged}
                        onChange={(e) => setPaidAcknowledged(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600"
                      />
                      <span>Sim, já fiz o pagamento e quero agora confirmar o apoio nesta página.</span>
                    </label>
                  </div>
                </div>
              ) : null}

              <div className="mt-6 flex flex-wrap justify-between gap-3">
                <div className="text-sm text-slate-500">A refeição só conta como financiada depois do último passo.</div>
                <div className="flex gap-3">
                  {checkoutStep > 1 ? (
                    <button onClick={() => setCheckoutStep((step) => Math.max(1, step - 1))} className="rounded-2xl border border-slate-200 px-5 py-3 font-medium text-slate-800 hover:bg-slate-50">
                      Voltar
                    </button>
                  ) : null}

                  {checkoutStep < 4 ? (
                    <button onClick={() => setCheckoutStep((step) => Math.min(4, step + 1))} className="rounded-2xl bg-emerald-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-emerald-700">
                      {checkoutStep === 3 ? "Ir para “Já pagaste?”" : "Continuar"}
                    </button>
                  ) : (
                    <button
                      onClick={handlePaymentConfirmation}
                      disabled={!paidAcknowledged}
                      className="rounded-2xl bg-emerald-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Confirmar pagamento
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {lastConfirmation ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4 z-40 max-w-md rounded-[28px] border border-emerald-200 bg-white p-5 shadow-2xl"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                <HandHeart className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-950">Apoio confirmado</h3>
                <p className="mt-1 text-sm text-slate-600">
                  {lastConfirmation.quantity} {lastConfirmation.mealType.toLowerCase()}{lastConfirmation.quantity > 1 ? "s" : ""} de {lastConfirmation.dayLabel} registados com sucesso.
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
                  <span className="rounded-full bg-slate-100 px-3 py-1">{lastConfirmation.paymentLabel}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">Já aparece no mural</span>
                </div>
                <button onClick={() => setLastConfirmation(null)} className="mt-3 text-sm font-medium text-emerald-700 hover:text-emerald-800">
                  Fechar mensagem
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
