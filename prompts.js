// Amostra do banco de prompts (a biblioteca real fica privada).
// Campos: cat, titulo, ferramenta, duracao, descricao, dicas[], prompt
window.CATEGORIAS = [
  "UGC Feminino", "UGC Masculino", "UGC Casal", "POV",
  "Vídeos com Copy", "Motion Control", "Criação de Modelo"
];

window.PROMPTS = [
  {
    cat: "UGC Feminino",
    titulo: "Exemplo: review casual em casa",
    ferramenta: "Gerador de vídeo com IA",
    duracao: "8s",
    descricao: "Exemplo de card: pessoa gravando um depoimento curto com câmera de celular.",
    dicas: ["Troque [PRODUTO] pelo seu produto.", "Troque [FALA] pelo texto da fala."],
    prompt: `Vertical 9:16 smartphone video, handheld. A person holds [PRODUCT] and talks to the camera in a relaxed tone.
Dialogue: "[FALA]"
Style: authentic UGC, natural light, no background music.`
  },
  {
    cat: "POV",
    titulo: "Exemplo: unboxing em primeira pessoa",
    ferramenta: "Gerador de vídeo com IA",
    duracao: "6s",
    descricao: "Exemplo de card: câmera na visão de quem abre a embalagem.",
    dicas: ["Descreva a embalagem em [PRODUTO]."],
    prompt: `First-person POV, hands opening a package containing [PRODUCT], soft daylight, close-up, realistic textures, no text on screen.`
  },
  {
    cat: "Criação de Modelo",
    titulo: "Exemplo: frame inicial com referência",
    ferramenta: "Gerador de imagem com IA",
    duracao: "Imagem",
    descricao: "Exemplo de card de imagem usada como primeiro quadro de um vídeo.",
    dicas: ["Anexe as imagens de referência antes de gerar."],
    prompt: `Using the attached reference photos, create a photorealistic vertical 9:16 photo of the same person holding the same product. No text, no watermark.`
  }
];
