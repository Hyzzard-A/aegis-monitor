import { Shield, Activity, Building2, Lock } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: <Activity className="text-yellow-400" size={34} />,
      title: "Eventos em Tempo Real",
      desc: "Processamento otimizado e confiável, garantindo resposta imediata aos eventos.",
    },
    {
      icon: <Building2 className="text-yellow-400" size={34} />,
      title: "Multi-Empresa",
      desc: "Ambiente isolado, seguro e escalável para múltiplos clientes.",
    },
    {
      icon: <Shield className="text-yellow-400" size={34} />,
      title: "Alta Confiabilidade",
      desc: "Arquitetura robusta, preparada para grande volume de conexões simultâneas.",
    },
    {
      icon: <Lock className="text-yellow-400" size={34} />,
      title: "Segurança Avançada",
      desc: "Autenticação segura, controle de acesso e proteção de dados.",
    },
  ];

  return (
    <section className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Feito para quem precisa de{" "}
          <span className="text-yellow-400">confiabilidade</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-12">
          {items.map((item, i) => (
            <div
              key={i}
              className="border border-zinc-800 bg-zinc-900/50 p-6 rounded-xl hover:border-yellow-500 transition"
            >
              {item.icon}
              <h3 className="text-xl text-white font-semibold mt-4">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
