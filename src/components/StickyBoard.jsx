/** @jsx jsx */
import { jsx } from '@emotion/core'
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import iconRemove from '../images/icon-remove.svg';

const Container = styled.div`
    border-radius: 5px;
    width: 60%;
    margin: auto;
    height: 80px;
    margin-top: -40px;
    margin-bottom: 40px;
    background-color: white;
    box-shadow: 0px 10px  10px #63BABA;
    display: grid;
    grid-template-columns: 90% 10%;
`
const stickerP = css`
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 7px;
    background-color: #EBF9F7;
    color: #63BABA;
    font-weight: 500;
    margin-top: auto;
    margin-bottom: auto;
`
const imageSticker = css`
    height: 15px;
    background-color: #63BABA;
    padding: 10px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-top: auto;
    margin-bottom: auto;
    cursor:pointer;
    &:hover{
        background-color: #1F1F1F;
    }
`

const clearStickyBoard = css`
    color: #63BABA;
    font-weight: 500;
    text-decoration: underline;
    cursor:pointer;
`
const centerDiv = css`
    display: flex;
    align-items: center;
`


const Sticker = ({ sticker, callbackRemove }) => {
    return (
        <div style={{ display: "flex", paddingRight: "10px" }}>
            <p css={stickerP}>{sticker}</p><img css={imageSticker} alt="borrar" src={iconRemove} onClick={() => callbackRemove(sticker)}></img>
        </div>
    )
}

const StickyBoard = ({ list, callbackRemove, callbackClear }) => {
    console.log(list)
    return (
        <Container>
            <div style={{ display: "flex", marginLeft: "20px" }}>
                {list && list.map((x, i) => <Sticker key={i} sticker={x} callbackRemove={callbackRemove} />)}

            </div>
            <div css={centerDiv} >
                <p css={clearStickyBoard} onClick={()=>callbackClear()}>
                    Clear
                </p>
            </div>
        </Container>
    )
}

export default StickyBoard