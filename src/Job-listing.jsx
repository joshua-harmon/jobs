import React, { useState, useEffect } from 'react';
import WorkOffer from './components/WorkOffer';
import StickyBoard from './components/StickyBoard';
import data from './data.json';
import styled from '@emotion/styled';

const Wrapper = styled.div`
`
const Header = styled.div`
width: 100%;
height: 150px;
margin: auto;
background-color: #5DA5A4;
background-image: url("./images/bg-header-desktop.svg");
`

const JobListing = () => {
    const [stickyList, setStickyList] = useState("")
    const [matchList, setMatchList] = useState("")

    useEffect(() => {
        if (stickyList) {
            debugger
            let prueba = data.filter(x => stickyList.every(element => [...Object.values(x), ...x.languages, ...x.tools].includes(element)))
            setMatchList(prueba)
        }
    }, [stickyList])

    function addSticky(value) {
        if (!stickyList.includes(value)) {
            setStickyList([...stickyList, value])
        }
    }

    function removeSticky(value) {
        setStickyList(stickyList.filter(x => x !== value))
    }

    function clearStickyBoard() {
        setStickyList("")
    }

    return (
        <div>
            <Wrapper>
                <Header />
                <StickyBoard list={stickyList} callbackRemove={removeSticky} callbackClear={clearStickyBoard} />
                <div>
                    {stickyList === "" && data.map((x, i) => <WorkOffer callbackSticky={addSticky} key={x.id} data={x} />)}
                    {matchList.length > 0 && matchList.map((x, i) => <WorkOffer callbackSticky={addSticky} key={x.id} data={x} />)}

                </div>
            </Wrapper>
        </div>
    )
}

export default JobListing