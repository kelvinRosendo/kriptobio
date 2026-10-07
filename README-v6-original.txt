KRIPTOBIO V4
=================

Esta versão está preparada para usar modelos 3D reais com Three.js / GLTFLoader.

ESTRUTURA
---------
index.html
models/
  anatomy.glb        <- corpo/anatomia base
  lymphatic.glb      <- sistema linfático real (opcional)
  lymph-node.glb     <- linfonodo real (opcional)

O site possui fallbacks geométricos. Portanto ele abre mesmo sem os GLBs,
mas a qualidade visual aumenta quando eles são adicionados.

MODELO ANATÔMICO RECOMENDADO
----------------------------
Projeto:
https://github.com/WaterCMY/anatomy-3d

Arquivo esperado:
models/anatomy.glb

Fonte dos dados:
BodyParts3D / DBCLS + Z-Anatomy

Licença do modelo:
CC BY-SA (consulte LICENSE-MODEL do projeto de origem antes de redistribuir).

SISTEMA LINFÁTICO RECOMENDADO
-----------------------------
Modelo "Lymphatic System" de brianj.seely:
https://sketchfab.com/3d-models/lymphatic-system-286b841af50143e58d4c5fcbfd41fbbe

O resultado de pesquisa consultado indicava:
- download disponível
- ~72,4 mil triângulos
- licença CC Attribution

Baixe o modelo, converta/exporte para GLB caso necessário e renomeie para:
models/lymphatic.glb

LINFONODO
---------
Por enquanto a V4 contém fallback próprio para o linfonodo.
Se você encontrar/baixar um modelo GLB anatômico, salve como:
models/lymph-node.glb

COMO RODAR
----------
NÃO abra por file://.

No terminal, dentro da pasta do projeto:

Python:
python -m http.server 8080

Depois:
http://localhost:8080

Ou com Node:
npx serve .

POR QUE PRECISA DE SERVIDOR?
----------------------------
O GLTFLoader e módulos ES do navegador sofrem restrições de CORS quando
o HTML é aberto diretamente pelo explorador de arquivos.

OBJETIVO DESTA V4
-----------------
1. Corpo anatômico real carregável.
2. Sistema linfático em camada separada.
3. Linfonodo em cena própria.
4. Cena microscópica separada.
5. Transições de câmera entre escalas.
6. Fallback automático caso um modelo não seja encontrado.


V4.1 — CORREÇÕES DE CÂMERA E MODELO
-----------------------------------
- FOV reduzido de 42 para 38.
- Near clipping aumentado de 0.05 para 0.3.
- Anatomia redimensionada de 5.7 para 4.2 unidades de altura.
- Câmeras das cenas anatômicas afastadas.
- Transparência dos materiais do modelo anatômico desativada.
- Materiais recebem DoubleSide, depthWrite e depthTest.
- Normais das geometrias são recalculadas.
- Giro automático do stage foi removido.
- Proteção adicional impede a câmera de ficar perto demais do alvo.
- Incluído INICIAR_LOCALHOST.bat para abrir o projeto rapidamente no Windows.

COMO ABRIR NO WINDOWS
---------------------
1. Extraia o ZIP inteiro.
2. Dê dois cliques em INICIAR_LOCALHOST.bat.
3. O navegador deve abrir em:
   http://localhost:8080

Se o Windows bloquear o .bat:
- abra o terminal na pasta
- rode: python -m http.server 8080
- abra http://localhost:8080


V4.2 — CORREÇÃO REAL DE ESCALA / ORIENTAÇÃO
--------------------------------------------
O problema visto nas capturas não era simplesmente a câmera.

O GLB pode vir com o eixo vertical em Z ou X. A V4.1 media somente size.y,
o que podia fazer um modelo com Y pequeno ser ampliado várias vezes.

A V4.2:
- detecta automaticamente o maior eixo do GLB;
- rotaciona X-up/Z-up para Y-up;
- escala pela MAIOR dimensão do bounding box;
- centraliza somente depois de rotacionar e escalar;
- mantém o modelo em no máximo ~4.6 unidades;
- usa câmeras compatíveis com esse tamanho;
- aumenta a distância mínima de segurança;
- preserva as normais originais do GLB;
- adiciona iluminação ambiente para reduzir faces totalmente pretas;
- tecla R reposiciona a cena atual caso necessário.

RODAR
-----
Dê dois cliques em INICIAR_LOCALHOST.bat
ou:
python -m http.server 8080

Abra:
http://localhost:8080


V5 — COMPOSIÇÃO E SENSAÇÃO DE VIAGEM
------------------------------------
Mudanças desta versão:
- corpo maior na composição e deslocado mais para a direita;
- títulos menos dominantes;
- enquadramentos mais cinematográficos;
- transições com curva 3D (CatmullRomCurve3);
- sensação de aproximação: corpo -> região linfática -> linfonodo;
- sensação de travessia: linfonodo -> ambiente microscópico;
- partículas e túnel atmosférico para dar profundidade;
- atalho de teclado:
  * setas / PageUp / PageDown
  * espaço = próxima cena
  * R = reposicionar a cena atual


V6 — TRANSIÇÃO REAL + INTERIOR MAIS ORGÂNICO
--------------------------------------------
Novidades:
- transição com máscara/portal para trocar de escala;
- highlight na região-alvo antes de entrar;
- troca de cena acontecendo no meio da travessia, e não instantaneamente;
- linfonodo fallback mais orgânico;
- ambiente microscópico com membrana, câmara interna e células menos geométricas;
- macrófago, patógeno e anticorpos mais legíveis;
- melhor continuidade visual entre linfonodo e cena interna.

OBSERVAÇÃO
----------
A experiência ainda ficará limitada se o arquivo models/lymphatic.glb real não
for adicionado. Sem ele, o sistema linfático continua em fallback simplificado.
