/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled';

import { css, cx } from '@emotion/core';

const Container = styled.div`
    border-radius: 5px;
    width: 60%;
    margin: auto;
    display: grid;
    grid-template-columns: 15% 43% 43%;
    box-shadow: 1px 10px 15px #63BABA;
    border: 1px solid white
`
const ImageContainer = styled.div`
    height: 150px;
`
const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    height: 150px;
`
const FilterContainer = styled.div`
    height: 150px;
`
const keyWords = css`
    border-radius: 5px;
    padding: 5px;
    background-color: #EBF9F7;
    color: #63BABA;
    font-weight: 500;
    cursor:pointer;
    margin-left:10px;
    &:hover{
        size: 25px;
        background-color: #63BABA;
        color: white;
    }
`
const companyP = css`
    color: #63BABA;
    font-weight: 500;
    border: 0px;
    margin-bottom: 5px;
    margin-top: 0px;
    padding-right: 10px;
`
const positionP = css`
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    border: 0px;
    margin: 0px;
    padding: 0px;
    &:hover{
        color: rgb(99, 186, 186);
    }
`
const aditionalInfoP = css`
    color: #63BABA;
    margin: 0px;
    font-weight: 400
`

const newOffer = css`
    color: white;
    font-weight: bold;
    background-color: #63BABA;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 2px;
    font-size: 15px;
    border: 0px;
    margin: 0px;
    border-radius: 50px;
`

const featuredOffer = css`
    color: white;
    font-weight: 500;
    background-color: black;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 2px;
    font-size: 15px;
    border: 0px;
    margin: 0px;
    border-radius: 50px;
`

const companyImage = css`
    height: 90px;
    margin: auto;
    margin-top: 25px;
    display: block;   
`



const WorkOffer = ({ data, callbackSticky }) => {
    return (
        <div css={css`
        padding-bottom:20px`
        }>
            <Container>
                <ImageContainer>
                    <img css={companyImage} src={data.logo} alt="img"></img>
                </ImageContainer>
                <InfoContainer>
                    <div>
                        <div style={{ display: "flex" }}>
                            <p css={companyP} children={data.company} />
                            {data.new && <p css={newOffer}>New!</p>}
                            {data.featured && <p css={featuredOffer}>Featured</p>}
                        </div>
                        <div>
                            <p css={positionP}>{data.position}</p>
                        </div>
                        <div>
                            <p css={aditionalInfoP}>{`${data.postedAt}*${data.contract}*${data.location}`}</p>
                        </div>
                    </div>
                </InfoContainer>
                <FilterContainer>
                    <div css={css`
                    text-align: center;
                    margin-top: 50px;
                    display:flex
                `}>

                        {data.role && <p css={keyWords} onClick={() => { callbackSticky(data.role) }}>{data.role}</p>}
                        {data.level && <p css={keyWords} onClick={() => { callbackSticky(data.level) }}>{data.level} </p>}
                        {data.languages && data.languages.map((x, i) => <p key={i} css={keyWords} onClick={() => { callbackSticky(x) }}>{x} </p>)}
                        {data.tools && data.tools.map((x, i) => <p key={i} css={keyWords} onClick={() => { callbackSticky(x) }}>{x} </p>)}
                    </div>
                </FilterContainer>
            </Container >
        </div>
    )
}

export default WorkOffer