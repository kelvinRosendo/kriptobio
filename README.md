# KRIPTOBIO

Apresentação interativa em 3D sobre o sistema imunológico e linfático, com seis capítulos, camadas anatômicas e comparação visual entre espécies.

Abra `index.html` para usar offline. Para servir localmente, execute `node preview-server.cjs` e acesse http://127.0.0.1:8080.

## Publicação

O GitHub Pages publica automaticamente a versão da branch `main` pelo fluxo em `.github/workflows/pages.yml`. Em Settings → Pages, a fonte deve ser **GitHub Actions**.

## Verificação

Execute `node --check experience.js` e `node verify-3d.cjs`.

Os modelos e diagramas têm finalidade didática. Créditos e licenças estão em `ATTRIBUTION.txt`, `models/` e `vendor/LICENSE-THREE.txt`. Consulte `LEIA-ME.md` para instruções da apresentação.
