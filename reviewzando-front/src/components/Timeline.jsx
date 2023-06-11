import styled from "styled-components";
import AsideMenu from "./AsideMenu";
import { useEffect } from "react";
import { useState } from "react";
import useGetReview from "../hooks/api/useGetReviews";

export default function Timeline() {
  const [reviewsList, setReviewsList] = useState([]);
  const { getReview } = useGetReview();

  useEffect(() => {
    setReviewsList(getReview);
    console.log(getReview);
  }, [getReview]);

  return (
    <>
      <ContainerTimeline>
        <div>
          {reviewsList?.length !== 0 ? (
            reviewsList?.map((r) => (
              <ContainerReview key={r.id}>
                <PosterAndScore>
                  <Poster src={r.poster} />
                  <aside>
                    <p>{r.title}</p>
                    <RatingLabel>
                      <strong>Enredo:</strong>
                      <RatingInput
                        plotScore={r.plotScore}
                        className="rating"
                        type="range"
                      />
                    </RatingLabel>
                    <RatingLabel>
                      <strong>Flow:</strong>
                      <RatingInput
                        plotScore={r.flowScore}
                        className="rating"
                        type="range"
                      />
                    </RatingLabel>
                    <RatingLabel>
                      <strong>Desfecho:</strong>
                      <RatingInput
                        plotScore={r.outcomeScore}
                        className="rating"
                        type="range"
                      />
                    </RatingLabel>
                    <p>Média: {r.average.toFixed(2)}</p>
                  </aside>
                  <PostOwner>
                    <p>{r.User.username}</p>
                    <img src={r.User.picture_url} />
                  </PostOwner>
                </PosterAndScore>

                <Desciption>{r.description}</Desciption>
              </ContainerReview>
            ))
          ) : (
            <></>
          )}
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
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #444444;
  border-radius: 8px;
  width: 30vw;
  margin-bottom: 28px;
  margin-right: 17vw;
  padding: 10px;
  @media (max-width: 900px) {
    width: 80vw;
    margin-right: 0;
  }
`;

const PosterAndScore = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 85%;
  height: 250px;
  margin-top: 10px;
  margin-bottom: 20px;
  z-index: 0;
  aside {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    margin-left: 20px;
    width: 50%;
    height: 100%;
  }
  p,
  label {
    text-align: start;
    width: 100%;
  }
  @media (max-width: 900px) {
    width: 100%;
    margin-right: 0;
    margin-top: 20px;
    aside {
      align-items: center;
      margin-left: 00px;
    }
    p {
      text-align: center;
    }
  }
`;

const Poster = styled.img`
  width: 155px;
  border-radius: 8px;
`;

const PostOwner = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
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
  @media (max-width: 900px) {
    top: 5px;
    right: 5px;
  }
`;

const Desciption = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RatingLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const RatingInput = styled.input`
  --dir: right;
  --fill: gold;
  --fillbg: rgba(100, 100, 100, 0.3);
  --star: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"/></svg>');
  --stars: 5;
  --starsize: 23px;
  --symbol: var(--star);
  --value: ${(props) => props.plotScore};
  --w: calc(var(--stars) * var(--starsize));
  --x: calc(100% * (var(--value) / var(--stars)));
  block-size: var(--starsize);
  inline-size: var(--w);
  position: relative;
  touch-action: manipulation;
  appearance: none;

  &::-moz-range-track {
    background: linear-gradient(
      to var(--dir),
      var(--fill) 0 var(--x),
      var(--fillbg) 0 var(--x)
    );
    block-size: 100%;
    mask: repeat left center/var(--starsize) var(--symbol);
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(
      to var(--dir),
      var(--fill) 0 var(--x),
      var(--fillbg) 0 var(--x)
    );
    block-size: 100%;
    mask: repeat left center/var(--starsize) var(--symbol);
    -webkit-mask: repeat left center/var(--starsize) var(--symbol);
  }

  &::-moz-range-thumb {
    height: var(--starsize);
    opacity: 0;
    width: var(--starsize);
  }

  &::-webkit-slider-thumb {
    height: var(--starsize);
    opacity: 0;
    width: var(--starsize);
    -webkit-appearance: none;
  }
  @media (max-width: 900px) {
    --starsize: 18px;
  }
`;
