import styled from "styled-components";
import AsideMenu from "./AsideMenu";

export default function Review() {
  return (
    <>
      <ContainerTimeline>
        <div>
          <ContainerReview>
            <PosterAndScore>
              <Poster src="https://img.elo7.com.br/product/zoom/265E64A/big-poster-filme-john-wick-3-parabellum-lo03-tam-90x60-cm-john-wick-3.jpg" />
              <aside>
                <p>John Wick 3 </p>
                <p>Enredo: 10</p>
                <p>Flow: 10</p>
                <p>Desfecho: 10</p>
                <p>Média: 10</p>
              </aside>
              <PostOwner>
                <p>michelle</p>
                <img src="https://images2.alphacoders.com/495/495160.png" />
              </PostOwner>
            </PosterAndScore>

            <div>
              Análise: Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
          </ContainerReview>
          <ContainerReview>
            <PosterAndScore>
              <Poster src="https://img.elo7.com.br/product/zoom/265E64A/big-poster-filme-john-wick-3-parabellum-lo03-tam-90x60-cm-john-wick-3.jpg" />
              <section>
                <p>John Wick 3 - Parabelum</p>
                <p>Enredo: 10</p>
                <p>Flow: 10</p>
                <p>Desfecho: 10</p>
                <p>Média: 10</p>
              </section>
              <PostOwner>
                <p>michelle</p>
                <img src="https://images2.alphacoders.com/495/495160.png" />
              </PostOwner>
            </PosterAndScore>

            <div>
              Análise: Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
          </ContainerReview>
        </div>
        <AsideMenu />
      </ContainerTimeline>
    </>
  );
}

const ContainerTimeline = styled.div`
  margin-top: 100px;
  display: flex;
  @media (max-width: 900px) {
    margin-top: 150px;
  }
`;

const ContainerReview = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #444444;
  border-radius: 8px;
  width: 25vw;
  margin-bottom: 28px;
  margin-right: 17vw;
  padding: 10px;
  @media (max-width: 900px) {
    width: 80vw;
    margin-right: 0;
  }
`;

const PosterAndScore = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  margin-bottom: 10px;
  z-index: 0;
  p {
    margin-top: 15px;
    margin-left: 15px;
  }
`;

const Poster = styled.img`
  width: 150px;
  border-radius: 8px;
`;

const PostOwner = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  p {
    margin: 0px;
    text-align: start;
  }
  img {
    width: 25px;
    height: 25px;
    margin-left: 5px;
    border-radius: 50px;
  }
`;
