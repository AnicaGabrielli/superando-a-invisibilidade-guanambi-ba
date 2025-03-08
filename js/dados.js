const dados = [...document.querySelectorAll('.dados')];

const pesquisa1 = [
    'No Brasil, a discrepância entre a composição demográfica e a representação política é notável. Embora 56.1% da população se identifique como negra ou parda, essa representação não se reflete adequadamente nas esferas de poder. Nas eleições de 2020, o número de candidatos negros aumentou para 270 mil, representando um crescimento de 2.08% em relação ao pleito anterior. Este aumento marcou a primeira vez que a maioria dos candidatos se identificou como negra. No entanto, essa mudança não resultou em uma maior representação política, devido a barreiras institucionais e desigualdades no acesso a recursos financeiros.',

    'Para as mulheres, a situação é ainda mais desafiadora. Elas constituem 52% do eleitorado, sendo 27.8% mulheres negras. No entanto, nas eleições municipais recentes, menos de 5% das mulheres negras foram eleitas para cargos. A falta de recursos e apoio institucional continua sendo um obstáculo significativo para a participação efetiva das mulheres negras na política. O Supremo Tribunal Federal (STF) decidiu que a partir de 2022, os recursos e o tempo de propaganda eleitoral devem ser distribuídos proporcionalmente entre candidatos brancos e negros. Apesar dessa decisão, dados atuais mostram que candidatos negros ainda recebem apenas 40% dos fundos eleitorais, evidenciando uma persistente desigualdade.',

    'A desigualdade também é evidente na taxa de sucesso eleitoral. Em 2016, apenas 29.11% dos prefeitos eleitos eram negros, em contraste com 70,29% brancos. Para vereadores, a proporção foi de 42.07% negros e 57,13% brancos. A taxa de sucesso dos candidatos negros foi significativamente menor do que a dos candidatos brancos, refletindo uma contínua sub-representação. Além disso, as mulheres negras enfrentam desafios adicionais como o racismo e o machismo, que afetam suas campanhas e mandatos. Esses obstáculos destacam a necessidade de reformas para garantir uma maior inclusão política e uma representação mais equitativa.',

    'No mercado de trabalho da Bahia, as mulheres negras enfrentam desafios substanciais, evidenciados por altas taxas de desemprego e disparidades salariais. Segundo dados da Superintendência de Estudos Econômicos e Sociais da Bahia (SEI). a taxa de desemprego entre as mulheres negras foi de 20,3% em 2019, uma alta significativa em relação aos 14,4% registrados em 2012. Essa taxa é superior à dos homens brancos (12,2%), negros (14,8%) e mulheres brancas (17.6%).',

    'Além do desemprego, as mulheres negras baianas lidam com uma disparidade salarial acentuada. Em média, elas ganham R$ 1.286 mensais, menos da metade do salário médio dos homens brancos, que é de R$ 2.488. Essa desigualdade persiste mesmo quando o nível de escolaridade é semelhante, destacando as barreiras enfrentadas por essas mulheres no mercado de trabalho.',

    'Em termos de ocupação, as mulheres negras estão concentradas em setores que oferecem menores salários e menor prestigio social. Muitas delas trabalham como empregadas domésticas, balconistas, auxiliares de limpeza, cozinheiras, e operadoras de caixa. Segundo dados do Instituto Brasileiro de Geografia e Estatística (IBGE). cerca de 16.6% das mulheres negras ocupam cargos de trabalhadoras domésticas. enquanto uma porcentagem menor atua em setores como educação e saúde. geralmente em posições de menor qualificação.',

    'Em nível nacional, a situação reflete a marginalização das mulheres negras no mercado de trabalho. Uma pesquisa realizada pela 99jobs, em parceria com o Pacto Global da ONU - Rede Brasil, revelou que, apesar de muitas mulheres negras terem avançado academicamente, com 41% tendo pós-graduação ou MBA, apenas uma pequena parcela ocupa posições de liderança, como coordenadoras e gerentes.',

    'Esses dados destacam a persistência de desigualdades estruturais que limitam as oportunidades para mulheres negras, tanto na Bahia quanto no Brasil. A superação dessas barreiras é essencial para garantir a equidade no mercado de trabalho.',

    'Na Bahia, diversos movimentos de mulheres negras têm lutado pela igualdade de raça e gênero, buscando garantir seus direitos e combater as desigualdades estruturais. Um dos eventos importantes foi realizado pela Secretaria de Políticas para as Mulheres do Estado da Bahia (SPM-BA), em parceria com a Secretaria de Promoção da Igualdade Racial (SEPROMI), que discutiu as desigualdades enfrentadas por mulheres negras na América Latina e no Caribe.',

    'A Bahia também se destaca pela atuação de organizações como o Odara - Instituto da Mulher Negra, que promove ações voltadas para a defesa dos direitos das mulheres e o enfrentamento ao racismo e ao sexismo. Essas iniciativas incluem debates sobre saúde, educação, e participação política, essenciais para a construção de uma sociedade mais justa e equitativa.',

    'Outro movimento importante é o Bloco Afro llê Aiyê, que, além de seu papel cultural, também atua politicamente, defendendo a valorização da identidade negra e a luta contra o racismo.',

    'A inclusão de mulheres na política ainda é um desafio significativo em muitos lugares ao redor do mundo. Historicamente, as mulheres têm sido sub-representadas em cargos de liderança e de tomada de decisão, o que reflete uma desigualdade de gênero persistente na sociedade. Essa sub-representação não é apenas uma questão de números, mas também de diversidade de perspectivas, que são cruciais para a construção de políticas públicas mais justas e inclusivas.',

    'Em Guanambi, não é diferente. Apesar de avanços nas últimas décadas, o número de mulheres em cargos políticos de liderança ainda é preocupantemente baixo. Isso se reflete em todas as esferas do governo local, onde a presença feminina é minúscula em comparação com a masculina. Para mudar essa realidade, é preciso urgentemente de políticas que promovam maior inclusão e representatividade feminina na política municipal.'

]

    for(let i = 0; i > 3; i++){
        dados[i].innerHTML = pesquisa1[i];
    }

    dados.map((el,chave)=>{
        el.innerHTML = pesquisa1[chave];
    })