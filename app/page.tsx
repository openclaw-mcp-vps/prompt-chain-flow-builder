export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          AI Prompt Management
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
          Build AI Workflows<br />
          <span className="text-[#58a6ff]">Visually. Without Code.</span>
        </h1>
        <p className="text-lg sm:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Drag-and-drop prompt nodes onto a canvas, chain them together, add conditional branching, and watch your AI pipeline execute step by step. No engineering degree required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-lg hover:bg-[#79b8ff] transition-colors"
          >
            Start Building — $25/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-4 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-lg hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 rounded-xl border border-[#30363d] bg-[#161b22] p-6 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#f85149]"></span>
            <span className="w-3 h-3 rounded-full bg-[#e3b341]"></span>
            <span className="w-3 h-3 rounded-full bg-[#3fb950]"></span>
            <span className="ml-2 text-xs text-[#8b949e] font-mono">prompt-chain-builder.app</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["Extract Keywords", "Summarize Text", "Generate Reply"].map((label, i) => (
              <div key={i} className="rounded-lg border border-[#30363d] bg-[#0d1117] p-3">
                <div className="text-xs text-[#58a6ff] font-mono mb-1">Node {i + 1}</div>
                <div className="text-sm font-semibold text-white">{label}</div>
                <div className="mt-2 h-1.5 rounded-full bg-[#21262d]">
                  <div className="h-1.5 rounded-full bg-[#58a6ff]" style={{width: `${[60, 85, 45][i]}%`}}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-2 justify-center">
            <div className="h-px flex-1 bg-[#30363d] self-center"></div>
            <span className="text-xs text-[#8b949e] font-mono">→ connected chain</span>
            <div className="h-px flex-1 bg-[#30363d] self-center"></div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-2xl border border-[#58a6ff] bg-[#161b22] p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$25<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] mb-6">Everything you need to automate AI workflows</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited prompt nodes & chains",
              "Conditional branching logic",
              "Variable passing between steps",
              "One-click chain execution",
              "Export workflows as JSON",
              "Priority email support"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-lg hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Now
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">Cancel anytime. No hidden fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Do I need coding experience to use this?",
              a: "Not at all. The drag-and-drop canvas lets you build complex AI prompt chains visually. If you can use a flowchart tool, you can build AI workflows here."
            },
            {
              q: "Which AI models are supported?",
              a: "You can connect to any OpenAI-compatible API endpoint. Bring your own API key and point it at GPT-4, Claude, Mistral, or any compatible model."
            },
            {
              q: "Can I export or share my workflows?",
              a: "Yes. Every workflow can be exported as a JSON file, shared with teammates, or imported back into the builder at any time."
            }
          ].map(({ q, a }) => (
            <div key={q} className="rounded-lg border border-[#30363d] bg-[#161b22] p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Prompt Chain Flow Builder. All rights reserved.
      </footer>
    </main>
  )
}
