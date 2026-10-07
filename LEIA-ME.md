# KRIPTOBIO — experiência 3D

Abra **ABRIR_APRESENTACAO.bat** ou dê dois cliques em **index.html**. Funciona offline, sem Python, servidor ou instalação. Os modelos já estão incluídos. Mantenha a pasta inteira, incluindo **models** e **vendor**.

- **Seis capítulos**, um para cada pessoa. Cada capítulo tem assuntos exploráveis sem aumentar o contador de capítulos.
- **Pele / Anatomia / Linfático**: alternar camadas com transição suave.
- Arrastar o modelo: girar. Rolar sobre o modelo no computador: aproximar.
- Setas, PageUp/PageDown ou espaço: mudar de capítulo.
- **F**: tela cheia. **R**: restaurar o enquadramento. Home/End: primeiro/último capítulo.
- **Linfonodo**, no capítulo 3: a câmera entra na estrutura. Capítulo 4: ambiente celular.
- Notas de fala e órgãos clicáveis foram retirados. Legendas identificam as estruturas.
- Fontes científicas e atribuição estão no botão **Fontes**.

Pele e músculos são malhas anatômicas reais derivadas do BodyParts3D / DBCLS. A rede linfática, os órgãos e as células são modelos didáticos, com posições aproximadas e escalas diferentes; não são malhas de um atlas clínico. A pele possui a anatomia externa completa de um corpo masculino adulto.

O modelo muscular vem de WaterCMY/anatomy-3d, com curadoria Z-Anatomy. A pele vem de yamz8/human-body-simulator, por meio do espelho de Kevin-Mattheus-Moerman. Os créditos e licenças CC BY-SA 2.1 JP estão em **models**. A conversão para arquivos JavaScript preserva a geometria; escala, orientação e materiais são adaptados nesta experiência, sob a mesma licença aplicável aos modelos.

A V6 está preservada em **index-v6-original.html**. A experiência 2D anterior está em **index-2d.html** (com app-2d.js e style-2d.css; a página preservada usa app.js e style.css, também mantidos).

Verificação: `node --check experience.js` e `node verify-3d.cjs`. Os testes conferem as malhas, altura normalizada, arquivos offline, os seis capítulos e transições de todos os assuntos. A experiência também foi conferida no navegador por servidor local, incluindo a troca de camadas e as vistas de linfonodo e células. Ensaie na resolução do projetor antes da apresentação.

Para desenvolvimento, `node preview-server.cjs` serve somente os arquivos da apresentação em http://127.0.0.1:8080. Isso é opcional: a apresentação final pode abrir diretamente do arquivo.
