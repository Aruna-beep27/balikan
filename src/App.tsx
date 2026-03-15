import DarkVeil from '@/components/DarkVeil'
import RotatingText from '@/components/RotatingText'

const rotatingTexts = [
  'Hi,How are you today?',
  'Im really miss u :(',
  'Would u come back to me?'
]

const featureHighlights = [
  {
    title: "I'll do anything for u",
    description: 'Asal masih masuk akal sih aku akan lakuin buat kamu, segalanya.'
  },
  {
    title: 'Maafin aku:(',
    description: 'Waktu aku putusin kamu itu memang pure sifatku yang masih kayak bocah labil gitu.'
  },
  {
    title: "I'll do the best version of me just for u",
    description: 'Aku sangat menyesal karena udah mutusin keputusan otakku yang sempit ini, plis ayo balikan:('
  }
]

function App() {

  // 🟦 PENTING: fungsi harus di sini, BUKAN dalam return
  const handleGaDulu = () => {
    const newTab = window.open('about:blank', '_blank');
    if (newTab) {
      newTab.document.open();
      newTab.document.write(`
        <html>
          <head>
            <title>Michelle... jangan pergi dulu 😔</title>
          </head>
          <body style="
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            height:100vh;
            background:#0f172a;
            color:white;
            font-family: 'Segoe UI', sans-serif;
            text-align:center;
          ">
            <h1 style="font-size:2rem; margin-bottom:1rem;">
              Michelle... aku masih pengen ngobrol sama kamu 😞
            </h1>
            <p style="opacity:0.8; max-width:400px;">
              Jangan pergi dulu ya?  
              Aku cuma... masih pengen liat kamu di tab sebelah 💙
            </p>
            <button 
              onclick="window.close()"
              style="
                margin-top:1.5rem;
                padding:10px 18px;
                background:#1e293b;
                border:none;
                border-radius:8px;
                color:white;
                cursor:pointer;
                font-size:1rem;
                transition:0.2s;
              "
              onmouseover="this.style.background='#334155'"
              onmouseout="this.style.background='#1e293b'"
            >
              Kalau kamu beneran mau pergi... tutup aja website ini dan jangan kasih tau di chat kita😔
            </button>
          </body>
        </html>
      `);
      newTab.document.close();
    } else {
      console.log("Popup diblokir browser");
    }
  };
  const handleMakasih = () => {
    const newTab = window.open('about:blank', '_blank');
    if (newTab) {
      newTab.document.open();
      newTab.document.write(`
        <html>
          <head>
            <title>Thank you... really</title>
          </head>
          <body style="
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            height:100vh;
            background:#0f172a;
            color:white;
            font-family:'Segoe UI', sans-serif;
            text-align:center;
          ">
            <h1 style="font-size:2rem; margin-bottom:1rem;">
              Makasih ya... udah mau nerima aku lagi 🥺💗
            </h1>
  
            <p style="max-width:420px; opacity:0.85; line-height:1.6;">
              Aku bener-bener bersyukur.  
              Kadang cuma butuh satu “iya” dari kamu buat bikin dunia aku balik cerah lagi.  
              
              Makasih... serius.  
            </p>
  
            <button 
              onclick="window.close()"
              style="
                margin-top:1.7rem;
                padding:10px 18px;
                background:#1e293b;
                border:none;
                border-radius:8px;
                color:white;
                cursor:pointer;
                font-size:1rem;
                transition:0.2s;
              "
              onmouseover="this.style.background='#334155'"
              onmouseout="this.style.background='#1e293b'"
            >
              Tutup tab ini 💗
            </button>
          </body>
        </html>
      `);
      newTab.document.close();
    } else {
      console.log("Popup diblokir browser");
    }
  };
  return (
    <div className="relative isolate overflow-hidden min-h-screen">

      {/* BACKGROUND FULLSCREEN */}
      <div className="fixed inset-0">
        <DarkVeil
          hueShift={35}
          speed={1.35}
          noiseIntensity={0.22}
          scanlineIntensity={0.5}
          scanlineFrequency={1.4}
          warpAmount={0.65}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/60 to-slate-950" />

        <div className="absolute inset-0 opacity-70 mix-blend-screen bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.4),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.45),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.25),transparent_60%)]" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 text-center px-6 py-16 sm:px-10 lg:px-16">
        <p className="rounded-full border border-slate-700/60 bg-slate-900/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
          Ni web bikin 1 minggu plis terima aku balik:(
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Hi, <span className="text-sky-300">Michelline Ediyanti</span>
        </h1>

        <RotatingText
          texts={rotatingTexts}
          className="flex w-full justify-center items-center text-center text-lg sm:text-xl lg:text-2xl text-slate-200"
          staggerDuration={0.08}
          rotationInterval={9000}
          splitLevelClassName="gap-1 justify-center"
          elementLevelClassName="drop-shadow-[0_0_12px_rgba(14,165,233,0.35)]"
        />

        <div className="flex gap-4 text-sm text-slate-400">
          <button 
          onClick={handleMakasih}
          className="rounded-full border border-slate-700/70 bg-white/5 px-5 py-2 font-medium text-white shadow-lg shadow-slate-900/40 transition hover:border-sky-400/50 hover:bg-slate-900/70"
          >
            Mau
          </button>

          {/* 🟦 PASANG FUNGSI DI SINI */}
          <button
            onClick={handleGaDulu}
            className="rounded-full border border-transparent bg-sky-400/90 px-5 py-2 font-medium text-slate-900 transition hover:bg-sky-300"
          >
            Ga dulu
          </button>
        </div>
      </div>

      {/* FEATURE SECTION */}
      <section className="relative z-10 mx-auto flex max-w-5xl flex-col gap-6 px-6 pb-16 sm:px-10 lg:px-16">
        <div className="grid gap-5 md:grid-cols-3">
          {featureHighlights.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-slate-800/80 bg-slate-900/50 px-6 py-5 shadow-lg shadow-black/20">
              <h2 className="text-lg font-semibold text-white">{feature.title}</h2>
              <p className="mt-2 text-sm text-slate-400">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
