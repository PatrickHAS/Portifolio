// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
  AboutMe,
  AboutMeText,
} from "./style";

let age = 35;

const date = new Date();
const month = date.getMonth();
const day = date.getDate();

if (month === 5 && day === 30) {
  age += 1;
}

export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Criando experiências por meio da tecnologia{" "}
            </Text>
            <Text type="body1" color="grey6">
              Sou estudante de programação na Kenzie Academy Brasil, participei
              de diversos projetos resolvendo problemas de alto nível e
              desenvolvendo habilidades
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos" type="btLink">
                Meus Projetos
              </Button>
              <Button as="a" href="#tecnologias" type="btLink">
                Tecnologias
              </Button>
              <Button as="a" href="#sobre_min" type="btLink">
                Sobre min
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            Ferramentas que domino
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey1">
                Vamos trocar uma ideia?
              </Text>
              <Text as="p" type="body1" color="grey2">
                No linkedIn sempre estou compartilhando meus processos diários
                para desenvolver esses projetos e estou disposto a trocar
                algumas ideias por lá
              </Text>
              <Button
                type="quarternary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Acessar perfil no LinkedIn
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type="body1" color="grey2" css={{ marginBottom: "$2" }}>
                Projetos
              </Text>
              <Text as="h3" type="heading2" color="grey1">
                Originalidade e{" "}
                <Text as="span" color="brand1" type="heading2">
                  dedicação
                </Text>{" "}
                em cada detalhe
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
          <AboutMe id="sobre_min">
            <Text type="heading4">Sobre min: </Text>
          </AboutMe>
          <AboutMeText>
            <Text>
              Olá! meu nome é{" "}
              <Text as="span" color="brand1" type="heading5">
                Patrick Santos
              </Text>{" "}
              tenho {age} anos, bom... minha paixão pela tecnologia começou no
              final de 2021, quando um amigo me indicou um curso de RPA(robotic
              process automation), aqui foi meu primeiro contato com a
              tecnologia.
              <br />
              <br />
              Eu trabalhava com vendas e devido a pandemia que se iniciou em
              2020, as oportunidade de trabalho na área de vendas foram ficando
              escassas naquele ano, e eu me encontrava desempregado, dai então
              me venho a vontade de mudar de profissão, foi quando a Kenzie
              Academy Brasil apareceu na minha vida, e foi a melhor coisa que já
              me aconteceu, me apaixonei pela tecnologia, eu amo coda, eu me
              sinto bem quando estou codando, e resolvi levar como plano de
              vida, desenvolver tecnologia.
              <br />
              <br />
              Na Kenzie Academy Brasil, eu ja desenvolvi mais de 40 projetos
              entre front e back end, além de realizar projetos em equipe, isso
              me fez desenvolver minhas habilidades em soft skills, e hoje me
              sinto preparado para atuar na área de tecnologia.
              <br />
              <br />
              <Text type="heading5">A empresa que me contratar hoje,</Text>não
              vai contratar apenas mais um funcionário, vai contratar quem
              resolve seus problemas, quem ajudar a equipe nas dificuldades do
              dia a dia, quem faz a maquina girar, eu sou muito competitivo e
              ambicioso, sempre quero ser o melhor, e se eu não for o melhor...
              vou estar entre os melhores.
              <br />
              <br />
              <Text type="heading5">Meu objetivo</Text>
              profissional é desenvolver minhas habilidades em tecnologia e
              contribuir para o sucesso da empresa. Acredito que posso aplicar
              minhas habilidades e conhecimentos adquiridos até o momento, e ao
              mesmo tempo, aprender novas tecnologias e crescer ao lado da
              equipe. Estou em busca de uma oportunidade onde posso
              desenvolvê-lo.
            </Text>
          </AboutMeText>
        </Container>
      </ProjectsArea>
    </main>
  );
};
